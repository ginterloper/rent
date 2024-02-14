import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from '@/auth.config';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
const bcrypt = require('bcrypt');
 
async function getUser(phone: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE phone=${phone}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
				const phoneRegex = new RegExp(
					/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
				);
        const parsedCredentials = z
          .object({ phone: z.string().regex(phoneRegex, 'Неверный номер телефона!'), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { phone, password } = parsedCredentials.data;
          const user = await getUser(phone);
          if (!user) return null;
					const passwordsMatch = await bcrypt.compare(password, user.password);
 
          if (passwordsMatch) return user;
        }
 
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});