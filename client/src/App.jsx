import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./screens/Home"
import Products from "./screens/Products";

import Navigation from './components/Navigation'

import { smallScreenWidth } from "./constants/variables";
import ComponenteConTamañoDePantalla from './constants/ScreenSize'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeNavigation />} />
        <Route path="/products/:categoryType/:categoryId" element={<ProductsNavigation />} />
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

  const screenSize = ComponenteConTamañoDePantalla();


  return (
    <>
      <Navigation withLateralMenu={false} />
      <Products />
    </>
  );
}


export default App