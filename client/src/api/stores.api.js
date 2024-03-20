import axios from "axios";

const URL =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:8000";

const storesApi = axios.create({
  baseURL: `${URL}/users/api/stores/`,
});

export const getAllStores = () => storesApi.get("/");

export const getStore = (id) => storesApi.get(`/${id}`);

export const createStore = (store) => storesApi.post("/", store);

export const updateStore = (id, store) => storesApi.put(`/${id}/`, store);

export const deleteStore = (id) => storesApi.delete(`/${id}`);

export default storesApi;
