import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/reducer";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import thunk from 'redux-thunk';


const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();