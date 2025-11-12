import { SignUpForm } from '@/components/sign-up-form';
import { type JSX } from 'react';

export default function SignUp(): JSX.Element {
	return (
		<div className="flex min-h-screen items-center justify-center px-4">
			<SignUpForm />
		</div>
	);
}
