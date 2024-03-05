import { create } from 'zustand';
import { AuthService } from '@/app/lib/auth-service';

const auth = new AuthService();

export interface ILoginFormInput {
  email: string;
  password: string;
}

type AuthStore = {
  token: string | null;
  loading: boolean;
  error: string | null;
  signIn: (credentials: ILoginFormInput) => Promise<void>;
  signOut: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  loading: false,
  error: null,
  signIn: async (credentials: ILoginFormInput) => {
    set({ loading: true });
    set({ error: null });
    try {
      const response = await auth.getUserToken(credentials);

      if (response) {
        const token =  response;
        set({ token });
      }
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false })
    }
  },
  signOut: () => {
    set({ token: null });
  }
}));
