import {Avatar, NavLink} from '.';
import Image from 'next/image';
import styles from '../styles/Sidebar.module.css';
import Counsilor from '../public/img/counsilor.svg';
import Support from '../public/img/support.svg';

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
				<Avatar className={styles.sidebar_avatar} />
			</div>
			<div
				className={styles.sidebar_links}
			>
				<NavLink
					to="/dashboard"
					className={styles.sidebar_link}
					activeClass={styles.sidebar_link_active}
					key="dashboard"
				>
					<HomeIcon className={styles.sidebar_link_icon} />
					<span className={styles.sidebar_link_text}>Home</span>
				</NavLink>

				<NavLink
					to="/certificates"
					className={styles.sidebar_link}
					activeClass={styles.sidebar_link_active}
				>
					<BookmarkAltIcon className={styles.sidebar_link_icon} />
					<span className={styles.sidebar_link_text}>Certificates</span>
				</NavLink>

				<NavLink
					to="/my-lessons"
					className={styles.sidebar_link}
					activeClass={styles.sidebar_link_active}
					key="my-lessons"
				>
					<BookOpenIcon className={styles.sidebar_link_icon} />
					<span className={styles.sidebar_link_text}>My Lessons</span>
				</NavLink>

				<NavLink
					to="/messages"
					className={styles.sidebar_link}
					activeClass={styles.sidebar_link_active}
					key="messages"
				>
					<ChatIcon className={styles.sidebar_link_icon} />
					<span className={styles.sidebar_link_text}>Messages</span>
				</NavLink>

				<NavLink
					to="/settings"
					className={styles.sidebar_link}
					activeClass={styles.sidebar_link_active}
					key="settings"
				>
					<CogIcon className={styles.sidebar_link_icon} />
					<span className={styles.sidebar_link_text}>Settings</span>
				</NavLink>

				<NavLink
					to="#!"
					className={`${styles.sidebar_link} ${styles.sidebar_link_logout}`}
					activeClass={styles.sidebar_link_active}
					key="logout"
				>
					<LogoutIcon className={styles.sidebar_link_icon} />
					<span className={styles.sidebar_link_text}>Log Out</span>
				</NavLink>
			</div>
			<div className={styles.sidebar_footer}>
				<div className={styles.sidebar_footer_wrap}>
					<div className={styles.sidebar_footer_img}>
						<Image src={Counsilor} width={174} height={174} />
					</div>
					<h3 className={styles.sidebar_footer_title}>
						<span className={styles.sidebar_footer_icon}>
							<Image src={Support} width={20} height={20} />
						</span>
						<span className={styles.sidebar_footer_text}>
							Chat With Councillor
						</span>
					</h3>
				</div>
			</div>
		</nav>
	);
}
