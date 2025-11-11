import './globals.css';

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

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
			<body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
