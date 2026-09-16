import styles from "./Dashboard.module.css";
import Search from "../components/Search";
import ResultsTable from "../components/ResultsTable";
import { useAggregates } from "../hooks/useAggregates";

export default function Dashboard() {
  const { results, search } = useAggregates();
  const token = localStorage.getItem("access_token") ?? "";

  const copyToken = () => navigator.clipboard.writeText(token);

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <div className={styles.tokenRow}>
        <label className={styles.tokenLabel}>{token.slice(0, 8)}...</label>
        <button className={styles.copyBtn} onClick={copyToken}>Copy Token</button>
      </div>
      <Search onSearch={search} />
      <ResultsTable results={results} />
    </div>
  );
}
