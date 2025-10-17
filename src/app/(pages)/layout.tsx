import NavHeader from '@/components/nav-header';
import { type JSX } from 'react';

export default function PageLayout({ children }: { children: JSX.Element }): JSX.Element {
	return (
		<div>
			<NavHeader />
			{children}
		</div>
	);
}
