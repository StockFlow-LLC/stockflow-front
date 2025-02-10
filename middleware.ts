import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')

    if (!token && request.nextUrl.pathname.startsWith('/articles')) {
        return NextResponse.redirect(new URL('/signup', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/articles/:path*']
}