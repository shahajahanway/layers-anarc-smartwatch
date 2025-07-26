import { useState } from "react"
import { Link } from "react-router-dom"
import { ScrollTriggerAnimations } from "../components/ScrollTriggerAnimations"
import { ParticleBackground } from "../components/ParticleBackground"
import { Grid, List, Star, Heart, ShoppingCart } from "lucide-react"

const allProducts = [
  {
    id: "anarc-pro",
    name: "Anarc Pro",
    price: "₹24,999",
    originalPrice: "₹29,999",
    image: "/images/anarc_1.webp",
    rating: 4.9,
    reviews: 1247,
    category: "premium",
    features: ["ECG Monitoring", "7-Day Battery", "5ATM Water Resistant", "GPS Tracking"],
    color: "from-purple-600 to-blue-600",
  },
  {
    id: "anarc-sport",
    name: "Anarc Sport",
    price: "₹18,999",
    originalPrice: "₹22,999",
    image: "/images/anarc_2.webp",
    rating: 4.8,
    reviews: 892,
    category: "fitness",
    features: ["Fitness Tracking", "Sleep Analysis", "Heart Rate Monitor", "Workout Modes"],
    color: "from-green-600 to-teal-600",
  },
  {
    id: "anarc-classic",
    name: "Anarc Classic",
    price: "₹21,999",
    originalPrice: "₹25,999",
    image: "/images/Anarc_Classic.webp",
    rating: 4.7,
    reviews: 654,
    category: "classic",
    features: ["Premium Design", "Always-On Display", "Voice Assistant", "Music Control"],
    color: "from-orange-600 to-red-600",
  },
  {
    id: "anarc-lite",
    name: "Anarc Lite",
    price: "₹12,999",
    originalPrice: "₹15,999",
    image: "/images/AnarcLite.webp",
    rating: 4.5,
    reviews: 423,
    category: "budget",
    features: ["Basic Health Tracking", "5-Day Battery", "Water Resistant", "Notifications"],
    color: "from-blue-600 to-cyan-600",
  },
  {
    id: "anarc-elite",
    name: "Anarc Elite",
    price: "₹34,999",
    originalPrice: "₹39,999",
    image: "/images/AnarcElite.webp",
    rating: 4.9,
    reviews: 789,
    category: "premium",
    features: ["Titanium Build", "10-Day Battery", "Sapphire Glass", "Advanced Health Suite"],
    color: "from-indigo-600 to-purple-600",
  },
  {
    id: "anarc-crown",
    name: "Anarc Crown",
    price: "₹28,999",
    originalPrice: "₹32,999",
    image: "/images/AnarcCrown.webp",
    rating: 4.8,
    reviews: 567,
    category: "premium",
    features: ["Crown Navigation", "Premium Materials", "Wireless Charging", "Smart Assistant"],
    color: "from-yellow-600 to-orange-600",
  },
  {
    id: "anarc-dark",
    name: "Anarc Dark",
    price: "₹19,999",
    originalPrice: "₹23,999",
    image: "/images/AnarcDark.webp",
    rating: 4.6,
    reviews: 445,
    category: "classic",
    features: ["Dark Theme UI", "AMOLED Display", "Fast Charging", "Health Monitoring"],
    color: "from-gray-600 to-black",
  },
  {
    id: "anarc-silver",
    name: "Anarc Silver",
    price: "₹26,999",
    originalPrice: "₹30,999",
    image: "/images/Anarc_Classic.webp",
    rating: 4.7,
    reviews: 623,
    category: "premium",
    features: ["Silver Finish", "Sapphire Crystal", "Wireless Charging", "Premium Straps"],
    color: "from-gray-400 to-gray-600",
  },
]

