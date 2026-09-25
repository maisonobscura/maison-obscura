import { useEffect, useRef } from "react"

function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("reveal--visible")
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.12,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return ref
}

export default useReveal
