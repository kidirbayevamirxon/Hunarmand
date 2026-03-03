import { useCart } from "../context/CardContext"

const CartPage = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart()

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price.replace("$", "")) * item.quantity,
    0
  )

  return (
    <div className="bg-black min-h-screen text-white px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      <div className="space-y-6">
        {cart.map(item => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-gray-900 p-4 rounded-xl"
          >
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p>{item.price}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="bg-gray-700 px-3 rounded"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="bg-gray-700 px-3 rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-400"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-10 text-xl font-bold">
          Total: ${total}
        </div>
      )}
    </div>
  )
}

export default CartPage