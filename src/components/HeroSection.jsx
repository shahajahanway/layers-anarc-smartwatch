import { useEffect, useState } from "react"
import { ArrowRight, Play, Sparkles, Zap, Star } from "lucide-react"
import { ScrollTriggerAnimations } from "./ScrollTriggerAnimations"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="slime-blob absolute top-20 left-20 w-96 h-96"></div>
        <div className="slime-blob absolute bottom-20 right-20 w-64 h-64" style={{ animationDelay: "2s" }}></div>
        <div
          className="slime-blob absolute top-1/2 left-1/2 w-48 h-48 transform -translate-x-1/2 -translate-y-1/2"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollTriggerAnimations animation="fadeUp" delay={100}>
            <div className="inline-flex items-center gap-2 glass-effect px-6 py-3 rounded-full text-sm font-medium animate-pulse-glow mb-8">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="gradient-text">India's #1 Premium Smartwatch</span>
              <Zap className="w-4 h-4 text-purple-400" />
            </div>
          </ScrollTriggerAnimations>
          <ScrollTriggerAnimations animation="fadeUp" delay={200}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
              <span className="gradient-text-animated tracking-wider">ANARC</span>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-ping opacity-75"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-bounce"></div>
            </h1>
          </ScrollTriggerAnimations>
          <ScrollTriggerAnimations animation="fadeUp" delay={400}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white relative">
              <span className="typewriter-text">The Future of Wearable Technology</span>
            </h2>
          </ScrollTriggerAnimations>
          <ScrollTriggerAnimations animation="fadeUp" delay={600}>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of innovation, style, and performance with India's most advanced smartwatches
            </p>
          </ScrollTriggerAnimations>
          <ScrollTriggerAnimations animation="fadeUp" delay={800}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="liquid-button-enhanced px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 group relative overflow-hidden">
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform animate-sparkle" />
                <span className="relative z-10">Explore Collection</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="glass-effect-enhanced px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all flex items-center gap-3 group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform animate-pulse" />
                <span>Watch Our Story</span>
              </button>
            </div>
          </ScrollTriggerAnimations>
          <ScrollTriggerAnimations animation="fadeUp" delay={1000}>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center stats-card">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50K+</div>
                <div className="text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center stats-card">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">99%</div>
                <div className="text-gray-400">Satisfaction Rate</div>
              </div>
              <div className="text-center stats-card">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-400">Health Monitoring</div>
              </div>
            </div>
          </ScrollTriggerAnimations>
        </div>
      </div>
      <ScrollTriggerAnimations animation="slideLeft" delay={1200}>
        <div className="absolute bottom-0 right-10 float-animation-enhanced">
          <div className="relative">
            <div className="holographic-enhanced absolute inset-0 rounded-full opacity-50"></div>
            <div className="pulse-glow-enhanced rounded-full">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Anarc Smartwatch"
                width={300}
                height={400}
                className="object-contain watch-glow"
              />
            </div>
          </div>
        </div>
      </ScrollTriggerAnimations>
      <div className="absolute top-1/4 right-1/4 morphing-blob-enhanced w-32 h-32 opacity-30"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-particle absolute top-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-float-1"></div>
        <div className="floating-particle absolute top-1/2 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float-2"></div>
        <div className="floating-particle absolute bottom-1/3 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-float-3"></div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-enhanced">
        <div className="neon-glow-enhanced w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse-enhanced"></div>
        </div>
      </div>
    </section>
  )
}
