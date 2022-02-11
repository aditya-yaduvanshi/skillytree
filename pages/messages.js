import styles from '../styles/dashboard.module.css';

function Messages ({className}) {
  return (
    <section className={`${styles.container} ${className}`}>
      <h1 className={styles.title}>Messages</h1>
      <div className={styles.content}>Message</div>
    </section>
  )
}

export default Messages;