import { USER_LOGIN, USER_REGISTER, USER_LOGOUT } from '../actions/types';
const initialState = {
    userName: '',
    mobile: '',
    isLogin: false,
    password: '',
    error: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER:
            return {
                ...state,
                userName: action.payload.userName,
                mobile: action.payload.mobile,
                password: action.payload.password,
                isLogin: true
            }
        case USER_LOGIN:
            return { ...state, userName: action.payload.userName, password: action.payload.password, isLogin: true }
        case USER_LOGOUT:
            return initialState
        default:
            return state;
    }
}

export default userReducer;