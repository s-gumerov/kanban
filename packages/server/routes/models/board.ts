/**
 * Добавить доску в БД
 */
export namespace createBoard {
  /** API URL */
  export const route = '/workspace/create-boards'

  /** Параметры api запроса - id пользователя */
  export interface Request {
    id: number
  }

  /** Параметры api ответа - id доски*/
  export interface Response {
    id: number,
    name:string,
    avatar_url?: string     
  } 
}

/**
 * Получить список досок пользователя из БД
 */
export namespace getBoards {
    /** API URL */
    export const route = '/workspace/get-boards'
  
    /** Параметры api запроса - id пользователя */
    export interface Request {
      id: number
    }
  
    /** Параметры api ответа */
    export interface Response {
      id: number,
      name:string,
      avatar_url?: string     
    }[] 
  }