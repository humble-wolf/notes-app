"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/lib/api';
import RegisterForm from '@/components/RegisterForm';

const RegisterPage = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (username: string, password: string) => {
    try {
      const data = await registerUser({ username, password });
      console.log(data)
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Register</h1>
      {error && <p>{error}</p>}
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;
