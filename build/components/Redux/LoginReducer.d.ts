type TypeIsLogin = {
    name_or_email: string;
    password: string;
};
type TypeLoginState = {
    isShowLogin: boolean;
    isLogin: TypeIsLogin;
};
type TypeAction = {
    type: typeof ShowLogin | typeof HideLogin | typeof Login;
    payload: {
        name_or_email: string;
        password: string;
    };
};
declare const ShowLogin: string;
declare const HideLogin: string;
declare const Login: string;
export declare const Loginreducer: (state: TypeLoginState, action: TypeAction) => TypeLoginState;
export {};
//# sourceMappingURL=LoginReducer.d.ts.map