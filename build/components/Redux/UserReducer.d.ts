type TypeUserState = {
    UserId: number | null;
    isLoaded: boolean;
    UserName: string | null;
    UserEmail: string | null;
};
type TypeLoadUserAction = {
    type: typeof LoadUser;
    payload: {
        userid: number;
        username: string;
        useremail: string;
    };
};
type TypeDeleteUserAction = {
    type: typeof DeleteUser;
    payload: null;
};
declare const LoadUser: "LoadUser";
declare const DeleteUser: "DeleteUser";
type UserAction = TypeLoadUserAction | TypeDeleteUserAction;
export declare const UserReducer: (state: TypeUserState, action: UserAction) => TypeUserState;
export {};
//# sourceMappingURL=UserReducer.d.ts.map