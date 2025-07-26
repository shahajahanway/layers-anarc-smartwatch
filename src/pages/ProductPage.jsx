import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ScrollReveal } from "../components/ScrollReveal"
import { ParticleBackground } from "../components/ParticleBackground"
import {
  ArrowLeft,
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
  Check,
  Minus,
  Plus,
} from "lucide-react"

const productData = {
  "anarc-pro": {
    id: "anarc-pro",
    name: "Anarc Pro",
    price: "₹24,999",
    originalPrice: "₹29,999",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    rating: 4.9,
    reviews: 1247,
    description:
      "The Anarc Pro represents the pinnacle of smartwatch technology, combining premium materials with cutting-edge health monitoring capabilities. Designed for professionals who demand excellence.",
    features: [
      "Advanced ECG monitoring with medical-grade accuracy",
      "7-day battery life with fast charging",
      "5ATM water resistance for swimming",
      "Built-in GPS with offline maps",
      "Premium titanium construction",
      "Always-on AMOLED display",
      "Comprehensive health suite",
      "Voice assistant integration",
    ],
    specifications: {
      Display: '1.4" AMOLED, 454x454 resolution',
      Battery: "7 days typical use, 14 days power saving",
      "Water Resistance": "5ATM (50 meters)",
      Connectivity: "Bluetooth 5.2, Wi-Fi, GPS",
      Sensors: "Heart rate, ECG, SpO2, Accelerometer, Gyroscope",
      Materials: "Titanium case, Sapphire crystal",
      Weight: "45g without strap",
      Compatibility: "Android 6.0+, iOS 12.0+",
    },
    colors: ["Titanium Gray", "Space Black", "Rose Gold"],
    sizes: ["42mm", "46mm"],
    inStock: true,
  },
}

export function ProductPage() {
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("features")

  const product = productData[id]

  if (!product) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products" className="liquid-button px-6 py-3 rounded-full">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-16 relative">
      <ParticleBackground />

      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-gray-400">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-white transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="space-y-4">
                <div className="relative aspect-square glass-effect rounded-3xl overflow-hidden">
                  <img
                    src={product.images[selectedImage] || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="flex gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square w-20 glass-effect rounded-xl overflow-hidden transition-all ${
                        selectedImage === index ? "ring-2 ring-purple-500" : "hover:scale-105"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Products
                </Link>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400">({product.reviews} reviews)</span>
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl font-bold gradient-text">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xl text-gray-400 line-through">{product.originalPrice}</span>
                    )}
                    {product.originalPrice && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Save ₹
                        {Number.parseInt(product.originalPrice.replace(/[₹,]/g, "")) -
                          Number.parseInt(product.price.replace(/[₹,]/g, ""))}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{product.description}</p>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Color</h3>
                  <div className="flex gap-3">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(index)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedColor === index
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                            : "glass-effect hover:bg-white/10"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Size</h3>
                  <div className="flex gap-3">
                    {product.sizes.map((size, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedSize(index)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedSize === index
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                            : "glass-effect hover:bg-white/10"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Quantity</h3>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 glass-effect rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 glass-effect rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 liquid-button py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                  <button className="px-6 py-4 glass-effect rounded-xl hover:bg-white/10 transition-colors">
                    Buy Now
                  </button>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    Free Shipping
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />2 Year Warranty
                  </div>
                  <div className="flex items-center gap-2">
                    <RotateCcw className="w-4 h-4" />
                    30 Day Returns
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="flex border-b border-gray-800 mb-8">
                {["features", "specifications", "reviews"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 font-semibold capitalize transition-colors ${
                      activeTab === tab
                        ? "text-purple-400 border-b-2 border-purple-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="min-h-[300px]">
                {activeTab === "features" && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {activeTab === "specifications" && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="glass-effect p-4 rounded-xl">
                          <dt className="font-semibold text-purple-400 mb-2">{key}</dt>
                          <dd className="text-gray-300">{value}</dd>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {activeTab === "reviews" && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>
                    <div className="text-center text-gray-400">
                      <p>Reviews coming soon...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
