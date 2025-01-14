"use client"
import { useState } from 'react';

interface AuthFormProps {
  onSubmit: (username: string, password: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="string"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AuthForm;
