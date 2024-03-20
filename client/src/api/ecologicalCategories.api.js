import axios from "axios";

const URL =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:8000";

const categoriesApi = axios.create({
  baseURL: `${URL}/products/api/ecologicalCategories/`, // URL base para las categorías
});

const categoriesApi2 = axios.create({
  baseURL: `${URL}/products/api/productEcologicalCategories/`, // URL base para las categorías
});


export const getAllEcologicalCategories = () => categoriesApi.get("/");

export const getEcologicalCategory = (id) => categoriesApi.get(`/${id}`);

export const createEcologicalCategory = (ecologicalCategory) => categoriesApi.post("/", ecologicalCategory);

export const createProductEcologicalCategory = (productEcologicalCategory) => {
  // Eliminar el campo 'name' ya que no es necesario para ProductCategories
  const data = {
    idEcologicalCategory: productEcologicalCategory.idEcologicalCategory,
    idProduct: productEcologicalCategory.idProduct,
  };
  return categoriesApi2.post("/", data);
};

export const updateEcologicalCategory = (id, ecologicalCategory) => categoriesApi.put(`/${id}/`, ecologicalCategory);

export const deleteEcologicalCategory = (id) => categoriesApi.delete(`/${id}`);
