import { authClient } from '@/lib/auth-client';
import useAuthStore from '@/stores/auth-store';
import { type User } from '@prisma/client';
import { useEffect, useState } from 'react';

export default function useAuth(): {
	user: User | null;
	loading: boolean;
} {
	const { user, setUser } = useAuthStore();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const subscribe = async (): Promise<void> => {
			const getSession = async (): Promise<void> => {
				await authClient.getSession({
					fetchOptions: {
						onRequest: () => setLoading(true),
						onSuccess: async ctx => {
							const data = ctx.data as { user: User };
							if (data?.user) {
								setUser(data.user);
								setLoading(false);
							}
						},
					},
				});
			};

			if (!user) {
				getSession();
			}
		};

		return (): void => {
			subscribe().catch();
		};
	}, [user, setUser]);

	return { user, loading };
}
