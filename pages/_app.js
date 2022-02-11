import {Nav} from '../components';
import '../styles/globals.css';
import {useRouter} from 'next/router';
import {Sidebar} from '../components';

function MyApp({Component, pageProps}) {
	const router = useRouter();
	return (
		<div className="myapp">
			<Nav />
			<main className="main">
				{router.pathname === '/' ? (
					<Component {...pageProps} />
				) : (
					<>
						<Sidebar />
						<Component className="main_content" {...pageProps} />
					</>
				)}
			</main>
		</div>
	);
}

export default MyApp;
