// src/pages/BookPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBook, deleteBook } from "../services/bookService";
import { toast } from "react-toastify";

const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBook(id);
        setBook(response.data);
      } catch (error) {
        toast.error("Failed to fetch book details.");
      }
    };

    fetchBook();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteBook(id);
      toast.success("Book deleted successfully!");
      window.location.href = "/";
    } catch (error) {
      toast.error("Failed to delete book.");
    }
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Published Date: {new Date(book.publishedDate).toDateString()}</p>
      <p>Genre: {book.genre}</p>
      <Link to={`/edit/${book._id}`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default BookPage;
