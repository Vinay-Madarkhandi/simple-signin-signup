
import React, { useState, useEffect } from "react";
import axios from "axios";
import '../App.css';

const User = ({ token }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("https://api-dgxl.onrender.com/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserInfo(response.data);
        setMessage(response.data.msg);
      } catch (error) {
        setMessage(error.response.data.msg);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]);

  return (
    <div className="container">
      <h2>User Info</h2>
      {userInfo ? (
        <div>
          <p>Username: {userInfo.username}</p>
          <p>{message}</p>
        </div>
      ) : (
        <p>Please sign in to view user information.</p>
      )}
    </div>
  );
};

export default User;
