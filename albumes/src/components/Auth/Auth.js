import React from "react";
import AuthForm from "./AuthForm";
import { sendUserAuthRequest } from "../../api-helpers/api-helpers";

const Auth = () => {
  const getData = (data) => {
    console.log("Auth", data);
    sendUserAuthRequest(data, data.signup)
      .then((res) => {
        console.log(res);
        // Handle the response here
        // Example: If response is successful, redirect to a new page
        // If response contains an error, display an error message
      })
      .catch((err) => {
        console.log(err);
        // Handle the error here
        // Example: Display an error message to the user
      });
  };

  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
  );
};

export default Auth;
