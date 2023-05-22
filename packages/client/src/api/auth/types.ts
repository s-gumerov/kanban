export type TSignInData = {
    login: string
    password: string
  }

export type TSignupData = {
    email: string
    full_name: string
    public_name: string
    phone: string
    password_again: string
  } & TSignInData

  export type TUserData = {
    id: number
    avatar?: string
  } & Omit<TSignupData, 'password' | 'password_again'>
