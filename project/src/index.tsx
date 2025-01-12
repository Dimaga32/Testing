import ReactDOM from 'react-dom/client';
import App from './App';
import './components/Style/main.scss';
import { Provider } from "react-redux";
import { store } from './components/Redux/MainReducer';

const rootElement = document.getElementById('root') as HTMLElement;
if (!rootElement) {
    throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement)

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
