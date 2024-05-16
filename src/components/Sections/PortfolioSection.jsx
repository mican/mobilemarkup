import classNames from 'classnames'
import { useRef, useEffect } from 'react'

import { gsap } from 'gsap'
// import loadable from '@loadable/component'

import Slider from '../Blocks/Slider.jsx'
import Image from '../Blocks/Image.jsx'
import Video from '../Blocks/Video.jsx'
// const LazyVideo = loadable(() => import('../Blocks/Video.jsx'))
// const Video = props => <LazyVideo {...props} />

import styles from './portfolio-section.module.sass'

export default function PortfolioSection({ projects }) {
  const container = useRef()

  useEffect(() => {
    const loadScrollTrigger = async () => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      let pinWrap = document.querySelector('#projectsWrapper')
      let horizontalScrollLength = pinWrap.offsetWidth - window.innerWidth

      ScrollTrigger.matchMedia({
        '(min-width: 1024px)': function () {
          // setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
          // ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
          gsap.to('#projectsWrapper', {
            scrollTrigger: {
              scrub: true,
              trigger: '#blockProjects',
              pin: true,
              anticipatePin: 1,
              start: 'top top',
              end: () => '+=' + horizontalScrollLength
            },
            x: -horizontalScrollLength,
            ease: 'none'
          })
        }
      })

      ScrollTrigger.refresh()
    }

    loadScrollTrigger()
  }, []) // Empty dependency array to run this effect only once

  return (
    <section ref={container} className={styles.portfolioSection} id="blockProjects">
      <h2 className="sr-only">Web development projects</h2>
      <ul className={classNames(styles.projectList, 'lg:h-screen lg:flex lg:flex-nowrap py-20 px-5 lg:px-0')} id="projectsWrapper">
        {projects &&
          projects.map((project, i) => {
            return (
              <li key={i} className={styles.projectItem}>
                {project.images.length > 0 && (
                  <div className={classNames(styles.projectImages, 'shadow-lg bg-white')}>
                    <Slider>
                      {project.images.map((image, i) => (
                        <figure key={i} className="overflow-hidden">
                          <Image image={image} className={styles.projectImage} alt={project.name} />
                        </figure>
                      ))}
                    </Slider>
                  </div>
                )}
                {project.video && <Video id={project.video.providerUid} title={project.video.title} className={styles.projectVideo} />}
                <h3 className={classNames('project-name', styles.projectName)}>{project.name}</h3>
              </li>
            )
          })}
      </ul>
    </section>
  )
}
