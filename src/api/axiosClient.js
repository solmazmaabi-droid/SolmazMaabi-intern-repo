import axios from "axios";

// Small helper to generate a request id
function generateRequestId() {
  // Prefer crypto if available
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback
  return `req_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

const axiosClient = axios.create({
  baseURL: import.meta?.env?.VITE_API_BASE_URL || "https://jsonplaceholder.typicode.com",
  timeout: 10000, // 10s timeout to prevent hanging requests
  headers: {
    accept: "*/*",
  },
});

// Request interceptor: add auth token + request id
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // adjust key if needed
    const requestId = generateRequestId();

    config.headers = config.headers || {};

    // Dynamic request id header
    config.headers["x-request-id"] = requestId;

    // Attach token if available
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Request setup error (before the request is sent)
    return Promise.reject(error);
  }
);

export default axiosClient;
