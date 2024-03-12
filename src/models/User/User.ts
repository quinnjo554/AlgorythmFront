export interface User {
  status:boolean,
  data: user,
}

interface user{
    user: UserVal
}

interface UserVal {
  userid : number;
  name: string;
  username: string;
  email: string;
  profileurl?: string | null;
}