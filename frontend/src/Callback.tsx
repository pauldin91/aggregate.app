import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "./api";

export default function Callback() {
  const navigate = useNavigate();
  const called = useRef(false);

  useEffect(() => {
    if (called.current) return;
    called.current = true;

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const iss = urlParams.get("iss");

    if (code && iss) {
      apiFetch("auth/github/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, iss }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.token);
          if (data) {
            localStorage.setItem("access_token", data.token);
            navigate("/dashboard");
          } else {
            navigate("/");
          }
        })
        .catch(() => navigate("/"));
    } else {
      navigate("/");
    }
  }, [navigate]);

  return <div>Processing GitHub login...</div>;
}
