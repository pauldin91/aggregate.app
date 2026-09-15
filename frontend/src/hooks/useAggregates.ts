import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../api";
import type { AggregatedResult } from "../types";
import ROUTES from "../constants/routes";

export function useAggregates() {
  const [results, setResults] = useState<AggregatedResult[]>([]);
  const navigate = useNavigate();

  const search = (keyword: string) => {
    apiFetch(`api/v1/aggregates?keyword=${encodeURIComponent(keyword)}`, { method: "GET" })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        return res.json();
      })
      .then((data: AggregatedResult[]) => {
        if (!data || data.length === 0) throw new Error("No results found.");
        setResults(data);
      })
      .catch((err: Error) => navigate(ROUTES.ERROR, { state: { message: err.message } }));
  };

  return { results, search };
}
