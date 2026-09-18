import styles from "../pages/Dashboard.module.css";
import type { AggregatedResult } from "../types";
import type { CityResult } from "../types/city";

type Props = { results: CityResult[] };

export default function ResultsTable({ results }: Props) {

  console.log(results);
  if (results.length === 0) return null;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>City</th>
          <th>State</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {results.map((r, i) => (
          <tr key={i}>
            <td>{r?.data?.city ?? "-"}</td>
            <td>{r?.data?.state ?? "-"}</td>
            <td>{r?.data?.country ?? "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
