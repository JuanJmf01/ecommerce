import axios from "axios";

const URL =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:8000";

console.log(URL);
const productsApi = axios.create({
  baseURL: `${URL}/products/api/products/`, // Cambia 'tasks' a 'products' en la URL
});

export const getAllProducts = () => productsApi.get("/"); // Cambia 'tasks' a 'products'

export const getProduct = (id) => productsApi.get(`/${id}`); // Cambia 'tasks' a 'products'

export const createProduct = (product) => productsApi.post("/", product); // Cambia 'tasks' a 'products'

export const updateProduct = (id, product) => productsApi.put(`/${id}/`, product); // Cambia 'tasks' a 'products'

export const deleteProduct = (id) => productsApi.delete(`/${id}`); // Cambia 'tasks' a 'products'
