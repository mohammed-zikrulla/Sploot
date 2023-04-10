import React from "react";
import "./BlogCard.css";
// import blogDescription from "./blogDescription";

function BlogCard({ title, image, author, date, content }) {
  return (
    <button className="blog-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
    </button>
  );
}

export default BlogCard;
