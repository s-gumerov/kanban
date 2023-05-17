import { getLocationOrigin } from "../utils/getLocationOrigin"
import { isClient } from "../utils/isClient"

export const HOST = isClient() ? getLocationOrigin() : ''
export const BASE_URL_API = `${HOST}/api`
