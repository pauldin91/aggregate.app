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
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data?.token) {
            localStorage.setItem("access_token", data.token);
            navigate("/dashboard");
          } else {
            throw new Error("No access token returned.");
          }
        })
        .catch((err: Error) =>
          navigate("/error", { state: { message: err.message } }),
        );
    } else {
      navigate("/error", {
        state: { message: "Missing authorization code or issuer." },
      });
    }
  }, [navigate]);

  return <div>Processing GitHub login...</div>;
}
