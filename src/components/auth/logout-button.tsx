'use client';

import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/client';
import { useRouter } from 'next/navigation';
import { type JSX } from 'react';

export function LogoutButton(): JSX.Element {
	const router = useRouter();

	const logout = async (): Promise<void> => {
		const supabase = createClient();
		await supabase.auth.signOut();
		router.push('/auth/login');
	};

	return <Button onClick={logout}>Logout</Button>;
}
