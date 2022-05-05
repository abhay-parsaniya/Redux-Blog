import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchPostData } from "../store/actions/post-actions";
import { Accordion } from "./react-bootstrap-store";
import "./styles/Blog.css";

const YourBlogs = () => {

  const dispatch = useDispatch();

  const blogData = useSelector((state) => state.blog.blogs);

  let userEmail = JSON.parse(localStorage.getItem('user'));

  let allBlogs = [];
  let userBlogs = [];

  for (let key in blogData) {
    allBlogs.push(blogData[key]);
  }

  userBlogs = allBlogs.filter((blog) => {
    return (
      blog.email === userEmail.email
    )
  })

  useEffect(() => {
    dispatch(fetchPostData());
  }, [dispatch]);

  return (
    <>
        <div className="main-div">
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          {userBlogs.map((blog, index) => (
            <Accordion.Item eventKey={index} className="accordion-item" key={index} >
              <Accordion.Header><h4>{blog.title}</h4></Accordion.Header>
              <Accordion.Body><h5>{blog.content}</h5></Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </>
  )
}

export default YourBlogs