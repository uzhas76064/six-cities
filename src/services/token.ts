export type Token = string;

const AUTH_TOKEN_KEY = "six-cities-token";

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  return token ?? '';
}



export const dropToken = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}
