import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import ROUTES from "../constants/routes";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const token = localStorage.getItem("access_token");
  return token ? <>{children}</> : <Navigate to={ROUTES.HOME} replace />;
}
