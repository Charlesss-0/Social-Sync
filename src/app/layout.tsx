import { geistMono, geistSans } from '@/fonts';
import './globals.css';

import type { Metadata } from 'next';
import { type JSX } from 'react';

export const metadata: Metadata = {
	title: 'Social Sync',
	description:
		'Schedule your social media posts with ease. Sync your posts across multiple platforms effortlessly.',
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
