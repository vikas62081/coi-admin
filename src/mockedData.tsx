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

export const sidebarData = {
  isEnterpriseChild: true,
  company: "Company Name",
  address: "2642 Ross Street #1138c Chicago, IL ",
  email: "morehumanthanhuman.com",
  phone: "708-252-0235",
  activeIndex: 2,
  image: "",
  sideBarItems: [
    {
      title: "Home",
      icon: <ListAltRoundedIcon />,
      to: "/",
    },
    {
      title: "Permission Management Microservice",
      icon: <ListAltRoundedIcon />,
      to: "/permission-management-microservice",
    },
    {
      title: "Tenant Management",
      icon: <ListAltRoundedIcon />,
      to: "/tenant-management",
    },
    {
      title: "Auditlog Microservice",
      icon: <ListAltRoundedIcon />,
      to: "/auditlog-microservice",
    },
    {
      title: "Feature Management Microservice",
      icon: <ListAltRoundedIcon />,
      to: "/feature-management-microservice",
    },
    {
      title: "Identity Microservice",
      icon: <ListAltRoundedIcon />,
      to: "/identity-microservice",
    },

    {
      title: "Configuration Microservice",
      icon: <ListAltRoundedIcon />,
      to: "/configuration-microservice",
    },
  ],
};

export const headerData = {
  clientId: "Kim",
  userName: "TestUser",

  menuList: [
    {
      title: "Account Settings",
      icon: <SettingsIcon />,
    },
    {
      title: "Change Password",
      icon: <LockIcon />,
    },
    {
      title: "Log out",
      icon: <LogoutOutlinedIcon />,
    },
  ],
  optionList: [
    {
      title: "Sign Out",
      icon: "",
      to: "/to",
    },
  ],
};
