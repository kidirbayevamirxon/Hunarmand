import ProductCard from "./ProductCard"
import { products } from "../data/products"

const ProductGrid = () => {
  return (
    <section className="bg-black px-8 py-16">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        Featured Instruments
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductGrid