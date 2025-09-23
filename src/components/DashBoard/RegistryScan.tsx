import React, { useState } from "react";
import { Box, Typography, Paper, Button, Grid, Drawer } from "@mui/material";
import { Category } from "../Types/types";
import AddIcon from "@mui/icons-material/Add";
import AddWidgetModel from "../AddWidget/AddWidgetModel";

interface CSPMDashboardProps {
  data: Category;
}

interface ChartDatum {
  name: string;
  value: number;
  fill: string;
}

function RegistryScan({ data }: CSPMDashboardProps) {
  const [WidgetPopUp, setWidgetPopUp] = useState(false);

  const toogleDrawer = () => {
    setWidgetPopUp((prev) => !prev);
  };

  if (!data?.widgets || data.widgets.length === 0) {
    return <Box>No data available</Box>;
  }

  const riskWidget = data.widgets.find((widget) => widget.id === "widget7");
  const securityWidget = data.widgets.find(
    (widget) => widget.id === "image-security"
  );

  const renderSegmentedProgressBar = (
    chartData: ChartDatum[],
    totalText: string
  ) => {
    const total = chartData.reduce((sum, item) => sum + item.value, 0);

    return (
      <Box sx={{ mt: 2 }}>
        <Typography
          variant="body2"
          className="!text-[14px] !text-[#666666] !font-bold mb-2"
        >
          {totalText}
        </Typography>

        <Box className="w-full h-[25px] bg-[#f0f0f0] rounded-[8px] overflow-hidden flex mb-2">
          {chartData.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: `${(item.value / total) * 100}%`,
                height: "100%",
                backgroundColor: item.fill,
                borderRight:
                  index < chartData.length - 1 ? "2px solid white" : "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.value > 0 && (
                <Typography
                  variant="body2"
                  className="text-[10px] font-bold text-white [text-shadow:1px_1px_1px_rgba(0,0,0,0.5)]"
                >
                  {item.value}
                </Typography>
              )}
            </Box>
          ))}
        </Box>

        <Grid container spacing={1} sx={{ mt: 2 }}>
          {chartData.map((item, index) => (
            <Grid size={6} key={index}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Box
                  sx={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: item.fill,
                    borderRadius: "50%",
                    border: "1px solid #999",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  {item.name} ({item.value})
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  return (
    <>
      <Box sx={{ p: 3 }}>
        <Typography
          variant="h6"
          className="!font-bold !text-[#333333] capitalize"
        >
          {data.name}
        </Typography>

        <Grid container spacing={3}>
          {riskWidget && (
            <Grid size={4}>
              <Paper
                elevation={3}
                className="p-3 rounded-[12px] border-2 border-[#e0e0e0] bg-[#fafafa] h-full"
              >
                <Typography
                  variant="h6"
                  className="!font-bold !text-[16px] !text-[#333333] mb-2"
                >
                  {riskWidget.name}
                </Typography>
                {riskWidget.chartData &&
                  renderSegmentedProgressBar(
                    riskWidget.chartData,
                    "1470 total vulnerabilities"
                  )}
              </Paper>
            </Grid>
          )}

          {securityWidget && (
            <Grid size={4}>
              <Paper
                elevation={3}
                className="p-3 rounded-[12px] border-2 border-[#e0e0e0] bg-[#fafafa] h-full"
              >
                <Typography
                  variant="h6"
                  className="!font-bold !text-[16px] !text-[#333333] mb-2"
                >
                  {securityWidget.name}
                </Typography>
                {securityWidget.chartData &&
                  renderSegmentedProgressBar(
                    securityWidget.chartData,
                    "2 total issues"
                  )}
              </Paper>
            </Grid>
          )}

          <Grid size={4}>
            <Paper
              elevation={2}
              className="p-3 rounded-[12px] bg-white h-full flex items-center justify-center"
            >
              <Button
                variant="outlined"
                onClick={() => toogleDrawer()}
                startIcon={<AddIcon />}
                className="rounded-[10px] !normal-case text-[14px] font-medium px-[14px] py-[6px] border !border-[#e0e0e0] !text-[#333333] bg-white !hover:border-[#bdbdbd] !hover:bg-[#fafafa]"
              >
                Add Widget
              </Button>
            </Paper>
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

export default RegistryScan;
