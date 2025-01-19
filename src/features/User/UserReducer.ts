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
const defaultState: TypeUserState = {
   UserId: null,
   isLoaded: false,
   UserName: null,
   UserEmail: null,
};

const LoadUser = "LoadUser" as const;
const DeleteUser = "DeleteUser" as const;
// Define the type of all possible actions
type UserAction = TypeLoadUserAction | TypeDeleteUserAction;

export const UserReducer = (
   state: TypeUserState = defaultState,
   action: UserAction,
): TypeUserState => {
   switch (action.type) {
      case LoadUser:
         return {
            ...state,
            UserId: action.payload.userid,
            isLoaded: true,
            UserName: action.payload.username,
            UserEmail: action.payload.useremail,
         };
      case DeleteUser:
         return {
            ...state,
            UserId: null,
            isLoaded: false,
            UserName: null,
            UserEmail: null,
         };
      default:
         return state;
   }
};
