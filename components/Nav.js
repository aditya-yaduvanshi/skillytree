import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Nav.module.css';
import BrandLogo from '../public/img/brand.svg';
import MenuBar from '../public/img/bar-chart.svg';
import SearchIcon from '../public/img/search.svg';

export function Nav() {
	return (
		<nav className={styles.nav}>
			<Link href="/">
				<a className={styles.nav_brand}>
					<Image src={BrandLogo} alt="SKILLYTREE" height={62} width={240} />
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
					<Image
						className={styles.nav_search_icon_img}
						src={SearchIcon}
						alt="search"
						height={24}
						width={24}
					/>
				</span>
			</div>
			<div className={styles.nav_links}>
				<button className={`${styles.nav_link} ${styles.nav_menu_btn}`}>
					<Image
						className={styles.nav_menu_btn_icon}
						src={MenuBar}
						height={44}
						width={44}
						alt="arrow"
					/>
				</button>
				<Link href="#!">
					<a className={`${styles.nav_link} ${styles.nav_link_login}`}>
						Log In
					</a>
				</Link>
				<Link href="#!">
					<a className={`${styles.nav_link} ${styles.nav_link_signin}`}>
						Sign In
					</a>
				</Link>
			</div>
		</nav>
	);
}
