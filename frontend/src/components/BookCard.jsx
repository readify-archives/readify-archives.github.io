import { useState } from "react";

function BookCard({ book }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div onClick={() => setExpanded(!expanded)} className="bg-white rounded-xl shadow-md p-2 cursor-pointer transition hover:scale-105">
      <img src={`https://readify-archives-github-io.onrender.com/${book.cover}`} alt={book.title} className="w-full h-48 object-cover rounded" />
      <h3 className="text-md font-semibold mt-2">{book.title}</h3>
      {expanded && (
        <div className="text-sm mt-1">
          <p><b>Author:</b> {book.authors}</p>
          <p><b>Publisher:</b> {book.publisher}</p>
          <p><b>Date:</b> {book.publish_date}</p>
          <p><b>Lang:</b> {book.language}</p>
        </div>
      )}
    </div>
  );
}
export default BookCard;