import { useState } from "react";

type Props = {
  onSearch: (keyword: string) => void;
};

export default function Search({ onSearch }: Props) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    onSearch(keyword);
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <label htmlFor="search" className="block mb-2.5 text-sm font-medium sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="block w-full p-3 ps-9 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm placeholder:text-gray-400"
          placeholder="Search"
          required
        />
        <button
          type="submit"
          className="absolute end-1.5 bottom-1.5 text-white bg-blue-600 hover:bg-blue-700 border border-transparent focus:ring-4 focus:ring-blue-300 font-medium rounded text-xs px-3 py-1.5 focus:outline-none"
        >
          Search
        </button>
      </div>
    </form>
  );
}
