export type PokeOverview = {
  name: string;
  url: string;
};

export type Params = Promise<{ name: string }>;

export type User = {
  username: string;
  password: string;
  setCredentials: (username: string, password: string) => void;
  logout: () => void;
};
