import React from "react";
import CnaDashboard from "./CNAapp";
import CSPMDashboard from "./CSPMDashboard";
import CWPPDashboard from "./CWPPDashboard";
import RegistryScan from "./RegistryScan";
import { Box } from "@mui/material";
import { RootState, useSelector } from "@/store";
import { Category } from "../Types/types";

function DashBoard() {
  const categories = useSelector(
    (state: RootState) => state.dashboard.categories
  );
  const searchValue = useSelector(
    (state: RootState) => state.dashboard.searchTerm
  );

  const filteredCategories = categories
    .map((cat: Category) => ({
      ...cat,
      widgets: cat.widgets.filter((w) =>
        w.name.toLowerCase().includes(searchValue.toLowerCase())
      ),
    }))
    .filter((cat: Category) => cat.widgets.length > 0 || searchValue === "");

  return (
    <Box className="bg-[#f1f4f9]">
      <CnaDashboard />

      {filteredCategories.map((cat: Category) => {
        if (cat.id === "cnapp-dashboard") {
          return <CSPMDashboard key={cat.id} data={cat} />;
        }
        if (cat.id === "cwpp-dashboard") {
          return <CWPPDashboard key={cat.id} data={cat} />;
        }
        if (cat.id === "registry-scan") {
          return <RegistryScan key={cat.id} data={cat} />;
        }
        return null;
      })}
    </Box>
  );
}
export default DashBoard;
