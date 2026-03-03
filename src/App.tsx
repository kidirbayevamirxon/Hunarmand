import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./page/Home"
import ProductDetail from "./components/ProductDetail"
import CartPage from "./page/CardPage"
import { CartProvider } from "./context/CardContext"
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App