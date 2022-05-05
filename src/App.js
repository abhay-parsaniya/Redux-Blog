import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Login,
  Register,
  NavbarApp,
  Blogs,
  YourBlogs,
  PostBlog,
} from "./components/filestore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { app } from "./firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {

  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  let loggedInUser;
  useEffect(() => {
    loggedInUser = JSON.parse(localStorage.getItem("user"));
    if(loggedInUser)
    {
      setUserIsLoggedIn(true);
    }
  });

  return (
    <>
      <BrowserRouter>
        <NavbarApp />
        <Routes>
        {userIsLoggedIn && (
          <>
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/yourblogs" element={<YourBlogs />} />
            <Route path="/postblog" element={<PostBlog />} />
          </>
        )}
        {!userIsLoggedIn && (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
