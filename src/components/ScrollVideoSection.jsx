import { useEffect, useState, useRef } from "react"
import { Play, Volume2, VolumeX } from "lucide-react"

export function ScrollVideoSection({ onVideoEnd }) {
  const [isVideoEnded, setIsVideoEnded] = useState(false)
  const [showFallback, setShowFallback] = useState(false)
  const [videoProgress, setVideoProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [canPlay, setCanPlay] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showPlayButton, setShowPlayButton] = useState(false)
  const [featuresAnimated, setFeaturesAnimated] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoEnd = () => {
      setIsVideoEnded(true)
      onVideoEnd()
    }

    const handleVideoError = () => {
      setShowFallback(true)
      setIsLoading(false)
      setTimeout(() => {
        setIsVideoEnded(true)
        onVideoEnd()
      }, 3000)
    }

    const handleCanPlay = () => {
      setCanPlay(true)
      setIsLoading(false)
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => setShowPlayButton(false))
          .catch(() => setShowPlayButton(true))
      }
    }

    const updateProgress = () => {
      if (video.duration) {
        setVideoProgress((video.currentTime / video.duration) * 100)
      }
    }

    video.addEventListener("ended", handleVideoEnd)
    video.addEventListener("error", handleVideoError)
    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("timeupdate", updateProgress)

    const fallbackTimeout = setTimeout(() => {
      if (isLoading || !canPlay) {
        setShowFallback(true)
        setIsLoading(false)
        setTimeout(() => {
          setIsVideoEnded(true)
          onVideoEnd()
        }, 3000)
      }
    }, 10000)

    return () => {
      video.removeEventListener("ended", handleVideoEnd)
      video.removeEventListener("error", handleVideoError)
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("timeupdate", updateProgress)
      clearTimeout(fallbackTimeout)
    }
  }, [onVideoEnd, isLoading, canPlay])

  useEffect(() => {
    if (isVideoEnded || showFallback) {
      const timeout = setTimeout(() => setFeaturesAnimated(true), 2200)
      return () => clearTimeout(timeout)
    } else {
      setFeaturesAnimated(false)
    }
  }, [isVideoEnded, showFallback])

  const toggleMute = () => {
    const video = videoRef.current
    if (video) {
      video.muted = !video.muted
      setIsMuted(video.muted)
    }
  }

  const handlePlayClick = () => {
    const video = videoRef.current
    if (video && canPlay) {
      video.play().catch(() => {
        setShowFallback(true)
        setTimeout(() => {
          setIsVideoEnded(true)
          onVideoEnd()
        }, 3000)
      })
    }
  }

  const features = [
    "AMOLED Display with Always-On Mode",
    "Health & Fitness Tracking (Heart Rate, SpO2, Sleep)",
    "Bluetooth Calling with Noise Reduction",
    "2-week Battery Life",
  ]

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {isLoading && !showFallback && (
        <div className="absolute inset-0 flex items-center justify-center z-30 bg-black">
          <div className="text-center">
            <div className="w-24 h-24 border-8 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="mt-6 text-xl text-white">Preparing the experience...</p>
          </div>
        </div>
      )}

      {!showFallback && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted={isMuted}
          playsInline
          preload="auto"
          poster="/placeholder.svg"
        >
          <source src="https://itsedway.com/wp-content/uploads/2025/07/Layers-Anarc-Smartwatch-TechBurner-Smartwatch-Brand-Film-Layers-1080p-h264.mp4" type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-black/40 z-10" />

      {showPlayButton && !isVideoEnded && (
        <button
          onClick={handlePlayClick}
          className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur p-6 rounded-full border border-white/30 hover:bg-white/30"
        >
          <Play className="w-10 h-10 text-white" />
        </button>
      )}

      {!showFallback && !isVideoEnded && (
        <button
          onClick={toggleMute}
          className="absolute bottom-6 right-6 z-30 bg-black/40 p-3 rounded-full border border-white/20 hover:bg-black/70"
        >
          {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
        </button>
      )}

      {!showFallback && !isVideoEnded && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
          <div
            className="h-full bg-gradient-to-r from-purple-600 to-blue-600"
            style={{ width: `${videoProgress}%` }}
          />
        </div>
      )}

      {(isVideoEnded || showFallback) && (
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 gap-10 z-20 bg-gradient-to-br from-black via-purple-900 to-black">
          <div className="w-full md:w-1/2 space-y-6">
            <h2
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
              style={{ overflow: "hidden" }}
            >
              <span
                className="typewriter-text"
                style={{
                  animationDelay: "0.2s",
                  animationDuration: "1.2s",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: "0",
                  animationFillMode: "forwards",
                }}
              >
                The Ultimate{" "}
              </span>
              <span
                className="typewriter-text gradient-text"
                style={{
                  animationDelay: "1.1s",
                  animationDuration: "1.2s",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: "0",
                  animationFillMode: "forwards",
                }}
              >
                Smartwatch
              </span>
            </h2>
            <p
              className="text-gray-300 text-lg md:text-xl typewriter-text"
              style={{
                animationDelay: "2.1s",
                animationDuration: "1.2s",
                display: "inline-block",
                whiteSpace: "nowrap",
                overflow: "hidden",
                width: "0",
                animationFillMode: "forwards",
              }}
            >
              ANARC combines cutting-edge performance with stunning design. Built for creators, athletes, and explorers.
            </p>
            <ul className="text-white space-y-2 list-disc list-inside mt-2">
              {features.map((feature, idx) => (
                <li
                  key={feature}
                  className={`transition-all duration-700 ${
                    featuresAnimated
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{
                    transitionDelay: featuresAnimated
                      ? `${0.3 + idx * 0.18}s`
                      : "0s",
                  }}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <video
              src="/Smartwatch.mp4"
              autoPlay
              loop
              playsInline
              className="w-[520px] md:w-[600px] rounded-xl shadow-xl border border-white/10"
              poster="/images/anarc_3.webp"
            />
          </div>
        </div>
      )}

      {isVideoEnded && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 text-center animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center mx-auto">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse mt-1"></div>
          </div>
          <p className="text-white text-sm mt-2">Scroll to discover more</p>
        </div>
      )}
    </section>
  )
}
