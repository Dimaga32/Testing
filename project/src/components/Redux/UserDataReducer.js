const defaultState = {
    UserDate: null,
};

const LoadUserDate="LoadUserDate"
const UpdateUserDate="UpdateUserDate"
const PutUserDate="PutUserDate"
const DeleteUserDate="DeleteUserDate"

export const UserDatereducer = (state = defaultState, action) => {
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
