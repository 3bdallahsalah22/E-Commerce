import { useState } from 'react'
import TopHeader from "./components/header/TopHeader"
import BottomHeader from "./components/header/BottomHeader"
import Home from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from "./pages/produuctDetails/ProductDetails"
import Cart from './pages/cart/Cart'
import { Toaster } from "react-hot-toast";
import ScrollToTop from './components/ScrollToTop'
import { AnimatePresence } from 'framer-motion'
import CategoryPage from './pages/CaregoryPage/CategoryPage'
import SearchResults from './pages/SearchResults'
import Favourits from "./pages/favourites/Favourits";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <TopHeader />
        <BottomHeader />
      </header>
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: '#e9e9e9',
          borderRadius: '5px',
          padding: '14px',
        }
      }} />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/products/:id" element={<ProductDetails />} />
           <Route path="/category/:category" element={<CategoryPage />} />
           <Route path="/favourits" element={<Favourits />} />
        </Routes>
      </AnimatePresence>

    </>
  )
}

export default App