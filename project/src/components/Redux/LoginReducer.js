const defaultState = {
    isShowLogin: false,
    isLogin: {name_or_email:"",password:""}
};

const ShowLogin="ShowLogin"
const HideLogin="HideLogin"
const Login="Login"

export const Loginreducer = (state = defaultState, action) => {
    switch (action.type) {
        case ShowLogin:
            return {
                ...state,
                 isShowLogin: true
            };
        case HideLogin:
            return {
                ...state,
                 isShowLogin: false
            };
        case Login:
            return {
                ...state,
                 isLogin: {name_or_email:action.payload.name_or_email, password:action.payload.password}
            }
        default:
            return state;
    }
};
