import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const sendRegisterData = (registerdata) => {
    return async () => {
  
      const sendRequest = async () => {
        const response = await fetch(
          'https://udemy-react-http-f5849-default-rtdb.firebaseio.com/users.json',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerdata),
          }
        );
  
        if (!response.ok) {
          throw new Error('Sending register data failed.');
        }
      };
  
      try {
        const auth = getAuth();
        const response = await createUserWithEmailAndPassword(auth, registerdata.email, registerdata.password)
        console.log(response);

        await sendRequest();
  
        alert('Registered Successfully !!');
      } catch (error) {
        console.log(error);
        if (error.code === "auth/weak-password") {
          console.log("Please enter strong Password");
        }
        if (error.code === "auth/email-already-in-use") {
          console.log("Email already exist");
        }
        alert("Registration failed!");
      }
    };
  };