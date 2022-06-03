import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../config/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <div>loading......</div>;
  }
  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace={true} />;
  }
  return children;
};

export default PrivateRoute;
