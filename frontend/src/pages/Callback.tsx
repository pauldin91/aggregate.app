import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../api";
import ROUTES from "../constants/routes";

export default function Callback() {
  const navigate = useNavigate();
  const called = useRef(false);

  useEffect(() => {
    if (called.current) return;
    called.current = true;
    
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const iss = params.get("iss");
    console.log(`code : ${code}, iss : ${iss}`);

    if (!code || !iss) {
      navigate(ROUTES.ERROR, { state: { message: "Missing authorization code or issuer." } });
      return;
    }

    apiFetch("auth/github/callback", {
      method: "POST",
      body: JSON.stringify({ code, iss }),
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) throw new Error(`Authentication failed with status ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (!data?.token) throw new Error("No access token returned.");
        localStorage.setItem("access_token", data.token);
        navigate(ROUTES.DASHBOARD);
      })
      .catch((err: Error) => navigate(ROUTES.ERROR, { state: { message: err.message } }));
  }, [navigate]);

  return <div>Processing GitHub login...</div>;
}
