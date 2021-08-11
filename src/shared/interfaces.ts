export interface IUser {
  username: string,
  password: string,
  id: number
}

export interface IUserReducerProps {
  type: string,
  payload: IUser
}

export interface LoginFormProps {
  login: (loginUsername: string, loginPassword: string, mode?: string) => void,
  loginError: string
}

export interface RootState {
  users: IUser[]
}
