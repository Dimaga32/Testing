import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/MainReducer";
import "./shared/components/Style/main.scss";

const rootElement = document.getElementById("root") as HTMLElement;
if (!rootElement) {
   throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
   <Provider store={store}>
      <App />
   </Provider>,
);
