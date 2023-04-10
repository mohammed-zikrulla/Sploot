import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import "./BlogList.css";

function BlogList({ slug, Token }) {
  const [data, setData] = useState([]);
  const api = `https://api-staging-v2.sploot.space/api/v2/public/cms/post-categories/${slug}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(api, {
          headers: { Authorization: `Bearer ${Token}` },
        });
        setData(response.data.data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [slug]);

  useEffect(() => {
    // console.log(data);
  }, [data]);

  return (
    <div className="blog-list">
      {data.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          image={blog.imageUrl}
          data={data}
        />
      ))}
    </div>
  );
}

export default BlogList;
