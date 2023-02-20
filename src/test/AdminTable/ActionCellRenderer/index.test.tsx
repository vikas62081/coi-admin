import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import ActionCellRenderer from "../../../components/AdminTable/ActionCellRenderer";

jest.mock("@mui/material", () => ({
  Button: () => <button data-testid="button">Button</button>,
  Grid: ({ children }: any) => <div data-testid="grid">{children}</div>,
  IconButton: () => <button data-testid="icon-button">Icon Button</button>,
  ListItemIcon: () => <div data-testid="list-item-icon"></div>,
  ListItemText: () => <div data-testid="list-item-text"></div>,
  Menu: ({ children }: any) => <div data-testid="menu">{children}</div>,
  MenuItem: () => <div data-testid="menu-item"></div>,
}));

jest.mock("@mui/icons-material/MoreVert", () => "MoreVertIcon");
jest.mock("@mui/icons-material/Edit", () => "EditIcon");
jest.mock("@mui/icons-material/Delete", () => "DeleteIcon");

const data = { id: 1 };
const api = {
  addEventListener: jest.fn(),
  getEditingCells: jest.fn(),
  refreshCells: jest.fn(),
  removeEventListener: jest.fn(),
  startEditingCell: jest.fn(),
  stopEditing: jest.fn(),
  updateRowData: jest.fn(),
};

describe("ActionCellRenderer", () => {
  it("renders correctly when not editing", () => {
    const { getByTestId } = render(
      <ActionCellRenderer node={data} api={api} data={data} />,
    );

    expect(getByTestId("icon-button")).toBeInTheDocument();
    expect(getByTestId("menu")).not.toBeInTheDocument();
    expect(getByTestId("grid")).not.toBeInTheDocument();
  });

  it("renders correctly when editing", () => {
    const { getByTestId } = render(
      <ActionCellRenderer node={data} api={api} data={data} editing disabled />,
    );

    expect(getByTestId("grid")).toBeInTheDocument();
    expect(getByTestId("icon-button")).not.toBeInTheDocument();
    expect(getByTestId("menu")).not.toBeInTheDocument();
  });

  it("opens and closes the menu", () => {
    const { getByTestId } = render(
      <ActionCellRenderer node={data} api={api} data={data} />,
    );

    fireEvent.click(getByTestId("icon-button"));
    expect(getByTestId("menu")).toBeInTheDocument();

    // fireEvent.click(getByTestId('icon-button'));
    // expect(getBy
  });
});
