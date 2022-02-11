import Link from 'next/link';
import {useRouter} from 'next/router';

export function NavLink({className, children, to, activeClass}) {
	const router = useRouter();
	return (
		<Link href={to}>
			<a
				className={`${className}${
					router.pathname === to ? ' ' + activeClass : ''
				}`}
			>
				{children}
			</a>
		</Link>
	);
}
