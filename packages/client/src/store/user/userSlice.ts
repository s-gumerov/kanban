import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import type { TSignInData, TSignupData, TUserData } from "../../api/auth/types"
import { RoutePaths } from "../../pages/router/routes"
import { signIn, signUp } from "../../api/auth"
import type { TBadRequest } from "../../../../server"
import type { TInitialState, TUserState } from "./types"
import { isError } from "../../utils/isError"


export const signUpByThunk = createAsyncThunk<TUserData | TBadRequest, TSignupData>(RoutePaths.SIGNUP, async (data) => {
  return signUp(data)
})

export const signInByThunk = createAsyncThunk<TUserData | TBadRequest, TSignInData>(RoutePaths.SIGNIN, async (data) => {
   return signIn(data)
})

export const initialStateOfUser: TUserState = {
    user: null,
    error: null,
    status: null,
  }

  export const getUserReducer = (state: TInitialState) => {
    const userSlice = createSlice({
        name: 'user',
        initialState: state.user,
        reducers: {},
        extraReducers: builder => {
          builder
            .addCase(signUpByThunk.pending, state => {
              state.status = 'FETCHING'
              state.error = null
            })
            .addCase(signUpByThunk.fulfilled, (state, action) => {
              state.user = action.payload as TUserData
              state.error = null
              state.status = 'FETCH_FULFILLED'
            })
            .addCase(signInByThunk.pending, state => {
              state.status = 'FETCHING'
              state.error = null
            })
            .addCase(signInByThunk.fulfilled, (state, action) => {
              state.user = action.payload as TUserData
              state.error = null
              state.status = 'FETCH_FULFILLED'
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
              state.user = null
              state.error = action.payload ?? 'Error!'
              state.status = 'FETCH_FAILED'
            })
        },
      })
    
      return userSlice.reducer
    }