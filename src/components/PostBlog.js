import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import useInput from "../hooks/use-input";
import { postActions } from "../store/slice/post-slice";
import { sendPostData } from "../store/actions/post-actions";
import "./styles/PostBlog.css";
import { Form, Button } from "./react-bootstrap-store";

const isNotEmpty = (value) => value.trim() !== "";

const PostBlog = (props) => {

  const {
    value: titleValue,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle,
  } = useInput(isNotEmpty);

  const {
    value: contentValue,
    isValid: contentIsValid,
    hasError: contentHasError,
    valueChangeHandler: contentChangeHandler,
    inputBlurHandler: contentBlurHandler,
    reset: resetContent,
  } = useInput(isNotEmpty);

  const dispatch = useDispatch();

  const userEmail = useSelector((state) => state.auth.loginEmail);
  let PostData = useSelector((state) => state.post);

  PostData = {...PostData, email: userEmail};

  console.log(PostData)

  useEffect(() => {
    dispatch(
      postActions.newPost({
        titleValue,
        contentValue,
        titleIsValid,
        contentIsValid
      })
    );
  }, [titleValue, contentValue, titleIsValid, contentIsValid, dispatch]);

  let formIsValid = false;

  if (titleIsValid && contentIsValid) {
    formIsValid = true;
  }

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    dispatch(sendPostData(PostData));
    console.log("Submitted!");

    resetTitle();
    resetContent();
  };

  return (
    <>
      <div className="main-blog-container">
        <div className="blog-form-container">
          <h2>Create Blog</h2>
          <Form className="form" onSubmit={SubmitHandler}>
            <Form.Group
              className='mb-3'
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>
                <h5>Blog Title</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                value={titleValue}
                onChange={titleChangeHandler}
                onBlur={titleBlurHandler}
              />
              <Form.Text className="text-muted">
                {titleHasError && (
                  <h6 className="error-text">Please enter a title.</h6>
                )}
              </Form.Text>
            </Form.Group>

            <Form.Group
              className='mb-3'
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                <h5>Content</h5>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Type Your Content Here..."
                value={contentValue}
                onChange={contentChangeHandler}
                onBlur={contentBlurHandler}
              />
              <Form.Text className="text-muted">
                {contentHasError && (
                  <h6 className="error-text">Please enter a content.</h6>
                )}
              </Form.Text>
            </Form.Group>

            <Button variant="success" type="submit" disabled={!formIsValid}>
              Post
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default PostBlog;
