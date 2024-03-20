import { useEffect, useState } from "react";
import { getAllProducts } from "../api/products.api"; // Cambia el nombre del archivo de la API si es necesario
import { ProductsCard } from "./ProductsCard"; // Importa el componente ProductsCard en lugar de TaskCard

export function ProductsList() { // Cambia el nombre de la función a ProductsList
  const [products, setProducts] = useState([]); // Cambia el nombre de tasks a products

  useEffect(() => {
    async function loadProducts() { // Cambia el nombre de loadTasks a loadProducts
      const res = await getAllProducts(); // Cambia la función de la API a getAllProducts si es necesario
      setProducts(res.data); // Cambia tasks a products
      console.log(res);
    }
    loadProducts(); // Cambia el nombre de la función de carga a loadProducts
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {products.map((products) => ( // Cambia tasks.map a products.map
        <ProductsCard key={products.idProduct} products={products} /> // Cambia TaskCard a ProductsCard y task a product
        /*
        <div  key={products.idProduct}> 
            <h1>{products.idProduct}</h1>
            <h1>{products.name}</h1>
            <p>{products.description}</p>
            <p>${products.price}</p>
        </div>
        */
      ))}
    </div>
  );
}
