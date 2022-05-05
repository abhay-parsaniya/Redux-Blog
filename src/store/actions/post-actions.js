import { blogActions } from "../slice/blog-slice";

export const fetchPostData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://udemy-react-http-f5849-default-rtdb.firebaseio.com/blog.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch post data!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const PostData = await fetchData();

      dispatch(
        blogActions.replaceBlogs({
          blogs: PostData || [],
        })
      );
    } catch (error) {
      alert('Fetching post data failed!')
    }
  };
};

export const sendPostData = (post) => {
  return async () => {

    const sendRequest = async () => {
      const response = await fetch(
        'https://udemy-react-http-f5849-default-rtdb.firebaseio.com/blog.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(post),
        }
      );

      if (!response.ok) {
        throw new Error('Sending post data failed.');
      }
    };

    try {
      await sendRequest();

      alert('Posted Successfully !!');
    } catch (error) {
      alert("Fetching post data failed!");
    }
  };
};
