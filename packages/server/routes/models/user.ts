/**
 * Добавить пользователя в БД
 */
export namespace signup {
  /** API URL */
  export const route = '/user/signup'

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
    id: number 
  } 
}

/**
 * Получить из БД id пользователя
 */
export namespace signin {
  /** API URL */
  export const route = '/user/signin'

  /** Параметры api запроса */
  export interface Request {
    login: string
    password: string
  }

  /** Параметры api ответа */
  export interface Response {
    id: number 
  } 
}
