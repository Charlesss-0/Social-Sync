import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';

export async function proxy(request: NextRequest): Promise<NextResponse> {
	const path = request.nextUrl.pathname;
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session && !path.startsWith('/auth')) {
		return NextResponse.redirect(new URL('/auth/login', request.url));
	}

	return NextResponse.next();
}
