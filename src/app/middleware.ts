import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest): Promise<NextResponse> {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		return NextResponse.redirect(new URL('/login', request.url));
	}

	return NextResponse.next();
}
