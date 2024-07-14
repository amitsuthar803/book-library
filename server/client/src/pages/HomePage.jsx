// src/pages/HomePage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../services/bookService";

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getBooks();
      setBooks(response.data);
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book Library</h1>
      <Link to="/add">Add Book</Link>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <Link to={`/book/${book._id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
