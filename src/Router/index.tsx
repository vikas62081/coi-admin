import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { sidebarData } from "../mockedData";
import routes from "../utils/routes";
import { SideBarReact } from "../__npm/NavigationSideBar/SideBar/SideBarReact";
const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <SideBarReact {...sidebarData}>
          <Routes>
            {routes.map((d) => (
              <Route {...d} />
            ))}
          </Routes>
        </SideBarReact>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
