import { Navigate } from "react-router-dom";
import { isTokenValid } from "../utils/isTokinValid";

export const PrivateRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");
  const isAuthenticated = isTokenValid(token);
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};
