"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/lib/api';
import { saveToken } from '@/utils/auth';
import AuthForm from '@/components/AuthForm';

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (username: string, password: string) => {
    try {
      const data = await loginUser({ username, password });
      saveToken(data.access);
      router.push('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <AuthForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
