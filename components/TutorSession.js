import {Avatar, Button} from '.';
import styles from '../styles/TutorSession.module.css';
import {ChevronDownIcon, RefreshIcon} from '@heroicons/react/outline';

export function TutorSession() {
	return (
		<div className={styles.tutor_session}>
			<div className={styles.tutor_session_header}>
				<div className={styles.tutor}>
					<ChevronDownIcon className={styles.down_icon} />
					<Avatar className={styles.tutor_avatar} />
				</div>
				<div className={styles.tutor_schedule}>
					<div className={styles.tutor_schedule_text}>
						<span className={styles.text_normal}>0 Hours</span>
						<span className={styles.text_light}>To Schedule</span>
					</div>
					<div className={styles.tutor_schedule_text}>
						<span className={styles.text_normal}>820.25 INR</span>
						<span className={styles.text_light}>Per Hour</span>
					</div>
				</div>
				<div className={styles.tutor_btns}>
					<Button type="tertiary" className={styles.tutor_btns_btn}>
						Message
					</Button>
					<Button type="primary" className={styles.tutor_btns_btn}>
						Buy Hours
					</Button>
				</div>
			</div>
			<div className={styles.tutor_session_main}>
				<h3 className={styles.div_title}>Past Lesson</h3>
			</div>
			<div className={styles.tutor_session_footer}>
				<p className={styles.text_light}>Thu, Dec 09 , Duration 60 Minutes</p>
				<div className={styles.tutor_session_footer_confirm}>
					<span className={styles.tutor_session_confirm}>Confirmed</span>
					<button className={styles.tutor_session_repeat}>
							<RefreshIcon className={styles.tutor_session_repeat_icon} width={18} height={18}/>
						<span>Repeat</span>
					</button>
				</div>
			</div>
		</div>
	);
}
