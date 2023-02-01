import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import ReduxProvider from "./store/reduxProvider";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useRouteError,
} from "react-router-dom";
import { Link } from "react-router-dom";
import ErrorPage from "./components/Error";
import routes from "./utils/routes";
import { SideBarReact } from "./__npm/NavigationSideBar/SideBar/SideBarReact";
import { sidebarData } from "./mockedData";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ReduxProvider>
      <BrowserRouter>
        <SideBarReact {...sidebarData}>
          {/* <RouterProvider router={router} /> */}
          <Routes>
            {routes.map((d) => (
              <Route {...d} />
            ))}
          </Routes>
        </SideBarReact>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
