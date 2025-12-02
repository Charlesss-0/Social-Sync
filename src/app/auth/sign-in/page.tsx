import { SignInForm } from '@/components/sign-in-form';
import { type JSX } from 'react';

export default function SignIn(): JSX.Element {
	return (
		<div className="flex items-center justify-center min-h-screen px-4">
			<SignInForm />
		</div>
	);
}
