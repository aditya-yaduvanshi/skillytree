import styles from '../styles/Message.module.css';
import Avatar from '../public/img/chatUser.svg';
import Image from 'next/image';

export function Message({type = 'my', last}) {
	return (
		<div className={`${styles.message}${type === 'my' ? ' ' + styles.message_my : ''}`}>
			<div className={`${styles.avatar}${last ? styles.avatar_last : ''}`}>
				<Image src={Avatar} width={40} height={40} alt="avatar" />
			</div>
			<div className={`${styles.text}${type === 'my' ? ' ' + styles.text_my : ''}`}>
				<p className={`${styles.text_para}${type === 'my' ? ' ' + styles.text_para_my : ''}`}>
					Hey Yashvi, That&apos;s great! would you like my help with this? do you
					have any questions for me about how I conduct my lessons?
				</p>
				<span className={styles.text_time}>12:00</span>
			</div>
		</div>
	);
}
