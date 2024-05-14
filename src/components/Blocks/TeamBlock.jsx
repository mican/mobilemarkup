import Image from './Image'
import styles from './team-block.module.sass'

const TeamBlock = ({ people, content }) => (
  <section className={styles.blockTeam}>
    <div className="container">
      <div className={styles.collection}>
        {people &&
          people.map(person => (
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

export default TeamBlock
