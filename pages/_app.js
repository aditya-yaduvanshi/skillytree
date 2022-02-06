import {Nav} from '../components';
import '../styles/globals.css';

function MyApp({Component, pageProps}) {
	return (
		<>
			<Nav />
			<main className="main">
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default MyApp;
