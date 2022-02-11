import styles from '../styles/dashboard.module.css';

function DashBoard ({className}) {
  return (
    <section className={`${styles.container} ${className}`}>
      <h1 className={styles.title}>Start Your Journey Now</h1>
      <div className={styles.content}>Sections</div>
    </section>
  )
}

export default DashBoard;