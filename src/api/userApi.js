export async function fetchUser() {
  const res = await fetch("https://example.com/api/user");
  if (!res.ok) throw new Error("Request failed");
  return res.json();
}
