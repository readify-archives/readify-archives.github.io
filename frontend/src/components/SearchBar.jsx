import Fuse from "fuse.js";
import { useState } from "react";

function SearchBar({ books, setDisplayed }) {
  const [query, setQuery] = useState("");
  const fuse = new Fuse(books, {
    keys: ["title", "authors", "publisher", "tags"],
    threshold: 0.4,
  });

  const handleSearch = (e) => {
    const text = e.target.value;
    setQuery(text);
    if (!text) return setDisplayed(books.slice(0, 100));
    const result = fuse.search(text).map(r => r.item);
    setDisplayed(result);
  };

  return (
    <input
      value={query}
      onChange={handleSearch}
      placeholder="Search books..."
      className="w-full mb-6 p-2 border rounded"
    />
  );
}
export default SearchBar;