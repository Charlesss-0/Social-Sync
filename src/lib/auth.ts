import { betterAuth } from 'better-auth';
import { nextCookies } from 'better-auth/next-js';
import prisma from './prisma';
import { prismaAdapter } from 'better-auth/adapters/prisma';

export const auth = betterAuth({
	emailAndPassword: {
		enabled: true,
	},
	database: prismaAdapter(prisma, {
		provider: 'postgresql',
	}),
	plugins: [nextCookies()],
});
