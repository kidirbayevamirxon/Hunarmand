const Hero = () => {
  return (
    <section className="relative bg-linear-to-r from-black via-gray-900 to-black text-white py-24 px-8 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
        Premium Music Instruments
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
        Discover guitars, pianos, drums and professional studio equipment for musicians of every level.
      </p>

      <button className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
        Shop Now
      </button>
    </section>
  )
}

export default Hero