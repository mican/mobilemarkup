import Image from './Image'
import styles from './team-block.module.sass'
import classNames from 'classnames'

export default function TeamBlock({ people, content }) {
  return (
    <section className={classNames(styles.blockTeam, 'my-12 mb-0')}>
      <h2 className="sr-only">Web developers</h2>
      <div className="container mx-auto lg:max-w-5xl">
        <div className={styles.collection}>
          {people.map(person => (
            <div key={person.id} className={styles.person}>
              <Image className={styles.personImage} image={person.image} alt={person.name} />
              <h2 className={styles.personName}>{person.name}</h2>
              <span className={styles.personPosition}>{person.specialization}</span>
            </div>
          ))}
        </div>
        {/* {content && <div className={styles.content}>{renderText(content)}</div>} */}
      </div>
    </section>
  )
}
