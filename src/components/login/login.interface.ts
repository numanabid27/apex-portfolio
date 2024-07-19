export interface IUseLogin {
  setEmail: (value: string) => unknown;
  setPassword: (value: string) => unknown;
  handleSubmit: () => void;
  error: string;
  setError: (error: string) => void;
}
