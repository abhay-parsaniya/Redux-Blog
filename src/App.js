import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login, Register, NavbarApp, Blogs, YourBlogs, PostBlog } from "./components/filestore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { app } from "./firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Routing = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/yourblogs" element={<YourBlogs />} />
        <Route path="/postblog" element={<PostBlog />} />
      </Routes>
    </>
  );
};

function App() {

  return (
    <>
      <BrowserRouter>
        <NavbarApp />
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
