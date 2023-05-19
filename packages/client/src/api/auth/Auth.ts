import { TSignupData } from "../../pages/Signup/types"
import { axiosInstance } from "../axios"
import { setNewUser } from "../../../../server/routes/models/user"

export const signUp = async (data: TSignupData) => {
    
    try {
        const result = await axiosInstance<setNewUser.Response>(setNewUser.route, {
            method: 'post',
            data
        })
        
        return result.data
    } catch (error) {
        return error
    }

}