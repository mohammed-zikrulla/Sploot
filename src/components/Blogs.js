import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryTab from "./CategoryTab";
import UserDisplay from "./UserDisplay";
import BlogList from "./BlogList";
import { useSelector } from "react-redux";

function Blogs({ Token }) {
  const token = useSelector((state) => state.Token);
  console.log(token);
  const [data, setData] = useState([]);
  const [activeCat, setActiveCat] = useState({});

  const api = `https://api-staging-v2.sploot.space/api/v2/cms/post-categories`;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(api, {
          headers: { Authorization: `Bearer ${Token}` },
        });
        setData(response.data.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <UserDisplay Token={Token} />
      <CategoryTab data={data} setActiveCat={setActiveCat} />
      <BlogList slug={activeCat.slug} Token={Token} />
    </div>
  );
}

export default Blogs;
