import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { authActions } from "../slice/auth-slice";

export const sendLoginData = (logindata, navigate) => {
  return async (dispatch) => {

    try {
      const auth = getAuth();
      const response = await signInWithEmailAndPassword(
        auth,
        logindata.email,
        logindata.password
      );
      // console.log(response);

      dispatch(authActions.login(logindata.email));
      localStorage.setItem("user", JSON.stringify(logindata));
      alert("Login Successfully !!");
      navigate('/blogs');

    } catch (error) {
      console.log(error);
      if (error.code === "auth/wrong-password") {
        console.log("Please check the password");
      }
      if (error.code === "auth/user-not-found") {
        console.log("Please check the Email");
      }
      alert("Login failed!");
    }
  };
};
