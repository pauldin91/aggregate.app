import styles from "./Dashboard.module.css";
import Search from "../components/Search";
import ResultsTable from "../components/ResultsTable";
import { useAggregates } from "../hooks/useAggregates";

export default function Dashboard() {
  const { results, search } = useAggregates();

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <Search onSearch={search} />
      <ResultsTable results={results} />
    </div>
  );
}
