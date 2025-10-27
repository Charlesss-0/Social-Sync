'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { type JSX } from 'react';

export function LogoutButton(): JSX.Element {
	const router = useRouter();

	const logout = async (): Promise<void> => {};

	return <Button onClick={logout}>Logout</Button>;
}
