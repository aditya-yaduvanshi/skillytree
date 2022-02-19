import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/ChatCard.module.css';
import ChatUser from '../public/img/chatUser.svg';

export function ChatCard ({className, link}) {
  return (
    <Link href={link} replace>
      <a className={`${styles.link} ${className}`}>
        <div className={styles.avatar}>
          <Image src={ChatUser} width={58} height={58} alt="user" />
        </div>
        <div className={styles.body}>
          <h5 className={styles.title}>
            Chat Message Title
          </h5>
          <span className={styles.date}>10/21/2121</span>
          <p className={styles.text}>Some text based on api call.</p>
        </div>
      </a>
    </Link>
  )
}
