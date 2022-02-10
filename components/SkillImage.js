import styles from '../styles/SkillImage.module.css';
import Image from 'next/image';

export function SkillImage({src, alt, onHover, className}) {
	function handleMouseOver() {
		onHover(alt);
	}
	return (
		<div className={`${styles.skill_container} ${className}`} onMouseOver={handleMouseOver}>
			<div className={styles.skill}>
				<div className={styles.image}>
					<Image src={src} alt={alt} layout="fill" objectFit="contain" />
				</div>
				<div className={styles.shadow}></div>
			</div>
		</div>
	);
}
