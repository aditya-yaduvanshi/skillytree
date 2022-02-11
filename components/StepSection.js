import styles from '../styles/Section.module.css';
import Image from 'next/image';
import Steps from '../public/img/steps.svg';

export function StepSection() {
	return (
		<section className={styles.section}>
			<div className={styles.image_container}>
				<Image className={styles.image} src={Steps} alt="steps" />
			</div>
		</section>
	);
}
