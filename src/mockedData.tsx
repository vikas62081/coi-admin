import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LockIcon from "@mui/icons-material/Lock";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import MapIcon from "@mui/icons-material/Map";
import BadgeIcon from "@mui/icons-material/Badge";

export const sidebarData = {
  isEnterpriseChild: true,
  company: "Company Name",
  address: "2642 Ross Street #1138c Chicago, IL ",
  email: "morehumanthanhuman.com",
  phone: "708-252-0235",
  activeIndex: 2,
  image: "",
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
      icon: <FolderRoundedIcon />,
      to: "/configuration-microservice",
    },
  ],
};
