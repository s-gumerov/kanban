import { isClient } from "../utils/isClient"
import { getLocationOrigin } from "../utils/getLocationOrigin"

export const HOST = isClient() ? getLocationOrigin () : ''
export const BASE_URL_API = `${HOST}/api` /* для сервера по умолчанию всегда - "/api' */

export namespace API {
  export enum Auth {
    Signup = '/auth/signup',
    Signin = '/auth/signin',
  }
  
  export enum Boards {
    CreateBoard = '/boards/create',
    DeleteBoard = '/boards/delete'
  }
}

  export type TBadRequest = {
    reason: string
  }
  