import styles from "./Dashboard.module.css";
import { jwtDecode, type JwtPayload } from 'jwt-decode';


export default function Dashboard() {
  const token = localStorage.getItem("access_token") ?? "";

  const decodePayload = (jwt: string): JwtPayload => {
    try {
      const payload = jwtDecode(jwt);
      return payload;
    } catch {
      return {};
    }
  };

  const claims = Object.entries(decodePayload(token));

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Claim</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {claims.map(([claim, value]) => (
            <tr key={claim}>
              <td>{claim}</td>
              <td>{String(value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
