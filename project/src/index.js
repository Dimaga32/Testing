import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './components/Style/main.scss'
import {createStore} from "redux";
import {Provider} from "react-redux";

const defaultState = {
    user: {
        isShowRegister: false,
        isShowLogin: false,
    },
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ShowLogin':
            return {
                ...state,
                user: { ...state.user, isShowLogin: true },
            };
        case 'HideLogin':
            return {
                ...state,
                user: { ...state.user, isShowLogin: false },
            };
        case 'ShowRegister':
            return {
                ...state,
                user: { ...state.user, isShowRegister: true },
            };
        case 'HideRegister':
            return {
                ...state,
                user: { ...state.user, isShowRegister: false },
            };
        default:
            return state;
    }
};


const store= createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
