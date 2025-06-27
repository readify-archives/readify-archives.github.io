import { useEffect, useState } from "react";
import BookCard from "./components/BookCard";
import SearchBar from "./components/SearchBar";

const PAGE_SIZE = 100;

function App() {
  const [books, setBooks] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("https://readify-archives-github-io.onrender.com/books")
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setDisplayed(data.slice(0, PAGE_SIZE));
      });
  }, []);

  const loadMore = () => {
    const next = books.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
    setDisplayed(prev => [...prev, ...next]);
    setPage(p => p + 1);
  };

  return (
    <div className="p-4">
      <SearchBar books={books} setDisplayed={setDisplayed} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {displayed.map((book, idx) => (
          <BookCard key={idx} book={book} />
        ))}
      </div>
      {displayed.length < books.length && (
        <button onClick={loadMore} className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">
          Load More
        </button>
      )}
    </div>
  );
}
export default App;