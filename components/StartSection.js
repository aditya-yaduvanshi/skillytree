import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Section.module.css';
import {ButtonLink} from '.';
import GirlPointingItems from '../public/girl-pointing-items.svg';
import User from '../public/user.svg';
import Mail from '../public/mail.svg';
import Ellipse from '../public/ellipse.svg';
import UserGroup from '../public/user-group.svg';

export function StartSection() {
	return (
		<section className={styles.section}>
			<div className={styles.section_col}>
				<div className={styles.section_text}>
					<h2 className={styles.section_title}>
						Start Your 2022
						<br />
						With A
						<span className={styles.section_title_highlight}> New Skill</span>
					</h2>
					<p className={styles.section_para}>
						Some random text of the section in this section some random text
						will be shown just like this as you are reading.
					</p>
					<ButtonLink text={'Get A Trial'} />
				</div>
			</div>
			<div className={styles.graphics_wrapper}>
				<Link href="#!">
					<a
						className={`${styles.graphics_btn} ${styles.graphics_btn_student}`}
					>
						<span className={styles.graphics_btn_divider}>100K+ Students</span>
						<span>
							<Image src={User} alt="" />
						</span>
					</a>
				</Link>
				<Link href="#!">
					<a className={`${styles.graphics_btn} ${styles.graphics_btn_enroll}`}>
						<span>
							<Image src={Mail} alt="" />
						</span>
						<span className={styles.graphics_btn_divider}>
							<span>Congrates!</span>
							<span className={styles.graphics_btn_normal}>
								YOU ARE NOW ENROLLED
							</span>
						</span>
					</a>
				</Link>
				<Link href="#!">
					<a
						className={`${styles.graphics_btn} ${styles.graphics_btn_instructor}`}
					>
						<span>
							<Image src={UserGroup} alt="" />
						</span>
						<span className={styles.graphics_btn_divider}>
							100K+ Instructors
						</span>
					</a>
				</Link>
				<Link href="#!">
					<a
						className={`${styles.graphics_btn} ${styles.graphics_btn_cooking}`}
					>
						<span>
							<Image src={Ellipse} alt="" />
						</span>
						<span className={styles.graphics_btn_divider}>
							<span>COOKING CLASSES</span>
							<span className={styles.graphics_btn_text}>
								TOMORROW AT 10AM EVENING
							</span>
							<button>JOIN NOW</button>
						</span>
					</a>
				</Link>
				<div className={styles.graphics_img}>
					<Image src={GirlPointingItems} alt="" />
				</div>
			</div>
		</section>
	);
}
