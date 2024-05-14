import classNames from 'classnames'
import Image from './Image.jsx'
import styles from './technology-block.module.sass'

const TechnologyBlock = ({ technologies }) => (
  <section className={classNames(styles.blockTechnology, 'py-24 pt-48')}>
    <div className="container mx-auto px-5">
      {technologies.map(tech => {
        return (
          <div className={classNames(styles.techBlock)}>
            {!tech.collection && tech.name}
            {tech.collection && (
              <ul className={styles.techCollection}>
                {tech.collection.map(t => (
                  <li key={t.id} className={styles.techItem}>
                    {t.image ? <Image className={styles.techImage} image={t.image} alt={t} /> : <span className={styles.itemTechName}>{t.name}</span>}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      })}
    </div>
  </section>
)

export default TechnologyBlock
