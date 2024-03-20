import axios from "axios";

const URL =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:8000";

const categoriesApi = axios.create({
  baseURL: `${URL}/products/api/categories/`, // URL base para las categorías
});

const categoriesApi2 = axios.create({
  baseURL: `${URL}/products/api/productCategories/`, // URL base para las categorías
});


export const getAllCategories = () => categoriesApi.get("/");

export const getCategory = (id) => categoriesApi.get(`/${id}`);

export const createCategory = (category) => categoriesApi.post("/", category);

export const createProductCategory = (productCategory) => {
  // Eliminar el campo 'name' ya que no es necesario para ProductCategories
  const data = {
    idCategory: productCategory.idCategory,
    idProduct: productCategory.idProduct,
  };
  return categoriesApi2.post("/", data);
};

export const updateCategory = (id, category) => categoriesApi.put(`/${id}/`, category);

export const deleteCategory = (id) => categoriesApi.delete(`/${id}`);
