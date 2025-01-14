export interface UserCredentials {
    username: string;
    password: string;
  }
  
  export interface Note {
    id: number;
    title: string;
    description: string;
    audioFile?: string;
  }
  