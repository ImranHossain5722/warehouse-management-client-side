import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();

  const [singleBlogDetail, setSingleBlogDetail] = useState({});

  useEffect(() => {
    fetch(`https://rocky-dawn-40302.herokuapp.com/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleBlogDetail(data));
  }, [id]);

  return (
    <div className="main">
      <div className="blog-bg"><h1 className="pt-5 text-center text-white ">{singleBlogDetail.title}</h1></div>
      <div className="container w-50 mx-auto">
        <div className="row blog-details">
          <div className="blog-img">
            <img
              className="blogImg img-fluid"
              src={singleBlogDetail.img}
              alt=""
            />
          </div>
          <h1>{singleBlogDetail.title}</h1>
          <p>{singleBlogDetail.blog}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
