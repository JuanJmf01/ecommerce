import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./screens/Home"

import Navigation from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App

