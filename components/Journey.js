import {Button} from '.';
import styles from '../styles/Journey.module.css';

export function Journey() {
	return (
		<div className={styles.journey}>
			<div className={styles.steps}>
				<div className={styles.line}></div>
				<span className={`${styles.step} ${styles.step_current}`}>01</span>
				<span className={styles.step}>02</span>
				<span className={styles.step}>03</span>
			</div>
			<div className={styles.content}>
				<div className={styles.step_content}>
					<div className={styles.content_wrap}>
						<h3 className={styles.content_title}>
							Test Your Audio And Video For This Lesson
						</h3>
						<p className={styles.content_text}>
							Get Comfortable With Your Preply Classroom
						</p>
					</div>
					<div className={styles.content_btn}>
						<Button type="primary">Test Your Audio And Video</Button>
					</div>
				</div>
				<div className={styles.step_content}>
					<div className={styles.content_wrap}>
						<h3 className={styles.content_title}>Take Your Trial Lesson!</h3>
						<p className={styles.content_text}>
							Meet Your Tutor And Decide Wether It’s A New Match
						</p>
					</div>
					<div className={styles.content_btn}>
						<Button type="secondary">Enter Classroom</Button>
					</div>
				</div>
				<div className={styles.step_content}>
					<div className={styles.content_wrap}>
						<h3 className={styles.content_title}>
							Continue Learning With Vajinath Or Other Tutor For Free
						</h3>
						<p className={styles.content_text}>
							Get Comfortable With Your Preply Classroom
						</p>
					</div>
					<div className={styles.content_btn}>
						<Button type="secondary">Buy Hours</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
