type TypeUserDataState = {
    UserDate: object | null;
};
type TypeAction = {
    type: typeof LoadUserDate | typeof UpdateUserDate | typeof DeleteUserDate | typeof PutUserDate;
    payload: object;
};
declare const LoadUserDate: "LoadUserDate";
declare const UpdateUserDate: "UpdateUserDate";
declare const PutUserDate: "PutUserDate";
declare const DeleteUserDate: "DeleteUserDate";
export declare const UserDatereducer: (state: TypeUserDataState, action: TypeAction) => TypeUserDataState;
export {};
//# sourceMappingURL=UserDataReducer.d.ts.map