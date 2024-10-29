import { LoginCredentials, AuthResponse } from '../types/auth';

// Mock user for demonstration
const MOCK_USER = {
  email: 'admin@exemplo.com',
  password: 'admin123',
  id: '1',
  name: 'Leonardo Castro',
  role: 'admin'
};

export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (credentials.email === MOCK_USER.email && credentials.password === MOCK_USER.password) {
    const token = 'mock_jwt_token_' + Date.now();
    return {
      token,
      user: {
        id: MOCK_USER.id,
        email: MOCK_USER.email,
        name: MOCK_USER.name,
        role: MOCK_USER.role
      }
    };
  }

  throw new Error('Email ou senha inválidos');
}