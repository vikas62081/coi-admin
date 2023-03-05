import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import MapIcon from "@mui/icons-material/Map";
import BadgeIcon from "@mui/icons-material/Badge";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";

export const sidebarData = {
  isEnterpriseChild: false,
  topSpace: false,
  sideBarItems: [
    {
      title: "Identity",
      icon: <FingerprintIcon />,
      to: "/identity-microservice",
    },
    {
      title: "Tenant",
      icon: <PeopleAltRoundedIcon />,
      to: "/tenant-management",
    },

    {
      title: "Auditlog",
      icon: <MapIcon />,
      to: "/auditlog-microservice",
    },

    {
      title: "Feature",
      icon: <FactCheckIcon />,
      to: "/feature-management-microservice",
    },
    {
      title: "Permission",
      icon: <BadgeIcon />,
      to: "/permission-management-microservice",
    },

    {
      title: "Configuration",
      icon: <DisplaySettingsIcon />,
      to: "/configuration-microservice",
    },
  ],
};
