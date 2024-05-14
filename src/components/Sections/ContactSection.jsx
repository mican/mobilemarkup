import ContactForm from '../Blocks/ContactForm.jsx'

import styles from './contact-section.module.sass'

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className="container  mx-auto px-5">
        <ContactForm />
      </div>
    </section>
  )
}
