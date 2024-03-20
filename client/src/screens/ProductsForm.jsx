import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createProduct, deleteProduct, updateProduct } from "../api/products.api";
import { getAllStores } from "../api/stores.api";
import { getAllCategories, createProductCategory } from "../api/categories.api";
import { getAllEcologicalCategories, createProductEcologicalCategory } from "../api/ecologicalCategories.api";
import { getAllGenderCategories, createProductGenderCategory } from "../api/genderCategories.api";
import { toast } from "react-hot-toast";
import "./css/productsform.scss";

export default function ProductsForm() {
  const [stores, setStores] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ecologicalCategories, setEcologicalCategories] = useState([]);
  const [genderCategories, setGenderCategories] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadData() {
      try {
        const storeResponse = await getAllStores();
        setStores(storeResponse.data);

        const categoryResponse = await getAllCategories();
        setCategories(categoryResponse.data);

        const ecologicalCategoryResponse = await getAllEcologicalCategories();
        setEcologicalCategories(ecologicalCategoryResponse.data);

        const genderCategoryResponse = await getAllGenderCategories();
        setGenderCategories(genderCategoryResponse.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    loadData();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const formData = new FormData();
      formData.append("idStore", data.idStore);
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("description", data.description);
      formData.append("image", data.image[0]);
      formData.append("discount", data.discount);
      formData.append("categoryId", data.categoryId);
      formData.append("ecologicalCategoryId", data.ecologicalCategoryId);
      formData.append("genderCategoryId", data.genderCategoryId);

      if (params.id) {
        await updateProduct(params.id, formData);
        toast.success("Product updated", { position: "bottom-right", style: { background: "#101010", color: "#fff" } });
      } else {
        const response = await createProduct(formData);
        const productId = response.data.idProduct;

        await createProductCategory({ idProduct: productId, idCategory: data.categoryId });
        await createProductEcologicalCategory({ idProduct: productId, idEcologicalCategory: data.ecologicalCategoryId });
        await createProductGenderCategory({ idProduct: productId, idGenderCategory: data.genderCategoryId });

        toast.success("New Product Added", { position: "bottom-right", style: { background: "#101010", color: "#fff" } });
      }
      navigate("/products");
    } catch (error) {
      console.error("Error:", error);
    }
  });

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="form-container" encType="multipart/form-data">
        <h2>Vender</h2>
        <select {...register("idStore", { required: true })} className={`input-field ${errors.idStore ? 'error' : ''} mb-3`}>
          <option value="">Select a store</option>
          {stores.map((store) => (
            <option key={store.idStore} value={store.idStore}>
              {store.name}
            </option>
          ))}
        </select>
        {errors.idStore && <span className="text-red-500">This field is required</span>}

        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
          className={`input-field ${errors.name ? 'error' : ''} mb-3`}
          autoFocus
        />
        {errors.name && <span className="text-red-500">This field is required</span>}

        <input
          type="number"
          placeholder="Price"
          {...register("price", { required: true })}
          className={`input-field ${errors.price ? 'error' : ''} mb-3`}
        />
        {errors.price && <span className="text-red-500">This field is required</span>}

        <textarea
          placeholder="Description"
          {...register("description", { required: true })}
          className={`input-field ${errors.description ? 'error' : ''} mb-3`}
        />
        {errors.description && <span className="text-red-500">This field is required</span>}

        <input
          type="file"
          {...register("image", { required: true })}
          className={`input-field ${errors.image ? 'error' : ''} mb-3`}
        />
        {errors.image && <span className="text-red-500">This field is required</span>}

        <select {...register("categoryId", { required: true })} className={`input-field ${errors.categoryId ? 'error' : ''} mb-3`}>
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.idCategory} value={category.idCategory}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.categoryId && <span className="text-red-500">This field is required</span>}

        <select {...register("genderCategoryId", { required: true })} className={`input-field ${errors.genderCategoryId ? 'error' : ''} mb-3`}>
          <option value="">Select a gender category</option>
          {genderCategories.map((category) => (
            <option key={category.idGenderCategory} value={category.idGenderCategory}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.genderCategoryId && <span className="text-red-500">This field is required</span>}

        <select {...register("ecologicalCategoryId", { required: true })} className={`input-field ${errors.ecologicalCategoryId ? 'error' : ''} mb-3`}>
          <option value="">Select an ecological category</option>
          {ecologicalCategories.map((category) => (
            <option key={category.idEcologicalCategory} value={category.idEcologicalCategory}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.ecologicalCategoryId && <span className="text-red-500">This field is required</span>}

        <input
          type="number"
          placeholder="Discount"
          {...register("discount")}
          className="input-field mb-3"
        />

        <button className="btn-primary mt-3">Save</button>
      </form>

      {params.id && (
        <div className="flex justify-end">
          <button
            className="btn-danger mt-3"
            onClick={async () => {
              const accepted = window.confirm("Are you sure?");
              if (accepted) {
                try {
                  await deleteProduct(params.id);
                  toast.success("Product Removed", { position: "bottom-right", style: { background: "#101010", color: "#fff" } });
                  navigate("/products");
                } catch (error) {
                  console.error("Error:", error);
                }
              }
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
