import {NavLink} from '.';
import Image from 'next/image';
import styles from '../styles/Avatar.module.css';
import AvatarIcon from '../public/img/loggedUser.svg';

export function Avatar({className}) {
	return (
		<NavLink to="#!" className={`${styles.avatar} ${className}`}>
			<span className={styles.avatar_icon}>
				<Image src={AvatarIcon} width={37} height={32} />
			</span>
			<span className={styles.avatar_name}>Aditya</span>
		</NavLink>
	);
}
