import { useEffect, useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

const Home = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) setAuth(true);
  }, []);


  if (error) return <p>{error}</p>;

  if (!auth) {
    return <Login />;
  }

  return <Dashboard />;
};

export default Home;
