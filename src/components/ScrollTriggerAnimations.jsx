import { useEffect, useRef } from "react"

export function ScrollTriggerAnimations({ children, animation = "fadeUp", delay = 0, threshold = 0.1 }) {
  const elementRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in")
            }, delay)
          } else {
            entry.target.classList.remove("animate-in")
          }
        })
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay, threshold])

  return (
    <div ref={elementRef} className={`scroll-trigger scroll-trigger-${animation}`}>
      {children}
    </div>
  )
}
