import React from "react";
import BlogList from "./components/BlogList";
import NewPost from "./components/NewPost";
import './App.css';

function App() {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>My Personal Blog</h1>
      
      {/* Form to add a new blog */}
      <section style={{ marginBottom: "40px" }}>
        <NewPost />
      </section>
      
      {/* Display all blog posts */}
      <section>
        <BlogList />
      </section>
    </div>
  );
}

export default App;

