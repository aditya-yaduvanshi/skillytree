import {Nav} from '../components';
import '../styles/globals.css';

function MyApp({Component, pageProps}) {
	return (
		<div className="myapp">
			<Nav />
			<main className="main">
				<Component {...pageProps} />
			</main>
		</div>
	);
}

export default MyApp;
