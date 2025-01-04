const defaultState = {
        isShowRegister: false,
};

export const Registerreducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ShowRegister':
            return {
                ...state,
                 isShowRegister: true
            };
        case 'HideRegister':
            return {
                ...state,
               isShowRegister: false
            };
        default:
            return state;
    }
};
