import styles from '../styles/dashboard.module.css';

function DashBoard ({className}) {
  return (
    <section className={`${styles.container} ${className}`}>
      <h1 className={styles.title}></h1>
      <div className={styles.content}>
      </div>
    </section>
  )
}

export default DashBoard;