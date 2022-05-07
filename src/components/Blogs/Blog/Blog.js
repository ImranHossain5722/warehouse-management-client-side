import React from 'react';
import { useNavigate } from "react-router-dom";
import './Blog.css'
const Blog = ({SingleBlog}) => {
    
    const {title, blog,admin, img, _id}= SingleBlog
    const navigate = useNavigate();
    return (
        <div>
        <div className="card blog-wrap mx-3 mt-5 p-2">
          <img className="card-img-top p-2 " height="200" src={img} alt=""/>
          <div className="card-body p-">
          <p className='text-left'> Author: {admin}</p>
          <p className="fs-5 font-weight-bold"> {title}</p>
          <p className="blog-preview text-justify ">{blog.length<400? blog.length :blog.slice(0,400) }</p>
          <button className=' blog-btn ' onClick={()=> navigate(`/blog/${_id}`) }>Read More </button>
          </div>
      </div>
        </div>
    );
};

export default Blog;