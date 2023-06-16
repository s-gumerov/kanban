import { isClient } from "../utils/isClient"
import { getLocationOrigin } from "../utils/getLocationOrigin"

export const HOST = isClient() ? getLocationOrigin () : ''
export const BASE_URL_API = `${HOST}/api` /* для сервера по умолчанию всегда - "/api' */

export namespace API {
  export enum USER {
    SIGNUP = '/user/signup',
    SIGNIN = '/user/signin',
  }
  
  export enum BOARD {
    CREATE = '/board/create',
  }
}

  export type TBadRequest = {
    reason: string
  }
  