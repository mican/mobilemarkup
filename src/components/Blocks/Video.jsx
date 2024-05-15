import React, { useRef, useEffect, useState } from 'react'

export default function Video({ id }) {
  const videoRef = useRef(null)
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
        if (entry.intersectionRatio === 1) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      })
    }, options)

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  return (
    <div>
      {isVisible ? (
        <iframe
          ref={videoRef}
          className="w-full aspect-video pointer-events-none"
          src={'https://www.youtube.com/embed/' + id + '?controls=0&autoplay=1&mute=1&loop=1&playlist=' + id}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ) : (
        <img src={posterSrc} alt="Poster" />
      )}
    </div>
  )
}
