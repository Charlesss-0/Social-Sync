import { LogoutButton } from '@/components/auth/logout-button';
import { createClient } from '@/utils/server';
import { redirect } from 'next/navigation';
import { type JSX } from 'react';

export default async function Dashboard(): Promise<JSX.Element> {
	const supabase = await createClient();

	const { data, error } = await supabase.auth.getClaims();

	if (error || !data?.claims) {
		redirect('/auth/login');
	}

	return (
		<div className="flex h-svh w-full items-center justify-center gap-2">
			<p>
				Hello <span>{data.claims.email}</span>
			</p>

			<LogoutButton />
		</div>
	);
}
