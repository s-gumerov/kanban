import { axiosInstance } from "../axios"
import type { TSignInData, TSignupData } from "../../../../shared/API/types"
import { API } from "../../../../shared/API"

export const signUp = async (data: TSignupData) => {
    
    try {
        const result = await axiosInstance(API.USER.SIGNUP, {
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
        const result = await axiosInstance(API.USER.SIGNIN, {
            method: 'post',
            data
        })
        
        return result.data
    } catch (error) {
        return error
    }

}