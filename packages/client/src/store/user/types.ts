import type { TUserData } from "../../api/auth/types"

export type TUserState = {
    user: TUserData | null
    error: string | null
    status: 'INIT' | 'FETCHING' | 'FETCH_FULFILLED' | 'FETCH_FAILED' | null
  }