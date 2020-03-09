import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { reducer } from "./reducers/reducer";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();