import styles from '../../styles/messages.module.css';
import {ChatCard, NavLink} from '../../components';
import Head from 'next/head';
import Chat from './chat';

function Messages({className}) {
	return (
		<section className={`my_container ${className} ${styles.container}`}>
			<Head>
				<title>Messages</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.chat_profiles}>
				<div className={styles.header_links}>
					<NavLink
						to="/messages?tab=all"
						query={{key: 'tab', value: 'all'}}
						className={styles.header_link}
						activeClass={styles.header_link_active}
					>
						All
					</NavLink>
					<NavLink
						to="/messages?tab=unread"
						query={{key: 'tab', value: 'unread'}}
						className={styles.header_link}
						activeClass={styles.header_link_active}
					>
						Unread
					</NavLink>
				</div>
				<div className={styles.chats}>
					<ChatCard link="/messages/chat" />
					<ChatCard link="/messages/chat" />
					<ChatCard link="/messages/chat" />
					<ChatCard link="/messages/chat" />
					<ChatCard link="/messages/chat" />
					<ChatCard link="/messages/chat" />
					<ChatCard link="/messages/chat" />
					<ChatCard link="/messages/chat" />
				</div>
			</div>
      <div className={styles.chat_container}>
        <Chat/>
      </div>
		</section>
	);
}

export default Messages;