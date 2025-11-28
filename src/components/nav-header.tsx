'use client';

import { type JSX } from 'react';

export default function NavHeader(): JSX.Element {
	return (
		<header className="flex border-b border-foreground">
			<div>Calendar</div>
			<div>Content</div>
			<div>Welcome, </div>
		</header>
	);
}
