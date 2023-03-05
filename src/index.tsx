import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import './services';
import reportWebVitals from "./reportWebVitals";
import ReduxProvider from "./redux/store/reduxProvider";

import AppRouter from "./Router";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ReduxProvider>
      <AppRouter />
    </ReduxProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
