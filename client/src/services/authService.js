import apiInstance from "./apiService";

const login = async (data) => {
    try {
        // data => {username, password}
        const response = await apiInstance.post('/auth/login', data)
        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("Unable to login. Check your username amd password");
    }
}

const register = async (data) => {
    try {
        // data => {username, password, security_question, answer}
        const response = await apiInstance.post('/auth/register', data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const forgot_password = async (data) => {
    try {
        // data => {username, password, security_question, answer} password refers to the new password
        const response = await apiInstance.post('/auth/forgot_password', data)
        return response.data
    } catch (error) {
        console.log(error)
        throw new Error("Unable to change password. Ensure you have chosen correct question and given correct answer");
    }
}

const authServices = {
    login,
    register,
    forgot_password
}

export default authServices