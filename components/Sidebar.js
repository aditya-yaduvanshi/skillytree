import {NavLink} from '.';
import styles from '../styles/Sidebar.module.css';
import {
	BookmarkAltIcon,
	BookOpenIcon,
	HomeIcon,
	CogIcon,
	ChatIcon,
	LogoutIcon,
	MenuIcon
} from '@heroicons/react/outline';
import { useState } from 'react';

export function Sidebar() {
	const [show, setShow] = useState(false);

	function toggleMenu () {
		setShow(prev => !prev);
	}
	
	return (
		<nav className={styles.sidebar}>
			<div className={styles.sidebar_header}>
				<h2 className={styles.sidebar_header_title}>Dashboard</h2>
				<button className={styles.sidebar_menu_toggle} onClick={toggleMenu}>
					<MenuIcon className={styles.sidebar_menu_icon} />
				</button>
			</div>
			<div className={`${styles.sidebar_links} ${show ? styles.sidebar_links_show : styles.sidebar_links_hide}`}>
				<NavLink
					to="/dashboard"
					className={styles.sidebar_link}
					activeClass={styles.sidebar_link_active}
					key="dashboard"
				>
					<HomeIcon className={styles.sidebar_link_icon} />
					<span>Home</span>
				</NavLink>

				<NavLink
					to="/certificates"
					className={styles.sidebar_link}
					activeClass={styles.sidebar_link_active}
				>
					<BookmarkAltIcon className={styles.sidebar_link_icon} />
					<span>Certificates</span>
				</NavLink>

				<NavLink
					to="/my-lessons"
					className={styles.sidebar_link}
					activeClass={styles.sidebar_link_active}
					key="my-lessons"
				>
					<BookOpenIcon className={styles.sidebar_link_icon} />
					<span>My Lessons</span>
				</NavLink>

				<NavLink
					to="/messages"
					className={styles.sidebar_link}
					activeClass={styles.sidebar_link_active}
					key="messages"
				>
					<ChatIcon className={styles.sidebar_link_icon} />
					<span>Messages</span>
				</NavLink>

				<NavLink
					to="/settings"
					className={styles.sidebar_link}
					activeClass={styles.sidebar_link_active}
					key="settings"
				>
					<CogIcon className={styles.sidebar_link_icon} />
					<span>Settings</span>
				</NavLink>

				<NavLink
					to="#!"
					className={styles.sidebar_link}
					activeClass={styles.sidebar_link_active}
					key="logout"
				>
					<LogoutIcon className={styles.sidebar_link_icon} />
					<span>Log Out</span>
				</NavLink>
			</div>
			<div className={styles.sidebar_footer}>
				<h3>Chat With Councillor</h3>
			</div>
		</nav>
	);
}
