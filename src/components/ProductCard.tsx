import { Link } from "react-router-dom"
import type { Product } from "../data/products"

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:-translate-y-2 transition duration-300 cursor-pointer">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover"
        />

        <div className="p-5 text-white">
          <h3 className="text-xl font-semibold mb-2">
            {product.name}
          </h3>
          <p className="text-yellow-400 font-bold">
            {product.price}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard