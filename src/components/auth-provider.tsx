'use client';

import useAuth from '@/hooks/use-auth';
import { type JSX } from 'react';

export default function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
	useAuth();

	return <>{children}</>;
}
