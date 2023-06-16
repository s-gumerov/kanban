import type { TUserData } from "../../../../shared/API/types"

export type TUserState = {
    user: TUserData | null
    error: string | null
    status: 'INIT' | 'FETCHING' | 'FETCH_FULFILLED' | 'FETCH_FAILED' | null
  }
  
export type TInitialState = {
  user: TUserState,
}