const categories = [
  { id: "all", name: "All Products", count: allProducts.length },
  { id: "premium", name: "Premium", count: allProducts.filter((p) => p.category === "premium").length },
  { id: "fitness", name: "Fitness", count: allProducts.filter((p) => p.category === "fitness").length },
  { id: "classic", name: "Classic", count: allProducts.filter((p) => p.category === "classic").length },
  { id: "budget", name: "Budget", count: allProducts.filter((p) => p.category === "budget").length },
]

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("name")
  const [imageLoaded, setImageLoaded] = useState({})
  const [imageError, setImageError] = useState({})

  const filteredProducts = allProducts.filter((product) =>
    selectedCategory === "all" ? true : product.category === selectedCategory,
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return Number.parseInt(a.price.replace(/[₹,]/g, "")) - Number.parseInt(b.price.replace(/[₹,]/g, ""))
      case "price-high":
        return Number.parseInt(b.price.replace(/[₹,]/g, "")) - Number.parseInt(a.price.replace(/[₹,]/g, ""))
      case "rating":
        return b.rating - a.rating
      case "name":
      default:
        return a.name.localeCompare(b.name)
    }
  })

  const handleImageLoad = (productId) => {
    setImageLoaded((prev) => ({ ...prev, [productId]: true }))
    setImageError((prev) => ({ ...prev, [productId]: false }))
  }

  const handleImageError = (productId) => {
    console.log(`Failed to load image for ${productId}`)
    setImageLoaded((prev) => ({ ...prev, [productId]: false }))
    setImageError((prev) => ({ ...prev, [productId]: true }))
  }

  return (
    <div className="min-h-screen pt-16 relative">
      <ParticleBackground />
      <section className="py-20 relative overflow-hidden">
        <div className="slime-blob absolute top-0 left-0 w-96 h-96 opacity-20"></div>
        <div className="slime-blob absolute bottom-0 right-0 w-64 h-64 opacity-15"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollTriggerAnimations animation="fadeUp">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="gradient-text">Products</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the perfect smartwatch for your lifestyle. From premium to budget-friendly options.
            </p>
          </ScrollTriggerAnimations>
        </div>
      </section>
      <section className="py-8 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      : "glass-effect hover:bg-white/10"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <div className="flex border border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? "bg-purple-600" : "hover:bg-gray-700"}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? "bg-purple-600" : "hover:bg-gray-700"}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6 max-w-4xl mx-auto"
            }
          >
            {sortedProducts.map((product, index) => (
              <ScrollTriggerAnimations key={product.id} animation="fadeUp" delay={index * 100}>
                <div
                  className={`magnetic group glass-effect rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 ${
                    viewMode === "list" ? "flex items-center gap-6 p-6" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden bg-gray-800 ${viewMode === "list" ? "w-48 h-48 flex-shrink-0" : "h-80"}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20`}></div>
                    {!imageLoaded[product.id] && !imageError[product.id] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    <picture>
                      <source srcSet={product.image} type="image/webp" />
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                          imageLoaded[product.id] ? "opacity-100" : "opacity-0"
                        }`}
                        onLoad={() => handleImageLoad(product.id)}
                        onError={() => handleImageError(product.id)}
                        loading="lazy"
                      />
                    </picture>
                    {imageError[product.id] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold">A</span>
                          </div>
                          <p className="text-gray-400 text-sm">{product.name}</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                    {product.originalPrice && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Save ₹
                        {Number.parseInt(product.originalPrice.replace(/[₹,]/g, "")) -
                          Number.parseInt(product.price.replace(/[₹,]/g, ""))}
                      </div>
                    )}
                  </div>
                  <div className={viewMode === "list" ? "flex-1" : "p-6"}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-400"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">({product.reviews})</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-bold gradient-text">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <div className="space-y-2 mb-6">
                      {product.features.slice(0, viewMode === "list" ? 6 : 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 liquid-button py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </button>
                      <Link
                        to={`/products/${product.id}`}
                        className="px-4 py-3 glass-effect rounded-xl hover:bg-white/10 transition-colors text-center flex items-center justify-center"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollTriggerAnimations>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
