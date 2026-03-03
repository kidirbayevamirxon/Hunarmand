import { ShoppingCart, Music } from "lucide-react"
const Navbar = () => {
  return (
    <nav className="bg-black/80 backdrop-blur-md text-white px-8 py-4 flex justify-between items-center sticky top-0 z-50 border-b border-gray-800">
      <div className="flex items-center gap-2 text-2xl font-bold tracking-wide">
        <Music className="text-yellow-400" />
        SoundStore
      </div>

      <div className="hidden md:flex gap-8 text-gray-300 font-medium">
        <a href="#" className="hover:text-yellow-400 transition">Home</a>
        <a href="#" className="hover:text-yellow-400 transition">Products</a>
        <a href="#" className="hover:text-yellow-400 transition">About</a>
        <a href="#" className="hover:text-yellow-400 transition">Contact</a>
      </div>

      <ShoppingCart className="cursor-pointer hover:text-yellow-400 transition" />
    </nav>
  )
}

export default Navbar