import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import { createAbortController } from "../api/requestHelpers";
import Button from "./Button";

function AxiosPostTest() {
  const navigate = useNavigate();
  const controllerRef = useRef(null);

  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handlePost = async () => {
    // Cancel any in-flight request before starting a new one
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = createAbortController();

    setStatus("loading");
    setResult(null);
    setErrorMsg("");

    try {
      // Example POST with parameters (payload)
      const payload = {
        title: "Focus Bear test",
        body: "Axios POST request with interceptor + timeout + abort",
        userId: 1,
      };

      const response = await axiosClient.post("/posts", payload, {
        signal: controllerRef.current.signal,
        // You can also override timeout per request if needed:
        // timeout: 5000,
      });

      // Example redirect logic:
      // If your real API returns something like { redirectTo: "/profile" }
      if (response.data?.redirectTo) {
        navigate(response.data.redirectTo);
        return;
      }

      setResult(response.data);
      setStatus("success");
    } catch (err) {
      // Abort / cancellation
      if (err.name === "CanceledError" || err.code === "ERR_CANCELED") {
        setStatus("idle");
        return;
      }

      // Timeout
      if (err.code === "ECONNABORTED") {
        setErrorMsg("Request timed out. Please try again.");
        setStatus("error");
        return;
      }

      // Auth / redirect example (commonly 401)
      if (err.response?.status === 401) {
        navigate("/login");
        return;
      }

      setErrorMsg(err.message || "Request failed");
      setStatus("error");
    }
  };

  const handleCancel = () => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
  };

  return (
    <div style={{ padding: 16 }}>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <Button onClick={handlePost} disabled={status === "loading"}>
          Send POST
        </Button>
        <Button onClick={handleCancel} disabled={status !== "loading"}>
          Cancel
        </Button>
      </div>

      <p>Status: {status}</p>

      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

      {result && (
        <pre style={{ background: "#f4f4f4", padding: 12 }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default AxiosPostTest;
