import React, { useState, useEffect } from "react";
import "./userDisplay.css";
import axios from "axios";

function UserDisplay({ Token }) {
  const [user, setUser] = useState("");
  const API = "https://api-staging-v2.sploot.space/api/v2/user";
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(API, {
          headers: { Authorization: `Bearer ${Token}` },
        });
        setUser(response.data.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="header">
      <h2 className="title">Sploot Spoof</h2>
      <img className="profile-icon" src={user.photoUrl} alt="Profile Icon" />
      <span className="username">{user.name}</span>
    </div>
  );
}

export default UserDisplay;
