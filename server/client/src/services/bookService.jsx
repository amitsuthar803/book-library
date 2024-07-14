// src/services/bookService.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/books",
});

export const getBooks = () => api.get("/");
export const getBook = (id) => api.get(`/${id}`);
export const createBook = (book) => api.post("/", book);
export const updateBook = (id, book) => api.put(`/${id}`, book);
export const deleteBook = (id) => api.delete(`/${id}`);
