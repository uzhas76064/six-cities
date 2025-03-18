export type User = {
  avatarUrl: string
  email: string
  id: number
  isPro: boolean
  name: string
  token: string
}

export type UserAuthData = {
  login: string,
  password: string,
}
