import "./App.css";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import AdminTable from "../components/AdminTable/adminTable";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/identity-microservice");
  }, []);
  return <div className="App">{/* <AdminTable /> */}</div>;
}

export default App;
