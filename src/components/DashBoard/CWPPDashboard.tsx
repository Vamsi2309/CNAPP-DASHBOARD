/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Box, Typography, Grid, Button, Drawer } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Category } from "../Types/types";
import AddWidgetModel from "../AddWidget/AddWidgetModel";

interface CWPPDashboardProps {
  data: Category;
}

function CWPPDashboard({ data }: CWPPDashboardProps) {
  const [WidgetPopUp, setWidgetPopUp] = useState(false);

  const toogleDrawer = () => {
    setWidgetPopUp((prev) => !prev);
  };

  return (
    <>
      <Box className="cspmdashboard" sx={{ padding: 3 }}>
        <Typography
          variant="h6"
          className="!font-bold !text-[#333333] capitalize"
        >
          {data.name}
        </Typography>
        
        <Grid container spacing={3}>
          {data.widgets.map((widget) => (
            <Grid size={{ lg: 4, xs: 6, md: 8 }} key={widget.id}>
              <Box className="bg-white rounded-[10px] shadow-sm p-2 flex flex-col h-full">
                <Typography
                  className="chartTitle"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    fontSize: "16px",
                  }}
                >
                  {widget.name}
                </Typography>

                {widget.chartType === "empty" ? (
                  <Box className="flex flex-col items-center justify-center h-[100px] text-[#6B7280]">
                    <img
                      src="/nochart.png"
                      alt="No chart"
                      style={{ height: "60px" }}
                    />
                    <Typography
                      className="noGraphData"
                      sx={{ mt: 1, fontSize: "12px" }}
                    >
                      {widget.emptyMessage || "No Graph data available!"}
                    </Typography>
                  </Box>
                ) : (
                  <Typography>
                    Graph for {widget.name} coming soon...
                  </Typography>
                )}
              </Box>
            </Grid>
          ))}

          <Grid size={{ lg: 4, xs: 6, md: 8 }}>
            <Box className="bg-white rounded-[10px] shadow-sm flex items-center justify-center cursor-pointer p-2 h-full">
              <Button
                variant="outlined"
                onClick={() => toogleDrawer()}
                startIcon={<AddIcon />}
                className="rounded-[10px] !normal-case text-[14px] font-medium px-[14px] py-[6px] border !border-[#e0e0e0] !text-[#333333] bg-white !hover:border-[#bdbdbd] !hover:bg-[#fafafa]"
              >
                Add Widget
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {WidgetPopUp && (
        <Drawer anchor="right" open={WidgetPopUp} onClose={toogleDrawer}>
          <AddWidgetModel onClose={toogleDrawer} />
        </Drawer>
      )}
    </>
  );
}

export default CWPPDashboard;
