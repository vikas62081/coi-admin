import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";

const StyledToggleButton = styled(ToggleButton)(() => ({
  background: "#CBD5E1",
  color: "#304760",
  borderColor: "#304760",
  outlineWidth: "1px",
  outlineStyle: "solid",
  margin: "1px",
  "&:hover": {
    color: "#304760",
    backgroundColor: "#F2F5FA",
  },
  "&.Mui-selected": {
    color: "#0C2744",
    backgroundColor: "#FFFFFF",
  },
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "#0C2744",
    backgroundColor: "#FFFFFF",
  },
}));
const MyCoiToggleButton = ({
  options = [],
  active = options[0],
  onChange,
}: any) => {
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string,
  ) => {
    if (!newValue) return;
    onChange(newValue);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      style={{ marginBottom: 5 }}
      value={active}
      exclusive
      size="small"
      onChange={handleChange}
      aria-label="tabs"
    >
      {options?.map((option: string) => (
        <StyledToggleButton key={option} value={option}>
          {option}
        </StyledToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
export default MyCoiToggleButton;
