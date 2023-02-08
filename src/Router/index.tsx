import { SideBarReact } from "empower-ui-react-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { sidebarData } from "../mockedData";
import routes from "../utils/routes";
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
