import React, { useState } from "react";
import { TextField, Button, MenuItem } from "@mui/material";

const categories = ["Technology", "Cooking", "Finance"];

const BlogPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, for example, sending the data to a backend
    console.log("Submitted:", { title, content, category });
    // Clear the form fields after submission
    setTitle("");
    setContent("");
    setCategory("");
  };

  return (
    <div className="w-1/2 mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <TextField
            fullWidth
            id="title"
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <TextField
            fullWidth
            id="content"
            label="Content"
            multiline
            rows={8} // Increased the number of rows
            variant="outlined"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <TextField
            select
            fullWidth
            id="category"
            label="Category"
            variant="outlined"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            {categories.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <button
          className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          New Post
        </button>
      </form>
    </div>
  );
};

export default BlogPostForm;
