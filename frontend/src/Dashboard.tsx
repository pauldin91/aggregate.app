import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import Search, { type AggregatedResult } from "./Search";

export default function Dashboard() {
  const [results, setResults] = useState<AggregatedResult[]>([]);
  const navigate = useNavigate();

  const handleResults = (data: AggregatedResult[]) => {
    if (!data || data.length === 0) {
      navigate("/error", { state: { message: "No results found." } });
    } else {
      setResults(data);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <Search onResults={handleResults} />
      {results.length > 0 && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Article Title</th>
              <th>Article Author</th>
              <th>City</th>
              <th>Country</th>
              <th>Feed Title</th>
              <th>Feed Source</th>
              <th>Sentiment</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, i) => (
              <tr key={i}>
                <td>{r.article?.title ?? "-"}</td>
                <td>{r.article?.author ?? "-"}</td>
                <td>{r.city?.data?.city ?? "-"}</td>
                <td>{r.city?.data?.country ?? "-"}</td>
                <td>{r.feed?.title ?? "-"}</td>
                <td>{r.feed?.source ?? "-"}</td>
                <td>{r.feed?.overallSentimentLabel ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
