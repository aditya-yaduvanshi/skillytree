import Image from 'next/image';
import {useState} from 'react';
import skillStyles from '../styles/SkillSection.module.css';
import styles from '../styles/Section.module.css';
import {SkillImage, ButtonLink} from '.';
import Gardening from '../public/img/plant.svg';
import Yoga from '../public/img/yoga-girl.svg';
import Cooking from '../public/img/girl-cooking.svg';
import Guitar from '../public/img/guitar.svg';
import Eating from '../public/img/girl-eating-salad.svg';

export function SkillSection() {
	const skills = [
		{
			subtitle: 'Gardening Classes',
			text: '',
			price: '5000',
			src: Gardening,
			alt: 'Gardening',
			css: 'top_left',
		},
		{
			subtitle: 'Yoga Classes',
			text: '',
			price: '10000',
			src: Yoga,
			alt: 'Yoga',
			css: 'bottom_left',
		},
		{
			subtitle: 'Healthy Eating Classes',
			text: '',
			price: '3000',
			src: Eating,
			alt: 'Eating',
			css: 'bottom_right',
		},
		{
			subtitle: 'Guitar Classes',
			text: '',
			price: '4000',
			src: Guitar,
			alt: 'Guitar',
			css: 'top_right',
		},
		{
			subtitle: 'Cooking Classes',
			text: '',
			price: '6000',
			src: Cooking,
			alt: 'Cooking',
			css: 'top',
		},
	];
	const [skill, setSkill] = useState(skills[0]);

	function handleHover(alt) {
		setSkill(skills.find((sk) => sk.alt === alt));
	}

	return (
		<section className={styles.section}>
			<div className={styles.section_col}>
				<div className={styles.section_text}>
					<h2 className={styles.section_title}>
						Skills
						<span className={styles.section_title_highlight}> Offered</span>
					</h2>
					{skill.subtitle && (
						<h3 className={skillStyles.section_subtitle}>{skill.subtitle}</h3>
					)}
					<p className={styles.section_para}>
						{skill.text
							? skill.text
							: `Some random text of the section in this section some random text will
					be shown just like this as you are reading.`}
					</p>
					<p className={skillStyles.section_subtext}>Rs. {skill.price}/Hr</p>
					<ButtonLink text={'Explore More'} />
				</div>
			</div>
			<div className={skillStyles.graphics}>
				<div className={skillStyles.skill_circle}>
					<div
						className={`${skillStyles.outer_circle} ${skillStyles.outer_circle_lg}`}
					></div>
					<div className={skillStyles.skill_circle_inner}>
						<div className={skillStyles.center_skill}>
							<span className={skillStyles.center_skill_container}>
								<Image
									className={skillStyles.center_skill_img}
									src={skill.src}
									alt={skill.alt}
								/>
							</span>
						</div>
						{skills.map((sk) => (
							<SkillImage
								src={sk.src}
								alt={sk.alt}
								key={sk.alt}
								onHover={handleHover}
								className={skillStyles[sk.css]}
							/>
						))}
					</div>
					<div
						className={`${skillStyles.outer_circle} ${skillStyles.outer_circle_sm}`}
					></div>
				</div>
			</div>
		</section>
	);
}
