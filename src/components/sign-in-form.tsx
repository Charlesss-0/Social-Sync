'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { type JSX, useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export function SignInForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<'div'>): JSX.Element {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleSignIn = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault();

		setIsLoading(true);

		const { error } = await authClient.signIn.email({
			email,
			password,
			rememberMe: true,
		});

		if (error) {
			setError(error.message || 'Something went wrong. Please try again.');
			setIsLoading(false);
		}

		await authClient.getSession();

		setIsLoading(false);
		router.push('/dashboard');
	};

	return (
		<div className={cn('flex flex-col gap-6', className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">Sign In</CardTitle>
					<CardDescription>Enter your email below to sign in to your account</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSignIn}>
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="m@example.com"
									required
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
									<Link
										href="/auth/forgot-password"
										className="inline-block ml-auto text-sm underline-offset-4 hover:underline"
									>
										Forgot your password?
									</Link>
								</div>
								<Input
									id="password"
									type="password"
									required
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
							{error && <p className="text-sm text-red-500">{error}</p>}
							<Button type="submit" className="w-full" disabled={isLoading}>
								{isLoading ? 'Signin in...' : 'Sign In'}
							</Button>
						</div>
						<div className="mt-4 text-sm text-center">
							Don&apos;t have an account?{' '}
							<Link href="/auth/sign-up" className="underline underline-offset-4">
								Sign up
							</Link>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
