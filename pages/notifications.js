import styles from '../styles/dashboard.module.css';

function Notifications ({className}) {
  return (
    <section className={`${styles.container} ${className}`}>
      <h1 className={styles.title}>Settings</h1>
      <div className={styles.content}>Setting</div>
    </section>
  )
}

export default Notifications;
