import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getMascotas = async (signal) => {
  const response = await api.get("/users", {
    signal,
  });

  return response.data;
};

