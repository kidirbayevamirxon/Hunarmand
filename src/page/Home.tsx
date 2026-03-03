import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ProductGrid from "../components/ProductGrid"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  )
}

export default Home