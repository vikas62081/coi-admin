import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const MyCoiToggleButton = ({
  options = [],
  active = options[0],
  onChange,
}: any) => {
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string,
  ) => {
    onChange(newValue);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      style={{ background: "#fff", marginBottom: 5 }}
      value={active}
      exclusive
      size="small"
      onChange={handleChange}
      aria-label="tabs"
    >
      {options?.map((option: string) => (
        <ToggleButton value={option}>{option}</ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
export default MyCoiToggleButton;
