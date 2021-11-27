import axios from "axios";

export const baseURL = "http://127.0.0.1:8000/api";

const api = axios.create({
  baseURL,
});

export const loginUser = async (data) => {
  return api.post("/login", data);
};

export const getRecipes = async () => await api.get(`/recipes`);
export const getRecipe = async (id) => await api.get(`/recipes/${id}`);
