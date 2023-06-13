import { axiosInstance } from "../axios"
import type { TSignInData, TSignupData } from "./types"
import { RoutePaths } from "../../../../shared"

export const signUp = async (data: TSignupData) => {
    
    try {
        const result = await axiosInstance(RoutePaths.SIGNUP, {
            method: 'post',
            data
        })
        
        return result.data
    } catch (error) {
        return error
    }

}

export const signIn = async (data: TSignInData) => {
    
    try {
        const result = await axiosInstance(RoutePaths.SIGNIN, {
            method: 'post',
            data
        })
        
        return result.data
    } catch (error) {
        return error
    }

}