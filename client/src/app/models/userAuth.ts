interface User {
  id: number;
  name: string;
  email: string;
}

interface UserAuth {
  access_token: string;
  user: User
}

export type { UserAuth, User }
