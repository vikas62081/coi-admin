import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import ListItem from "@mui/material/ListItem";
import { ListContainer } from "../navigation.styles";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useStyles } from "../navigation.styles";
import { Link } from "react-router-dom";
import { IListProps, SidebarItemProps } from "../../type";

export const SideBarItemReact = (props: SidebarItemProps) => {
  const [activeItem, setActiveItem] = useState(0);
  const classes = useStyles();

  const handleChange = (index: number) => {
    setActiveItem(index);
  };
  const content = (sideBarItem: IListProps, index: number) => {
    const itemContent = (
      <ListItem
        style={{ margin: "4px 0" }}
        button
        key={index}
        className={
          activeItem === index ? classes.selected : classes.notSelected
        }
        onClick={() => handleChange(index)}
      >
        <Tooltip title={sideBarItem?.title}>
          <ListItemIcon sx={{ minWidth: "48px" }}>
            {sideBarItem?.icon}
          </ListItemIcon>
        </Tooltip>
        <ListItemText primary={sideBarItem?.title} />
      </ListItem>
    );
    return sideBarItem?.to ? (
      <Link to={sideBarItem.to} className={classes.link} key={index}>
        {itemContent}
      </Link>
    ) : (
      itemContent
    );
  };
  return (
    <>
      <ListContainer data-testid="To-be-Active">
        {props?.sideBarItems?.map((sideBarItem: IListProps, index: number) =>
          content(sideBarItem, index),
        )}
      </ListContainer>
    </>
  );
};
