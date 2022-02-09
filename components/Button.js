import Link from 'next/link';
import Image from 'next/image';
import RightArrow from '../assets/img/arrow-right.svg';
import styles from '../styles/Button.module.css';

export function ButtonLink({text}) {
	return (
		<Link href="#!">
			<a className={styles.btn_link}>
				<span>{text}</span>
				<Image src={RightArrow} alt="" />
			</a>
		</Link>
	);
}
