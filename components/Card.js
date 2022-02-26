import styles from '../styles/Card.module.css';

export function Card ({title, text}) {
  return (
    <div className={`content ${styles.card}`}>
      <h3 className={styles.title}>{title}</h3>
      <strong className={styles.text}>{text}</strong>
    </div>
  )
} 