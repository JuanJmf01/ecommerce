import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createProduct, deleteProduct, getProduct, updateProduct } from "../api/products.api";
import { getAllStores } from "../api/stores.api";
import { getAllCategories, createProductCategory } from "../api/categories.api";
import { getAllEcologicalCategories, createProductEcologicalCategory } from "../api/ecologicalCategories.api";
import { getAllGenderCategories, createProductGenderCategory } from "../api/genderCategories.api";
import { toast } from "react-hot-toast";

export default function ProductsForm() {
  const [stores, setStores] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ecologicalCategories, setEcologicalCategories] = useState([]);
  const [genderCategories, setGenderCategories] = useState([]); // Nuevo estado para almacenar las categorías de género
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
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

        const genderCategoryResponse = await getAllGenderCategories(); // Obtener las categorías de género
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
      formData.append("genderCategoryId", data.genderCategoryId); // Agregar genderCategoryId al formulario

      if (params.id) {
        await updateProduct(params.id, formData);
        toast.success("Product updated", {
          position: "bottom-right",
          style: {
            background: "#101010",
            color: "#fff",
          },
        });
      } else {
        const response = await createProduct(formData);
        const productId = response.data.idProduct;

        await createProductCategory({ idProduct: productId, idCategory: data.categoryId });
        await createProductEcologicalCategory({ idProduct: productId, idEcologicalCategory: data.ecologicalCategoryId });
        await createProductGenderCategory({ idProduct: productId, idGenderCategory: data.genderCategoryId }); // Crear la asociación del producto con la categoría de género

        toast.success("New Product Added", {
          position: "bottom-right",
          style: {
            background: "#101010",
            color: "#fff",
          },
        });
      }
      navigate("/products");
    } catch (error) {
      console.error("Error:", error);
    }
  });

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2" encType="multipart/form-data">
        <select {...register("idStore", { required: true })} className="bg-zinc-700 p-3 rounded-lg block w-full mb-3">
          <option value="">Select a store</option>
          {stores.map((store) => (
            <option key={store.idStore} value={store.idStore}>
              {store.name}
            </option>
          ))}
        </select>
        {errors.idStore && <span>This field is required</span>}

        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />
        {errors.name && <span>This field is required</span>}

        <input
          type="number"
          placeholder="Price"
          {...register("price", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.price && <span>This field is required</span>}

        <textarea
          placeholder="Description"
          {...register("description", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full"
        />
        {errors.description && <span>This field is required</span>}

        <input
          type="file"
          {...register("image", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.image && <span>This field is required</span>}

        <select {...register("categoryId", { required: true })} className="bg-zinc-700 p-3 rounded-lg block w-full mb-3">
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.idCategory} value={category.idCategory}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.categoryId && <span>This field is required</span>}

        <select {...register("genderCategoryId", { required: true })} className="bg-zinc-700 p-3 rounded-lg block w-full mb-3">
          <option value="">Select a gender category</option>
          {genderCategories.map((category) => (
            <option key={category.idGenderCategory} value={category.idGenderCategory}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.genderCategoryId && <span>This field is required</span>}

        
        <select {...register("ecologicalCategoryId", { required: true })} className="bg-zinc-700 p-3 rounded-lg block w-full mb-3">
          <option value="">Select an ecological category</option>
          {ecologicalCategories.map((category) => (
            <option key={category.idEcologicalCategory} value={category.idEcologicalCategory}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.ecologicalCategoryId && <span>This field is required</span>}

        <input
          type="number"
          placeholder="Discount"
          {...register("discount")}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />

        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">Save</button>
      </form>

      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm("Are you sure?");
              if (accepted) {
                try {
                  await deleteProduct(params.id);
                  toast.success("Product Removed", {
                    position: "bottom-right",
                    style: {
                      background: "#101010",
                      color: "#fff",
                    },
                  });
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
