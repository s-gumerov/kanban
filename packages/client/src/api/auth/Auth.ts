import { axiosInstance } from "../axios"
import { signup, signin } from "../../../../server/routes/models/user"
import type { TSignInData, TSignupData } from "./types"

export const signUp = async (data: TSignupData) => {
    
    try {
        const result = await axiosInstance<signup.Response>(signup.route, {
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
        const result = await axiosInstance(signin.route, {
            method: 'post',
            data
        })
        
        return result.data
    } catch (error) {
        return error
    }

}