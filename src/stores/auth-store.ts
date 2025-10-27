import { type User } from '@prisma/client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type State = {
	user: User | null;
};

export type Action = {
	setUser: (user: User | null) => void;
	clearAuth: () => void;
};

export type AuthStore = State & Action;

const useAuthStore = create<AuthStore>()(
	persist(
		set => ({
			user: null,
			setUser: (user): unknown => set({ user }),
			clearAuth: (): unknown => set({ user: null }),
		}),
		{
			name: 'auth-storage',
			partialize: state => ({
				user: state.user
					? {
							id: state.user.id,
							email: state.user.email,
							user_name: state.user.name,
					  }
					: null,
			}),
		}
	)
);

export default useAuthStore;
