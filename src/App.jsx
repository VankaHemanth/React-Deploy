import React from "react";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Home from "./Pages/CategoryBlogs";
import CategoryBlogs from "./Pages/CategoryBlogs";
import DedicatedBlog from "./Pages/DedicatedBlog";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/registration"
          element={<Registration />}
        />

        <Route
          path="/blogs/:category"
          element={<CategoryBlogs />}
        />

        <Route
          path="/blog/:id"
          element={<DedicatedBlog />}
        />
      </Routes>
    </div>
  );
}

export default App;