import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import { Building2 } from 'lucide-react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'resident';
}

function App() {
  const [user, setUser] = useState<User | null>(() => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    return token && savedUser ? JSON.parse(savedUser) : null;
  });

  const handleLoginSuccess = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  if (user) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex flex-col items-center justify-center p-4">
      <div className="grid md:grid-cols-2 gap-8 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl w-full max-w-5xl">
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Modern Condominium"
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="text-center mb-8">
            <div className="mx-auto h-12 w-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Condo Manager Pro
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Gerenciamento inteligente para seu condomínio
            </p>
            {/* <p className="mt-2 text-xs text-blue-600">
              Use email: admin@exemplo.com / senha: admin123
            </p> */}
          </div>
          
          <LoginForm onLoginSuccess={handleLoginSuccess} />
          
          <p className="mt-8 text-center text-sm text-gray-600">
            Precisa de acesso?{' '}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Fale com seu síndico
            </a>
          </p>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;