import styles from '../styles/dashboard.module.css';

function Certificates ({className}) {
  return (
    <section className={`${styles.container} ${className}`}>
      <h1 className={styles.title}>Certificates</h1>
      <div className={styles.content}>Certificate</div>
    </section>
  )
}

export default Certificates;