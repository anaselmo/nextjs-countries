import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';

async function loginUser({ email, password }: { email: string, password: string }) {
  try {
    const response = await fetch('http://localhost:3001/api/tourists/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      console.log(`user: ${JSON.stringify({ email, password })}`)
      console.log(`token: ${await response.json()}`)
      return await response.json();
    }
      const error = new Error(response.statusText);
      throw error;
  } catch (err) {
    console.error('Failed to login user:', err);
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          console.log({userData: parsedCredentials})
          const logged = await loginUser(parsedCredentials.data);
          if (!logged) return null;
          
          return logged;
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});