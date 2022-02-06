import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Section.module.css';
import GirlPointingItems from '../assets/img/girl-pointing-items.svg';
import RightArrow from '../assets/img/arrow-right.svg';
import User from '../assets/img/user.svg';
import Mail from '../assets/img/mail.svg';
import Ellipse from '../assets/img/ellipse.svg';
import UserGroup from '../assets/img/user-group.svg';

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
						Some random text of the section in this section some random text will
						be shown just like this as you are reading.
					</p>
					<Link href="#!">
						<a className={styles.section_btn}>
							<span>Get A Trial</span>
							<Image src={RightArrow} alt="" />
						</a>
					</Link>
					<div className={styles.section_btn_dots}>
						<button className={`${styles.section_dot} ${styles.section_dot_active}`}></button>
						<button className={styles.section_dot}></button>
						<button className={styles.section_dot}></button>
					</div>
				</div>
			</div>
			<div className={styles.graphics_wrapper}>
				<Link href="#!">
					<a className={`${styles.graphics_btn} ${styles.graphics_btn_student}`}>
						<span className={styles.graphics_btn_title}>100K+ Students</span>
						<Image src={User} alt="" />
					</a>
				</Link>
				<Link href="#!">
					<a className={`${styles.graphics_btn} ${styles.graphics_btn_enroll}`}>
						<span><Image src={Mail} alt="" /></span>
						<span className={styles.graphics_btn_divider}>
							<span>Congrates!</span>
							<span className={styles.graphics_btn_normal}>YOU ARE NOW ENROLLED</span>
						</span>
					</a>
				</Link>
				<Link href="#!">
					<a className={`${styles.graphics_btn} ${styles.graphics_btn_instructor}`}>
						<span>
							<Image src={UserGroup} alt="" />
						</span>
						<span className={styles.graphics_btn_divider}>100K+ Instructors</span>
					</a>
				</Link>
				<Link href="#!">
					<a className={`${styles.graphics_btn} ${styles.graphics_btn_cooking}`}>
						<span>
							<Image src={Ellipse} alt="" />
						</span>
						<span className={styles.graphics_btn_divider}>
							<span>COOKING CLASSES</span>
							<span className={styles.graphics_btn_text}>TOMORROW AT 10AM EVENING</span>
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

export function SkillSection() {
	return (
		<section className={styles.section}>
			<div className={`${styles.section_text} ${styles.section_col}`}>
				<h2>Title Of the section</h2>
				<p>Some random text of the section in this section some random text</p>
				<button>Register</button>
			</div>
			<div className={`${styles.section_graphics} ${styles.section_col}`}>
				<div className={styles.graphics_wrapper}>
					<Image src={GirlPointingItems} alt="" />
				</div>
			</div>
		</section>
	);
}

export function StepSection() {
	return (
		<section className={styles.section}>
			<div className={`${styles.section_text} ${styles.section_col}`}>
				<h2>Title Of the section</h2>
				<p>Some random text of the section in this section some random text</p>
				<button>Register</button>
			</div>
			<div className={`${styles.section_graphics} ${styles.section_col}`}>
				<div className={styles.graphics_wrapper}>
					<Image src={GirlPointingItems} alt="" />
				</div>
			</div>
		</section>
	);
}
