import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../api";
import type { AggregatedResult } from "../types";
import ROUTES from "../constants/routes";
import type { CityResult } from "../types/city";

export function useAggregates() {
  const [results, setResults] = useState<CityResult[]>([]);
  const navigate = useNavigate();

  const search = (keyword: string) => {
    apiFetch(`api/v1/pollution?keyword=${encodeURIComponent(keyword)}`, { method: "GET" })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        return res.json();
      })
      .then((data: CityResult[]) => {
        if (!data || data.length === 0) throw new Error("No results found.");
        setResults(data);
      })
      .catch((err: Error) => navigate(ROUTES.ERROR, { state: { message: err.message } }));
  };

  return { results, search };
}
