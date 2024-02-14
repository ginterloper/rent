import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
	pages: {
		signIn: '/rent/profile/sign-in',
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;
			const isOnRent = nextUrl.pathname.startsWith('/rent');
			if (isOnRent) {
				if (isLoggedIn) return true;
				return false;
			} else if (isLoggedIn) {
				return Response.redirect(new URL('/rent', nextUrl));
			}
			return true;
		},
	},
	providers: [],
} satisfies NextAuthConfig;