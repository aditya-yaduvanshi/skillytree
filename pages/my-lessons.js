import styles from '../styles/dashboard.module.css';

function MyLessons ({className}) {
  return (
    <section className={`${styles.container} ${className}`}>
      <h1 className={styles.title}>My Lessons</h1>
      <div className={styles.content}>Lesson</div>
    </section>
  )
}

export default MyLessons;