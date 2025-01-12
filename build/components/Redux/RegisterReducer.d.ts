type TypeRegisterState = {
    isShowRegister: boolean;
};
type TypeAction = {
    type: typeof ShowRegister | typeof HideRegister;
};
declare const ShowRegister: "ShowRegister";
declare const HideRegister: "HideRegister";
export declare const Registerreducer: (state: TypeRegisterState, action: TypeAction) => TypeRegisterState;
export {};
//# sourceMappingURL=RegisterReducer.d.ts.map