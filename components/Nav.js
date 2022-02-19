import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Nav.module.css';
import BrandLogo from '../public/img/brand.svg';
import MenuBar from '../public/img/bar-chart.svg';
import SearchIcon from '../public/img/search.svg';
import {useState} from 'react';
import {NavLink} from '.';

export function Nav() {
	const [searchShow, setSearchShow] = useState(false);
	return (
		<nav className={styles.nav}>
			<Link href="/">
				<a className={styles.nav_brand}>
					<Image src={BrandLogo} alt="SKILLYTREE" height={62} width={240} />
				</a>
			</Link>
			<div className={styles.nav_search}>
				<input
					className={`${styles.nav_search_input}${
						searchShow
							? ''
							: ' ' + styles.nav_search_input_hide
					}`}
					type="text"
					name="query"
					placeholder="SEARCH A SKILL"
				/>
				<span
					className={`${searchShow ? styles.nav_search_icon : styles.nav_search_icon_btn}`}
					onClick={searchShow ? null : () => setSearchShow(true)}
				>
					<Image
						className={styles.nav_search_icon_img}
						src={SearchIcon}
						alt="search"
						height={24}
						width={24}
					/>
				</span>
			</div>
			<div
				className={`${styles.nav_links} ${styles.nav_links_main}${
					searchShow ? ' ' + styles.nav_links_hide : ''
				}`}
			>
				<NavLink
					to="/"
					className={styles.nav_link_main}
					activeClass={styles.nav_link_active}
				>
					Home
				</NavLink>
				<NavLink
					to="#!"
					className={styles.nav_link_main}
					activeClass={styles.nav_link_active}
				>
					Link 1
				</NavLink>
				<NavLink
					to="#!"
					className={styles.nav_link_main}
					activeClass={styles.nav_link_active}
				>
					Link 2
				</NavLink>
				<NavLink
					to="#!"
					className={styles.nav_link_main}
					activeClass={styles.nav_link_active}
				>
					Link 3
				</NavLink>
			</div>
			<div className={styles.nav_links}>
				<button
					className={`${styles.nav_link} ${styles.nav_menu_btn}${
						searchShow ? '' : ' ' + styles.nav_menu_btn_hide
					}`}
					onClick={() => setSearchShow(false)}
				>
					<Image
						className={styles.nav_menu_btn_icon}
						src={MenuBar}
						height={44}
						width={44}
						alt="arrow"
					/>
				</button>
				<NavLink
					to="#!"
					className={`${styles.nav_link} ${styles.nav_link_login}`}
				>
					Log In
				</NavLink>
				<NavLink
					to="#!"
					className={`${styles.nav_link} ${styles.nav_link_signin}`}
				>
					Sign In
				</NavLink>
			</div>
		</nav>
	);
}
