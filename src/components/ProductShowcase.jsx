import { useState } from "react"
import { ScrollReveal } from "./ScrollReveal"
import { ArrowRight, Star, Heart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Anarc Pro",
    price: "₹24,999",
    originalPrice: "₹29,999",
    image: "/webp/AnarcSmartWatchFrontSilverSwirl.webp",
    rating: 4.9,
    reviews: 1247,
    features: ["ECG Monitoring", "7-Day Battery", "5ATM Water Resistant", "GPS Tracking"],
    color: "from-purple-600 to-blue-600",
  },
  {
    id: 2,
    name: "Anarc Sport",
    price: "₹18,999",
    originalPrice: "₹22,999",
    image: "/webp/Anarc-dark-3.webp",
    rating: 4.8,
    reviews: 892,
    features: ["Fitness Tracking", "Sleep Analysis", "Heart Rate Monitor", "Workout Modes"],
    color: "from-green-600 to-teal-600",
  },
  {
    id: 3,
    name: "Anarc Classic",
    price: "₹21,999",
    originalPrice: "₹25,999",
    image: "/webp/black_front.webp",
    rating: 4.7,
    reviews: 654,
    features: ["Premium Design", "Always-On Display", "Voice Assistant", "Music Control"],
    color: "from-orange-600 to-red-600",
  },
]

export function ProductShowcase({ products: propProducts }) {
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const displayProducts = propProducts || products

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Collection</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the perfect smartwatch for your lifestyle and needs
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayProducts.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 200}>
              <div
                className="magnetic group relative bg-gray-900/50 glass-effect rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative h-80 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20`}
                  ></div>
                  <img
                    src={product.image}
                    alt={`${product.name} smartwatch`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Save ₹
                      {Number.parseInt(product.originalPrice.replace("₹", "").replace(",", "")) -
                        Number.parseInt(product.price.replace("₹", "").replace(",", ""))}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  {product.rating && (
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-400"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">({product.reviews})</span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold gradient-text">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  {product.features && (
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-3">
                    <button className="flex-1 liquid-button py-3 rounded-xl font-semibold flex items-center justify-center gap-2 group">
                      Buy Now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-4 py-3 glass-effect rounded-xl hover:bg-white/10 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
