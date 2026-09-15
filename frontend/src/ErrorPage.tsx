import { useLocation, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold text-red-600">Something went wrong</h1>
      <p className="text-sm text-gray-600">{state?.message ?? "An unexpected error occurred."}</p>
      <button onClick={() => navigate("/")} className="text-sm underline text-blue-600">
        Go back home
      </button>
    </div>
  );
}
