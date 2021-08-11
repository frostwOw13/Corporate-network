export interface IUser {
  username: string,
  password: string,
  id: number
}

export interface IUserReducerProps {
  type: string,
  payload: IUser
}
