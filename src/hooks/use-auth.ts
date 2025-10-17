import { useEffect, useState } from 'react';

import { createClient } from '@/utils/client';

const supabase = createClient();

export default function (): {
	user: any | null;
	loading: boolean;
} {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getSession = async (): Promise<void> => {
			const { data } = await supabase.auth.getSession();
			setUser(data?.session ?? null);
			setLoading(false);
		};

		if (!user) {
			getSession();
		}

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event: any, session: any) => {
			setUser(session?.user ?? null);
			setLoading(false);
		});

		return (): void => subscription.unsubscribe();
	}, []);

	return { user, loading };
}
