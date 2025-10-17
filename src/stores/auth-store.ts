import { type User } from '@supabase/supabase-js';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type State = {
	user: User | null;
	profile: any | null;
};

export type Action = {
	setUser: (user: User | null) => void;
	setProfile: (profile: any | null) => void;
	clearAuth: () => void;
};

export type AuthStore = State & Action;

const useAuthStore = create<AuthStore>()(
	persist(
		set => ({
			user: null,
			profile: null,
			setUser: (user): unknown => set({ user }),
			setProfile: (profile): unknown => set({ profile }),
			clearAuth: (): unknown => set({ user: null, profile: null }),
		}),
		{
			name: 'auth-storage',
			partialize: state => ({
				user: state.user
					? {
							id: state.user.id,
							email: state.user.email,
							user_metadata: state.user.user_metadata,
					  }
					: null,
				profile: state.profile,
			}),
		}
	)
);

export default useAuthStore;
