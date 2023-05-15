/**
 * Добавить пользователя в БД
 */
export namespace setNewUser {
  /** API URL */
  export const route = '/set-new-user'

  /** Параметры api запроса */
  export interface Request {
    email: string
    login: string
    full_name: string
    public_name: string
    phone: string
    password: string
    avatar_url?: string
  }

  /** Параметры api ответа */
  export interface Response {
    user_id: number
  }
}

/**
 * Получить данные пользователя по id
 */
export namespace getUser {
  /** API URL */
  export const route = '/get-user'

  /** Параметры api запроса */
  export interface Request {
    user_id: number
  }

  /** Параметры api ответа */
  export interface Response {
    id: number
    email: string
    login: string
    full_name: string
    public_name: string
    phone: string
    password: string
    avatar_url: string
  }
}
