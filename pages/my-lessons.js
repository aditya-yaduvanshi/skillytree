import styles from '../styles/dashboard.module.css';
import {Journey} from '../components';

function MyLessons ({className}) {
  return (
    <section className={`${styles.container} ${className}`}>
      <h1 className={styles.title}>Start Your Journey Now</h1>
      <div className={styles.content}>
        <Journey />
      </div>
    </section>
  )
}

export default MyLessons;