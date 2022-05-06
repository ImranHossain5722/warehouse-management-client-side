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
    <div className="container"> 
      <h2 className="mt-5 text-center">Our Blogs</h2>
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
  );
};

export default Blogs;
