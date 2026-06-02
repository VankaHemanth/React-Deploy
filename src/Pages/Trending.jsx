import React from "react";
import { Link } from "react-router-dom";
import "./Trending.css";

function Trending({ blog }) {
  return (
    <div className="card trending-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5>{blog.title}</h5>

        <p>{blog.category}</p>

        <p>{blog.previewDescription}</p>

        <Link
          to={`/blog/${blog.id}`}
          className="btn btn-primary"
        >
          Read More
        </Link>
      </div>
    </div>
    
  );
}

export default Trending;