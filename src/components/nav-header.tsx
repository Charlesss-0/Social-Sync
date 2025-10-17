'use client';

import useUserStore from '@/stores/auth-store';
import { type JSX } from 'react';

export default function NavHeader(): JSX.Element {
	const { user } = useUserStore();

	return (
		<header className="flex border-b border-foreground">
			<div>Calendar</div>
			<div>Content</div>
			<div>Welcome, {user?.email}</div>
		</header>
	);
}
