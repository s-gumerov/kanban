import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"

import type { TSignInData, TUserData } from "../../api/auth/types"
import { RoutePaths } from "../../pages/router/routes"
import { signIn } from "../../api/auth"
import type { TBadRequest } from "../../../../server"



export const signInByThunk = createAsyncThunk<TUserData | TBadRequest, TSignInData>(RoutePaths.SIGNIN, function (data) {
    const response = signIn(data)
    return response
})

/*
export const signInByThunk = createAsyncThunk<
TUserData | TBadRequest,
 TSignInData
 >(RoutePaths.SIGNIN, async function (data) {

        const result = await axiosInstance<signup.Response>(signup.route, {
            method: 'post',
            data
        })
        
        return result.data
 
})
*/