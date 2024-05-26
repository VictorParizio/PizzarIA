import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem("token");

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};
