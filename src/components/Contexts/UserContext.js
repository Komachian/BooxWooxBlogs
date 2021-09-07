import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [showOverlay, setShowOverlay] = useState(false);

  const uploadBlog = async (blogData) => {
    console.log(blogData);
    const response = await axios({
      method: "POST",
      url: process.env.REACT_APP_WRITE_BLOG_ENDPOINT,
      headers: {
        Authorization: `bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
      },
      data: blogData,
    });

    const data = response.data;

    return data.message === "Item entered successfully";
  };

  const getImgurLink = async (file) => {
    const headers = new Headers();
    headers.append(
      "Authorization",
      `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
    );

    const formData = new FormData();
    formData.append("image", file);
    const response = await fetch(process.env.REACT_APP_UPLOAD_IMAGE, {
      method: "POST",
      headers: headers,
      body: formData,
    });

    const data = await response.json();
    console.log(data);

    return { success: data.success, link: data.data?.link };
  };

  const value = { user, setUser, showOverlay, setShowOverlay, uploadBlog, getImgurLink };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};