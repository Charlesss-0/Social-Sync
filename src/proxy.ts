import { getCookieCache } from 'better-auth/cookies';
import { NextResponse, type NextRequest } from 'next/server';

export async function proxy(request: NextRequest): Promise<NextResponse> {
	const session = request.cookies.get('better-auth.session_token')?.value

	if (!session) {
		return NextResponse.redirect(new URL('/auth/sign-in', request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/dashboard/:path*'],
};
