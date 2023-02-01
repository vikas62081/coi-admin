import App from "../../app/App";
import TenantManagement from "../../components/TenantManagement";
import IdentityMicroservice from "../../components/IdentityMicroservice";
import AuditlogMicroservice from "../../components/AuditlogMicroservice";
import FeatureManagementMicroservice from "../../components/FeatureManagementMicroservice";
import PermissionManagementMicroservice from "../../components/PermissionManagementMicroservice";
import ConfigurationMicroservice from "../../components/ConfigurationMicroservice";
import ErrorPage from "../../components/Error";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/permission-management-microservice",
    element: <PermissionManagementMicroservice />,
  },
  {
    path: "/tenant-management",
    element: <TenantManagement />,
  },
  {
    path: "/auditlog-microservice",
    element: <AuditlogMicroservice />,
  },
  {
    path: "/feature-management-microservice",
    element: <FeatureManagementMicroservice />,
  },
  {
    path: "/identity-microservice",
    element: <IdentityMicroservice />,
  },

  {
    path: "/configuration-microservice",
    element: <ConfigurationMicroservice />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routes;
