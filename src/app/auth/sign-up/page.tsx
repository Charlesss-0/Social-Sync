import { SignUpForm } from '@/components/sign-up-form';
import { type JSX } from 'react';

export default function SignUp(): JSX.Element {
	return (
		<div className="flex items-center justify-center min-h-screen px-4">
			<SignUpForm />
		</div>
	);
}
