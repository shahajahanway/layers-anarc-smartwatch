import { Shield, Zap, Heart, Smartphone, Battery, Droplets } from "lucide-react"
import { ScrollTriggerAnimations } from "./ScrollTriggerAnimations"

const features = [
  {
    icon: Shield,
    title: "Premium Build",
    description: "Crafted with aerospace-grade materials for ultimate durability and luxury feel",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Powered by advanced processors for instant response and seamless performance",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    title: "Health Focused",
    description: "Comprehensive health monitoring tailored for Indian lifestyle and climate",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Smartphone,
    title: "Smart Connectivity",
    description: "Seamless integration with your digital life and smart home ecosystem",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Battery,
    title: "7-Day Battery",
    description: "Extended battery life that keeps up with your active lifestyle",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Droplets,
    title: "Water Resistant",
    description: "5ATM water resistance for swimming, showering, and monsoon adventures",
    color: "from-indigo-500 to-blue-500",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50"></div>
      <div className="slime-blob absolute top-0 left-0 w-full h-full opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <ScrollTriggerAnimations animation="fadeUp" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Why Choose <span className="gradient-text">Anarc</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built for the modern Indian lifestyle with cutting-edge technology and premium craftsmanship
            </p>
          </div>
        </ScrollTriggerAnimations>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollTriggerAnimations key={index} animation="fadeUp" delay={index * 100 + 200}>
              <div className="magnetic group p-8 glass-effect rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform pulse-glow`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-400 text-center leading-relaxed">{feature.description}</p>
              </div>
            </ScrollTriggerAnimations>
          ))}
        </div>
      </div>
    </section>
  )
}
