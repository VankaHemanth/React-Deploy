import React from "react";
import { useParams } from "react-router-dom";
import blogs from "./Mockdata";

function DedicatedBlog() {
  const { id } = useParams();

  const blogToDisplay = blogs.find(
    (blog) => blog.id === Number(id)
  );

  if (!blogToDisplay) {
    return <h2>Blog Not Found</h2>;
  }

  return (
    <div>
      <h1>{blogToDisplay.title}</h1>
      <h4>{blogToDisplay.category}</h4>
      <p>{blogToDisplay.content}</p>
    </div>
  );
}

export default DedicatedBlog;