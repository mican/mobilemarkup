import React, { useRef, useEffect, useState } from 'react'

export default function Video({ id }) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const posterSrc = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0 // Fully visible
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      })
    }, options)

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef}>
      {isVisible ? (
        <iframe
          className="w-full aspect-video pointer-events-none"
          src={`https://www.youtube.com/embed/${id}?controls=0&autoplay=1&mute=1&loop=1&playlist=${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <img src={posterSrc} alt="Poster" />
      )}
    </div>
  )
}
