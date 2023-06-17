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
    Create = '/boards',
    Get='/boards/get'
  }
}

  export type TBadRequest = {
    reason: string
  }
  