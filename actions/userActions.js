import { USER_LOGIN, USER_REGISTER, USER_LOGOUT } from './types';
export const registerAction = (userName, mobile, password) => {
    return {
        type: USER_REGISTER,
        payload: { userName, mobile, password }
    }
}

export const loginAction = (userName, password) => {
    return {
        type: USER_LOGIN,
        payload: { userName, password }
    }
}

export const logoutAction = () => {
    return { type: USER_LOGOUT }
}