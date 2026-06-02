import React from "react";
import { Link, useParams } from "react-router-dom";
import Trending from "./Trending";
import blogs from "./Mockdata";
import "./CategoryBlogs.css";

function CategoryBlogs() {
  const { category } = useParams();

  const currentCategory = category || "Travelling";

  return (
    <>
      <div className="home-container">
        <div className="welcome">
          <h1>Welcome to Our Blog Website</h1>
        </div>

        <div className="home">
          <img src="/Media/Banner.jpg" alt="Banner" />
        </div>
      </div>

      <h1 className="heading">Read Blogs From</h1>

      <div className="categories">

        <Link
          to="/blogs/Programming"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="/Media/programming.jpg"
              className="card-img-top"
              alt="Programming"
            />
            <div className="card-body">
              <h5 className="card-title">Programming</h5>
            </div>
          </div>
        </Link>

        <Link
          to="/blogs/Travelling"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="/Media/Travelling.jpg"
              className="card-img-top"
              alt="Travelling"
            />
            <div className="card-body">
              <h5 className="card-title">Travelling</h5>
            </div>
          </div>
        </Link>

        <Link
          to="/blogs/Technology"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="/Media/Health.jpg"
              className="card-img-top"
              alt="Technology"
            />
            <div className="card-body">
              <h5 className="card-title">Technology</h5>
            </div>
          </div>
        </Link>

      </div>

      <h1 className="heading">{currentCategory}</h1>

      <div className="trending-container">
        {blogs
          .filter((blog) => blog.category === currentCategory)
          .map((blog) => (
            <Trending
              key={blog.id}
              blog={blog}
            />
          ))}
      </div>
    </>
  );
}

export default CategoryBlogs; 