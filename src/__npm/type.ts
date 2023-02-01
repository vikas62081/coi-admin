import { AppBarProps } from "@mui/material";
import { ReactElement } from "react";
export interface IListProps {
  title: string;
  icon?: string | ReactElement;
  to?: string;
}
export type SideBarProps = {
  children?: any;
  checked?: boolean;
  sideBarItems?: IListProps[];
  company?: string;
  address?: string;
  phone?: string;
  email?: string;
  image?: string;
  topSpace?: boolean;
  isEnterpriseChild: boolean;
  activeIndex?: number;
  initialState?: boolean;
};

export type SidebarItemProps = {
  sideBarItems?: IListProps[] | undefined;
  activeIndex?: number | undefined;
};

//headers

export interface IHeaderProps extends AppBarProps {
  clientId?: string;
  userName?: string;
  image?: string;
  optionList?: IListProps[];
  menuList: IListProps[];
  onItemClick?: (item: IListProps) => void;
  onButtonClick?: (item: IListProps) => void;
}
