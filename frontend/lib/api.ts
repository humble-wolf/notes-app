import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const registerUser = async (data: { username: string; password: string }) => {
  const response = await api.post('/auth/register/', data);
  return response.data;
};

export const loginUser = async (data: { username: string; password: string }) => {
  const response = await api.post('/auth/login/', data);
  return response.data;
};
