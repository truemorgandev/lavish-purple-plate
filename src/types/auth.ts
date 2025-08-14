export interface User {
  id: string;
  name: string;
  email: string;
  bonusPoints: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}