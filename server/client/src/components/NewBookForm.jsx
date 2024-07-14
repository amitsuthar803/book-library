// src/components/NewBookForm.js
import { useState } from "react";
import axios from "axios";

const NewBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [publishedYear, setPublishedYear] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = { title, author, description, publishedYear };

    axios
      .post("http://localhost:5000/books", newBook)
      .then((response) => console.log(response.data))
      .catch((error) =>
        console.error("There was an error creating the book!", error)
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Book</h1>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Published Year:
        <input
          type="number"
          value={publishedYear}
          onChange={(e) => setPublishedYear(e.target.value)}
        />
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default NewBookForm;
