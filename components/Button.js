import Link from 'next/link';
import Image from 'next/image';
import RightArrow from '../public/img/arrow-right.svg';
import styles from '../styles/Button.module.css';

export function ButtonLink({text}) {
	return (
		<Link href="#!">
			<a className={styles.btn_link}>
				<span className={styles.btn_text}>{text}</span>
				<span className={styles.btn_icon}>
					<Image src={RightArrow} alt="" />
				</span>
			</a>
		</Link>
	);
}

export function Button({children, onClick, type, textSize="sm", className}) {
	return <button className={`${styles.btn} ${styles["btn_"+type]} ${styles["btn_text_"+textSize]} ${className}`} onClick={onClick}>{children}</button>;
}

