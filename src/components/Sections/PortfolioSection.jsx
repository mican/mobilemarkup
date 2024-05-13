import { Image } from 'react-datocms'
import classNames from 'classnames'
import Slider from '../Blocks/Slider.jsx'
import Video from '../Blocks/Video.jsx'

import styles from './portfolio-section.module.sass'

export default function PortfolioSection({ projects }) {
  return (
    <section className={styles.projectsSection} id="blockProjects">
      <ul className={styles.projectsCollection} id="projectsWrapper">
        {projects &&
          projects.map((project, i) => (
            <li key={i} className={styles.projectItem}>
              {/* {project.images.length > 0 && (
                <div className={classNames(styles.projectImages, 'shadow-lg bg-white')}>
                  <Slider>
                    {project.images.map((image, i) => (
                      <figure key={i} className={'overflow-hidden'}>
                        <Image image={image} className={styles.projectImage} alt={project.name} />
                      </figure>
                    ))}
                  </Slider>
                </div>
              )} */}
              {project.video && (
                <figure className={styles.projectVideo}>
                  <Video id={project.video.providerUid} title={project.video.title} />
                </figure>
              )}
              <h3 className={classNames('project-name', styles.projectName)}>{project.name}</h3>
            </li>
          ))}
      </ul>
    </section>
  )
}
