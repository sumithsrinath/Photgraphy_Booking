import React from "react";
import AuthForm from "../Auth/AuthForm";
import { useDispatch } from "../../api-helpers/api-helpers";

const Admin = () => {
  const dispatch = useDispatch();
  const getData = (data) => {
    console.log("Admin", data);
  };

  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true} />
    </div>
  );
};

export default Admin;
