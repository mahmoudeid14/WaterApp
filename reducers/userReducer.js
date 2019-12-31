
const initialState = {
    userName: '',
    isLogin: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SetIsLogin':
            return { ...state, isLogin: action.payload }
        default:
            return state;
    }
}

export default userReducer;