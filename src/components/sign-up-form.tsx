'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { type JSX, useState } from 'react';
import { redirect } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

export function SignUpForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<'div'>): JSX.Element {
	const [email, setEmail] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [repeatPassword, setRepeatPassword] = useState<string>('');
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleSignUp = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault();

		await authClient.signUp.email(
			{
				email,
				password,
				name,
			},
			{
				onRequest: () => setIsLoading(true),
				onSuccess: () => {
					setIsLoading(false);
					redirect('/');
				},
				onError: ctx => {
					setIsLoading(false);
					setError(ctx.error.message);
				},
			}
		);
	};

	return (
		<div className={cn('flex flex-col gap-6', className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">Sign up</CardTitle>
					<CardDescription>Create a new account</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSignUp}>
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label htmlFor="email">Name</Label>
								<Input
									id="name"
									type="text"
									placeholder="Your name"
									required
									value={name}
									onChange={e => setName(e.target.value)}
								/>
							</div>
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
								</div>
								<Input
									id="password"
									type="password"
									required
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="repeat-password">Repeat Password</Label>
								</div>
								<Input
									id="repeat-password"
									type="password"
									required
									value={repeatPassword}
									onChange={e => setRepeatPassword(e.target.value)}
								/>
							</div>
							{error && <p className="text-sm text-red-500">{error}</p>}
							<Button type="submit" className="w-full" disabled={isLoading}>
								{isLoading ? 'Creating an account...' : 'Sign up'}
							</Button>
						</div>
						<div className="mt-4 text-center text-sm">
							Already have an account?{' '}
							<Link href="/auth/login" className="underline underline-offset-4">
								Login
							</Link>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
