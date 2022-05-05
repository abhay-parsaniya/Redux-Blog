import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Button } from "./react-bootstrap-store";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { authActions } from "../store/slice/auth-slice";
import './styles/NavbarApp.css';

const NavbarApp = () => {

  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let loggedInUser;
  useEffect(() => {
    loggedInUser = JSON.parse(localStorage.getItem("user"));
    if(loggedInUser)
    {
      setUserIsLoggedIn(true);
    }
  });
  console.log(userIsLoggedIn);

  // const userIsLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userName = useSelector((state) => state.auth.loginEmail);

  const LogoutHandler = () => {
    dispatch(authActions.logout());
    localStorage.removeItem('user');
    setUserIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/blogs">Blog Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {userIsLoggedIn ? (
              <>
                <Nav className="me-auto d-flex justify-content-evenly w-50">
                  <NavLink to="/blogs" className='nav-item'>Blogs</NavLink>
                  <NavLink to="/yourblogs" className='nav-item'>Your Blogs</NavLink>
                  <NavLink to="/postblog" className='nav-item'>Post Blog</NavLink>
                </Nav>
                <Nav className="d-flex justify-content-evenly w-25 nav-item">
                  <h6 className="username">{userName}</h6>
                  <Button variant="danger" onClick={LogoutHandler}>
                    Logout
                  </Button>
                </Nav>
              </>
            ) : (
              <Nav className="ms-auto d-flex justify-content-evenly w-25">
                <NavLink to="/login" className='nav-item'>Login</NavLink>
                <NavLink to="/register" className='nav-item'>Register</NavLink>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarApp;
