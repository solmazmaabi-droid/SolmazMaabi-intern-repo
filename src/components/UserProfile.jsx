import { useEffect, useState } from "react";
import { fetchUser } from "../api/userApi";

export default function UserProfile() {
  const [status, setStatus] = useState("loading"); // loading | success | error
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetchUser()
      .then((data) => {
        if (!isMounted) return;
        setUser(data);
        setStatus("success");
      })
      .catch(() => {
        if (!isMounted) return;
        setStatus("error");
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p role="alert">Failed to load user</p>;

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
    </div>
  );
}
