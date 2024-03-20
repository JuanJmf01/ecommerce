import axios from "axios";

const URL =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:8000";

const categoriesApi = axios.create({
  baseURL: `${URL}/products/api/genderCategories/`, // URL base para las categorías
});

const categoriesApi2 = axios.create({
  baseURL: `${URL}/products/api/productGenderCategories/`, // URL base para las categorías
});


export const getAllGenderCategories = () => categoriesApi.get("/");

export const getGenderCategory = (id) => categoriesApi.get(`/${id}`);

export const createGenderCategory = (genderCategory) => categoriesApi.post("/", genderCategory);

export const createProductGenderCategory = (productGenderCategory) => {
  // Eliminar el campo 'name' ya que no es necesario para ProductCategories
  const data = {
    idGenderCategory: productGenderCategory.idGenderCategory,
    idProduct: productGenderCategory.idProduct,
  };
  return categoriesApi2.post("/", data);
};

export const updateGenderCategory = (id, genderCategory) => categoriesApi.put(`/${id}/`, genderCategory);

export const deleteGenderCategory = (id) => categoriesApi.delete(`/${id}`);
