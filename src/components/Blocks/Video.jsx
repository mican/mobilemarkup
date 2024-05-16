import { useRef, useEffect, useState } from 'react'
import Image from './Image'
import classNames from 'classnames'
import styles from './video.module.sass'

export default function Video({ id, className, title }) {
  const containerRef = useRef(null)
  const iframeRef = useRef(null)
  const [isReady, setIsReady] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const posterSrc = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
  const videoSrc = `https://www.youtube.com/embed/${id}?controls=0&autoplay=1&mute=1&loop=1&playlist=${id}&enablejsapi=1&version=3&playerapiid=ytplayer&rel=0`

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0 // Fully visible
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsReady(true)
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

  useEffect(() => {
    if (iframeRef.current) {
      if (isVisible) {
        iframeRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
        iframeRef.current.classList.add('is-playing')
      } else {
        iframeRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
        iframeRef.current.classList.remove('is-playing')
      }
    }
  }, [isVisible])

  return (
    <figure ref={containerRef} className={classNames('video', styles.video, className)}>
      <Image image={posterSrc} alt={title + ' video poster'} />
      {isReady && (
        <iframe
          ref={iframeRef}
          className="w-full aspect-video pointer-events-none"
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </figure>
  )
}
