import { SignInForm } from '@/components/sign-in-form';
import { type JSX } from 'react';

export default function Login(): JSX.Element {
	return (
		<div className="flex min-h-screen items-center justify-center px-4">
			<SignInForm />
		</div>
	);
}
