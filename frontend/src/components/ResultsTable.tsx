import type { AggregatedResult } from "../types";
import styles from "../pages/Dashboard.module.css";

type Props = { results: AggregatedResult[] };

export default function ResultsTable({ results }: Props) {
  if (results.length === 0) return null;

  return (
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
  );
}
