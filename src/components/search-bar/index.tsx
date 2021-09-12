import { useEffect, useState } from "react";
import "./styles.css";

type SearchBarProps = {
  searchRepo: (e: string) => void;
};

export default function SearchBar({ searchRepo }: SearchBarProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value) searchRepo(value);
    else searchRepo("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value.trimStart())}
      />
    </div>
  );
}
