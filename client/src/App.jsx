import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./screens/Home"
import Products from "./screens/Products";
import ProductsForm from "./screens/ProductsForm";

import Navigation from './components/Navigation'

import { smallScreenWidth } from "./constants/variables";
import ComponenteConTamañoDePantalla from './constants/ScreenSize'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeNavigation />} />
        <Route path="/products" element={<ProductsNavigation />} />
        <Route path="/products/:categoryType/:categoryId/:categoryName" element={<ProductsNavigation />} />
        <Route path="/products-create" element={<ProductsFormNavigation />} />

      </Routes>
    </BrowserRouter>
  )
}


function HomeNavigation() {
  return (
    <>
      <Navigation withLateralMenu={true} />
      <Home />
    </>
  );
}


function ProductsNavigation() {
  return (
    <>
      <Navigation withLateralMenu={false} />
      <Products />
    </>
  );
}

function ProductsFormNavigation() {
  return (
    <>
      <Navigation withLateralMenu={false} />
      <ProductsForm />
    </>
  );
}

export default App