import { getCookieCache } from 'better-auth/cookies';
import { NextResponse, type NextRequest } from 'next/server';

export async function proxy(request: NextRequest): Promise<NextResponse> {
	const session = await getCookieCache(request);

	if (!session) {
		return NextResponse.redirect(new URL('/', request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/dashboard'],
};
