import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  if (localStorage.getItem("userInfo")) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
  return <></>;
}
