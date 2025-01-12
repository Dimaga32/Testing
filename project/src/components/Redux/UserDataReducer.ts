type TypeUserDataState = {
    UserDate:{
        data: object;
    }|null
}
type TypeAction = {
    type:typeof LoadUserDate | typeof UpdateUserDate | typeof DeleteUserDate | typeof PutUserDate
    payload?:{data: object}
}
const defaultState:TypeUserDataState = {
    UserDate: null,
};

const LoadUserDate="LoadUserDate" as const
const UpdateUserDate="UpdateUserDate" as const
const PutUserDate="PutUserDate" as const
const DeleteUserDate="DeleteUserDate"   as const

export const UserDatereducer = (state:TypeUserDataState = defaultState, action:TypeAction):TypeUserDataState => {
    switch (action.type) {
        case LoadUserDate:
            return {
                ...state,
                UserDate: action.payload,
            }
        case DeleteUserDate:
            return {
                ...state,
                UserDate: null
            };
        default:
            return state;
    }
};
