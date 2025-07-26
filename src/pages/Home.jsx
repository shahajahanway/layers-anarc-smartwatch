import { ScrollVideoSection } from "../components/ScrollVideoSection"
import { GSAPAnimations } from "../components/GSAPAnimations"
import { CustomCursor } from "../components/CustomCursor"
import { ParticleSystem } from "../components/ParticleSystem"
import { HeroSection } from "../components/HeroSection"
import { FeaturesSection } from "../components/FeaturesSection"
import { ProductShowcase } from "../components/ProductShowcase"
import { ParticleBackground } from "../components/ParticleBackground"
import { useNavigate } from "react-router-dom"

const featuredProducts = [
  {
    id: "anarc-pro",
    name: "Anarc Pro",
    price: "₹24,999",
    image: "/images/anarc_1.webp",
    description: "Flagship model with ECG, SpO2, GPS, AMOLED display & AI wellness tracking",
  },
  {
    id: "anarc-sport",
    name: "Anarc Sport",
    price: "₹18,999",
    image: "/images/anarc_2.webp",
    description: "Designed for athletes with advanced fitness tracking, 5ATM water resistance, and bold design",
  },
  {
    id: "anarc-classic",
    name: "Anarc Classic",
    price: "₹21,999",
    image: "/images/anarc_3.webp",
    description: "Timeless design with stainless steel body, sapphire glass & smart lifestyle features",
  },
]

export function Home({ videoEnded, setVideoEnded }) {
  const navigate = useNavigate()

  return (
    <GSAPAnimations>
      <div className="min-h-screen relative">
        <CustomCursor />
        <ParticleSystem />
        <ParticleBackground />
        <ScrollVideoSection onVideoEnd={() => setVideoEnded(true)} />
        {videoEnded && (
          <>
            <HeroSection />
            <FeaturesSection />
            <ProductShowcase products={featuredProducts} />
            <section className="py-20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900"></div>
              <div className="morphing-blob absolute top-0 left-0 w-full h-full opacity-20"></div>
              <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    Experience the Future of Smartwatches
                  </h2>
                  <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                    Built for India. Backed by precision. From urban explorers to fitness warriors — Anarc adapts
                    to your world with elegance, endurance, and intelligence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => navigate("/products")}
                      className="liquid-button px-12 py-4 rounded-full font-semibold text-lg"
                    >
                      Explore Products
                    </button>
                    <button
                      onClick={() => alert("Booking demo coming soon!")}
                      className="glass-effect px-12 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
                    >
                      Book a Demo
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </GSAPAnimations>
  )
}
