import { useParams, useNavigate } from "react-router-dom"
import { products } from "../data/products"
import { useState } from "react"
import { Heart } from "lucide-react"
import { useCart } from "../context/CardContext"
const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
const { addToCart } = useCart()
  const product = products.find(p => p.id === Number(id))

  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(25)
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState<string[]>([])

  if (!product)
    return (
      <div className="text-white p-10">
        Product not found
      </div>
    )

  const handleLike = () => {
    setLiked(prev => !prev)
    setLikes(prev => liked ? prev - 1 : prev + 1)
  }

  const addComment = () => {
    if (!comment.trim()) return
    setComments(prev => [...prev, comment])
    setComment("")
  }

  return (
    <div className="bg-black min-h-screen text-white px-8 py-16">

      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-yellow-400 hover:underline flex items-center gap-2"
      >
        ← Back
      </button>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        <img
          src={product.image}
          alt={product.name}
          className="rounded-2xl shadow-xl"
        />

        <div>
          <h1 className="text-4xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-yellow-400 text-2xl font-semibold mb-6">
            {product.price}
          </p>
<button
  onClick={() => addToCart(product)}
  className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition mb-6"
>
  🛒 Buy Now
</button>
          <p className="text-gray-400 mb-8">
            {product.description}
          </p>

          {/* LIKE */}
          <button
            onClick={handleLike}
            className="flex items-center gap-2 mb-6"
          >
            <Heart
              className={`transition ${
                liked
                  ? "fill-red-500 text-red-500"
                  : "text-gray-400"
              }`}
            />
            <span>{likes} Likes</span>
          </button>

          {/* COMMENTS */}
          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
                className="flex-1 bg-gray-800 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                onClick={addComment}
                className="bg-yellow-400 text-black px-4 rounded-lg font-semibold hover:bg-yellow-300 transition"
              >
                Post
              </button>
            </div>

            <div className="space-y-2 max-h-40 overflow-y-auto">
              {comments.map((c, i) => (
                <div key={i} className="bg-gray-800 p-3 rounded-lg">
                  {c}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail