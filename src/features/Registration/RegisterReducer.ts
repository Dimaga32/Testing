type TypeRegisterState = {
   isShowRegister: boolean;
};
type TypeAction = {
   type: typeof ShowRegister | typeof HideRegister;
};
const defaultState: TypeRegisterState = {
   isShowRegister: false,
};

const ShowRegister = "ShowRegister" as const;
const HideRegister = "HideRegister" as const;

export const Registerreducer = (
   state: TypeRegisterState = defaultState,
   action: TypeAction,
): TypeRegisterState => {
   switch (action.type) {
      case ShowRegister:
         return {
            ...state,
            isShowRegister: true,
         };
      case HideRegister:
         return {
            ...state,
            isShowRegister: false,
         };
      default:
         return state;
   }
};
