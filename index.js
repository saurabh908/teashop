import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./component/App";
import postReducer from "./reducers/postReducer";

const store = createStore(postReducer);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector("#root")
);
