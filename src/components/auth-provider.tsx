import useAuth from '@/hooks/use-auth';
import useAuthStore from '@/stores/auth-store';
import { createClient } from '@/utils/client';
import { useEffect, type JSX } from 'react';

const supabase = createClient();

export default function AuthProvider({ children }: { children: JSX.Element }): JSX.Element {
	const { user } = useAuth();
	const { setUser, setProfile, clearAuth } = useAuthStore();

	const fetchUserProfile = async (userId: string): Promise<void> => {
		try {
			const { data: profile, error } = await supabase
				.from('profiles')
				.select('*')
				.eq('id', userId)
				.single();

			if (!error && profile) {
				setProfile(profile);
			}
		} catch (error) {
			throw new Error("Couldn't fetch user profile " + error);
		}
	};

	useEffect(() => {
		if (user) {
			setUser(user);
			fetchUserProfile(user.id);
		} else {
			clearAuth();
		}
	}, []);

	return <>{children}</>;
}
