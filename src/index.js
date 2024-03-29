import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import programsReducer from "./reducers/programsReducer";

const store = createStore(programsReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
