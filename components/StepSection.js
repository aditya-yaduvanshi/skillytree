import styles from '../styles/Section.module.css';
import Image from 'next/image';
import Steps from '../assets/img/steps.svg';

export function StepSection() {
	return (
		<section className={styles.section}>
			<div className={styles.image}>
				<Image src={Steps} alt="" />
			</div>
		</section>
	);
}
