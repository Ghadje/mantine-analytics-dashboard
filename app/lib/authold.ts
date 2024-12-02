import Auth0 from 'next-auth/providers/auth0';
import { NextAuthOptions } from 'next-auth';
import { api } from './api';

const {
  AUTH0_CLIENT_ID = '',
  AUTH0_CLIENT_SECRET = '',
  AUTH0_DOMAIN = '',
  AUTH0_NEXT_SECRET = '',
  AUTH0_ISSUER_BASE_URL = '',
} = process.env;

export const authOptions: NextAuthOptions = {
  secret: AUTH0_NEXT_SECRET,
  providers: [
    Auth0({
      clientId: AUTH0_CLIENT_ID,
      clientSecret: AUTH0_CLIENT_SECRET,
      issuer: AUTH0_ISSUER_BASE_URL,
    }),
  ],
};


export interface LoginCredentials {
  email: string,
  password: string,
}


export const login = async (credentials: LoginCredentials) => {
  try {
    const response = await api.post('api/user/login', credentials);  // Make API call for login
    const { token } = response.data;  // Extract token from response
    localStorage.setItem('token', token);  // Store token in localStorage for 7 days
    return token;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

export const logout = () => {
  localStorage.removeItem('token');  // Remove token from localStorage
  window.location.href = '/login';  // Redirect to login page
};