type TypeIsLogin={
    name_or_email:string,
        password:string
}
type TypeLoginState={
    isShowLogin: boolean,
    isLogin:TypeIsLogin
}
type TypeAction={
    type: typeof ShowLogin | typeof HideLogin | typeof Login,
    payload: { name_or_email: string, password: string },
}

const defaultState:TypeLoginState = {
    isShowLogin: false,
    isLogin: {name_or_email:"",password:""}
};

const ShowLogin:string="ShowLogin" as const;
const HideLogin:string="HideLogin" as const;
const Login:string="Login" as const;

export const Loginreducer = (state:TypeLoginState = defaultState, action:TypeAction):TypeLoginState => {
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
            if (!action.payload) {
                return state;
            }
            return {
                ...state,
                 isLogin: {name_or_email:action.payload.name_or_email, password:action.payload.password}
            }
        default:
            return state;
    }
};
