import { useNavigate } from "react-router-dom";

export function ProductsCard({ products }) { // Cambia TaskCard a ProductCard y task a product
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate(`/products/${products.idProduct}`); // Cambia '/tasks/' a '/products/' y task.id a product.id
      }}
    >
      <h1 className="text-white font-bold uppercase rounded-lg">
        {products.name} {/* Cambia task.title a product.name */}
      </h1>
      <p className="text-slate-400">{products.description}</p> {/* Cambia task.description a product.description */}

    </div>
  );
}
