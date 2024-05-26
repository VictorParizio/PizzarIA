import { jwtDecode } from "jwt-decode";

export const isTokenValid = (token) => {
  try {
    const decoded = jwtDecode(token);
    const isValid = decoded.exp * 1000 > new Date().getTime();
    return isValid;
  } catch (error) {
    sessionStorage.removeItem("token");
  }
};
