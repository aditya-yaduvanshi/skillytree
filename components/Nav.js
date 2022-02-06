import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Nav.module.css';
import BrandLogo from '../assets/img/brand-logo.svg';
import MenuBar from '../assets/img/bar-chart.svg';
import SearchIcon from '../assets/img/search.svg';

export function Nav() {
	return (
		<nav className={styles.nav}>
			<Link href="/">
				<a className={styles.nav_brand}>
					<div className={styles.nav_brand_logo}>
						<Image src={BrandLogo} />
					</div>
					<div className={styles.nav_brand_text}>
						<span className={styles.nav_brand_title}>
							<span className={styles.nav_brand_title_text1}>SKILLY</span>
							<span className={styles.nav_brand_title_text2}>TREE</span>
						</span>
						<span className={styles.nav_brand_slogan}>
							Upskill With A Personal Touch
						</span>
					</div>
				</a>
			</Link>
			<div className={styles.nav_search}>
				<input
					className={styles.nav_search_input}
					type="text"
					name="query"
					placeholder="SEARCH A SKILL"
				/>
				<span className={styles.nav_search_icon}>
					<Image src={SearchIcon} />
				</span>
			</div>
			<div className={styles.nav_links}>
				<button className={`${styles.nav_link} ${styles.nav_menu_btn}`}>
					<Image src={MenuBar} height={36} width={36} />
				</button>
				<Link href="#!">
					<a className={styles.nav_link}>Log In</a>
				</Link>
				<Link href="#!">
					<a className={`${styles.nav_link} ${styles.nav_link_signin}`}>Sign In</a>
				</Link>
			</div>
		</nav>
	);
}
