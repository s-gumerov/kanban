export type TSignInData = {
    login: string
    password: string
  }

export type TSignupData = {
    email: string
    full_name: string
    public_name: string
    phone: string
    avatar_url?: string
    password_again: string
  } & TSignInData

  /* данные которые вернет сервер после регистрации или авторизации */
  export type TUserData = {
    id: number
    board_rights_arr: number[]
  } & Omit<TSignupData, 'password_again'> 



export type TDataToCreateBoard = {
  title: string
  description: string
  picture_id?: number
  creator_id: number
}

export type TDataToDeleteBoard = {
  board_id: number
}

export type TBoardData = {
  id: number
  task_list_arr: number[]
} & TDataToCreateBoard