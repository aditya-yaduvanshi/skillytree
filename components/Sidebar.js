import {NavLink} from '.';
import styles from '../styles/Sidebar.module.css';
import {
	BookmarkAltIcon,
	BookOpenIcon,
	HomeIcon,
	CogIcon,
	ChatIcon,
	LogoutIcon,
} from '@heroicons/react/outline';

export function Sidebar() {
	return (
		<nav className={styles.sidebar}>
			<div className={styles.sidebar_header}>
				<h2 className={styles.sidebar_header_title}>Dashboard</h2>
			</div>
			<div className={styles.sidebar_links}>
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
