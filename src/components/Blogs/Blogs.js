import React, { useContext, useEffect, useState } from "react";

import Blog from "./Blog/Blog";
import './Blogs.css'

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    fetch("https://rocky-dawn-40302.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (

    <div className="main-container">
      <div className="container"> 
      <h1 className="pt-5 text-center text-white">Our Blogs</h1>
      <div
        style={{ height: "3px", width: "50px" }}
        className="bg-primary  mx-auto "
      ></div>
      <div className="row ">

        <div className="blogs-container">
          {blogs.map((SingleBlog) => (
            <Blog
              key={SingleBlog._id}
              SingleBlog={SingleBlog}
            >
            </Blog>
          ))}
        </div>
      </div>
    </div>
    </div>

  );
};

export default Blogs;
