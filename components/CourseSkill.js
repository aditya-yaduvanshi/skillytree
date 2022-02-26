import {Avatar, Button} from '.';
import {useState} from 'react';
import styles from '../styles/CourseSkill.module.css';
import {StarIcon} from '@heroicons/react/solid';
import {
	ChevronDownIcon,
	ChevronUpIcon,
	CheckIcon,
} from '@heroicons/react/outline';

export function CourseSkill({course, headline, buttonType, buttonText, rate}) {
	const [show, setShow] = useState(false);
	return (
		<div className={`content ${styles.course_skill}`}>
			<div className={styles.row}>
				<Avatar />
				<strong className={styles.about}>{headline}</strong>
				<span className="text-[#FFB800]">
					<StarIcon />
					<span>{rate}</span>
				</span>
				<button onClick={() => setShow((prev) => !prev)}>
					<ChevronDownIcon className={styles.down_icon} />
				</button>
				<Button type={buttonType} className={styles.row_btn}>
					{buttonText}
				</Button>
			</div>
			{show && (
				<>
					<div className={styles.row}>
						<div className={styles.step_col}>
							<h4 className={styles.step_name}>Step 4</h4>
							<strong className={styles.step_title}>{course.title}</strong>
							<p className={styles.step_text}>{course.text}</p>
						</div>
						<div className={styles.step_col}>
							<Button type="primary" className="">
								Visit Classroom
							</Button>
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.steps_line}>
							<Step text="1" completed={true} />
							<Step text="2" completed={true} />
							<Step text="3" completed={true} />
							<Step text="4" current={true} />
							<Step text="5" />
						</div>
					</div>
				</>
			)}
		</div>
	);
}

function Step({completed, text, current}) {
	return (
		<span
			className={`${styles.step}${
				completed
					? ' ' + styles.step_completed
					: current
					? ' ' + styles.step_current
					: ''
			}`}
		>
			{completed ? <CheckIcon className="text-white" /> : text}
		</span>
	);
}
