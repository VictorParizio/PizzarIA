import axios from "axios";

export const http = axios.create({
  baseURL: "./src/mocks",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getAPI = async (path, errorMessage) => {
  try {
    const response = await http.get(path);
    return response.data;
  } catch (error) {
    alert(errorMessage);
    throw new Error(errorMessage);
  }
};

export const postAPI = async (path, objectData) => {
  try {
    const response = await http.post(path, objectData);
    return response.data;
  } catch (error) {
    if (error?.response?.data?.message) {
      console.log(error.response.data.message);
    } else {
      console.log("Erro do lado do servidor: " + error);
    }
  }
};

http.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem("token");

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (erro) {
    return Promise.reject(erro);
  }
);
