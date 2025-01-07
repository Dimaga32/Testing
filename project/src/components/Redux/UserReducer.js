const defaultState = {
    UserId: null,
    isLoaded: false,
    UserName: null,
    UserEmail: null,
};

const LoadUser="LoadUser"
const UpdateUser="UpdateUser"
const PutUser="PutUser"
const DeleteUser="DeleteUser"

export const Userreducer = (state = defaultState, action) => {
    switch (action.type) {
        case LoadUser:
            return {
                ...state,
                UserId: action.payload.userid,
                isLoaded: true,
                UserName: action.payload.username,
                UserEmail: action.payload.useremail
            }
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
