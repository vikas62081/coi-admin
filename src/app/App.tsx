import { useState } from "react";
import "./App.css";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import AdminTable from "../components/AdminTable/adminTable";

function App() {
  return (
    <div className="App">
      <AdminTable />
    </div>
  );
}

export default App;
