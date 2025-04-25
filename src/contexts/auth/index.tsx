import { IUser } from '@/interface';
import { create } from 'zustand';

interface AuthState {
  user: IUser.User | null;
  login: (userData: IUser.User) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),

  login: (userData: IUser.User) => {
    localStorage.setItem('user', JSON.stringify(userData));
    set({ user: userData });
  },

  logout: () => {
    localStorage.removeItem('user');
    set({ user: null });
  },

  isAuthenticated: () => {
    return !!JSON.parse(localStorage.getItem('user') || 'null');
  },
}));
