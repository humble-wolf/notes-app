export const saveToken = (token: string) => {
    localStorage.setItem('accessToken', token);
  };
  
  export const getToken = (): string | null => {
    return localStorage.getItem('accessToken');
  };
  
  export const clearToken = () => {
    localStorage.removeItem('accessToken');
  };
  