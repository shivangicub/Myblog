import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>All Blogs</h2>
      {posts.map(post => (
        <div key={post._id} style={{border: "1px solid #ccc", margin: "10px", padding: "10px"}}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <small>{new Date(post.date).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
