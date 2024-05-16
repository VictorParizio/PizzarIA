import axios from "axios";

export const http = axios.create({
  baseURL: "https://pizzaria-backend-api.vercel.app/pizzaria/",
  headers: {
    Accept: "application/json",
    Content: "application/json",
  },
});

export const getAPI = async (path) => {
  try {
    const response = await http.get(path);
    return response.data;
  } catch (error) {
    console.log("Erro do lado do servidor: " + error);
  }
};

export const postAPI = async (path, objectData, showMessage) => {
  try {
    const response = await http.post(path, objectData);
    return response.data;
  } catch (error) {
    if (error?.response?.data?.message) {
      showMessage(error.response.data.message);
    } else {
      console.log("Erro do lado do servidor: " + error);
    }
    throw error;
  }
};
