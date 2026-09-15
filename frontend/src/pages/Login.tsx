import ROUTES from "../constants/routes";

export default function Login() {
  const loginWithGitHub = () => {
    const clientID = import.meta.env.VITE_GITHUB_CLIENT_ID;
    const redirectURI = encodeURIComponent(`${window.location.origin}${ROUTES.CALLBACK}`);
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURI}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Welcome</h1>
      <button
        onClick={loginWithGitHub}
        className="px-4 py-2 text-white bg-gray-900 hover:bg-gray-700 rounded-lg text-sm font-medium"
      >
        Login with GitHub
      </button>
    </div>
  );
}
