export interface IUser {
  username: string,
  password: string,
  id: number
}

export interface IMessage {
  message: string,
  author: string,
  id: number
}

export interface IUserReducerProps {
  type: string,
  payload: IUser
}

export interface IMessageReducerProps {
  type: string,
  payload: IMessage
}

export interface LoginFormProps {
  login: (loginUsername: string, loginPassword: string, mode?: string) => void,
  loginError: string
}

export interface ChatProps {
  author: IUser
}

export interface RootState {
  users: IUser[],
  workMessages: IMessage[]
}
