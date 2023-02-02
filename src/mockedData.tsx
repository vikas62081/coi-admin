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
  topSpace: false,
  sideBarItems: [
    {
      title: "Home",
      icon: <ListAltRoundedIcon />,
      to: "/",
    },
    {
      title: "Tenant Management",
      icon: <PeopleAltRoundedIcon />,
      to: "/tenant-management",
    },
    {
      title: "Identity Microservice",
      icon: <SpeedRoundedIcon />,
      to: "/identity-microservice",
    },
    {
      title: "Auditlog Microservice",
      icon: <LeaderboardRoundedIcon />,
      to: "/auditlog-microservice",
    },
    {
      title: "Permission Management Microservice",
      icon: <ViewQuiltRoundedIcon />,
      to: "/permission-management-microservice",
    },
    {
      title: "Feature Management Microservice",
      icon: <BookmarkRoundedIcon />,
      to: "/feature-management-microservice",
    },

    {
      title: "Configuration Microservice",
      icon: <FolderRoundedIcon />,
      to: "/configuration-microservice",
    },
  ],
};
