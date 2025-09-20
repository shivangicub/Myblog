import React, { useState } from "react";
import axios from "axios";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // get token
    if (!token) {
      alert("You must be logged in as admin");
      return;
    }


    try {
      await axios.post("http://localhost:5000/api/posts", { title, content });
      alert("Post created!");
      setTitle("");
      setContent("");
    } catch (err) {
      console.log(err);
      alert("Error creating post");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Blog Post</h2>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <br />
      <textarea 
        placeholder="Content" 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        required 
      />
      <br />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default NewPost;
