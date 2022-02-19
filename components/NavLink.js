import Link from 'next/link';
import {useRouter} from 'next/router';

export function NavLink({className, children, to, activeClass, query}) {
	const router = useRouter();
	return (
		<Link href={to}>
			<a
				className={`${className}${
					router.pathname === to.split('?')[0] && (query ? router.query[query.key] === query.value : true) ? ' ' + activeClass : ''
				}`}
			>
				{children}
			</a>
		</Link>
	);
}
