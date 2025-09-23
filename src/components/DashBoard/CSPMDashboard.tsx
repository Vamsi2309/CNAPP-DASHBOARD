import React, { useState } from "react";
import { Box, Button, Drawer, Typography } from "@mui/material";
import { Category } from "../Types/types";
import { Doughnut } from "react-chartjs-2";
import AddIcon from "@mui/icons-material/Add";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import AddWidgetModel from "../AddWidget/AddWidgetModel";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface CSPMDashboardProps {
  data: Category;
}

function CSPMDashboard({ data }: CSPMDashboardProps) {
  const [WidgetPopUp, setWidgetPopUp] = useState(false);

  const toogleDrawer = () => {
    setWidgetPopUp((prev) => !prev);
  };

  const options = {
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          boxWidth: 20,
          padding: 15,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <>
      <Box p={2}>
        <Typography
          variant="h6"
          className="!font-bold !text-[#333333] capitalize"
        >
          CSPM Executive Dashboard
        </Typography>

        <Box display="flex" gap={2} flexWrap="wrap">
          {data.widgets.map((widget) => {
            if (widget.chartType === "donut" && widget.chartData) {
              const doughnutData = {
                labels: widget.chartData.map((c) => `${c.name} (${c.value})`),
                datasets: [
                  {
                    data: widget.chartData.map((c) => c.value),
                    backgroundColor: widget.chartData.map((c) => c.fill),
                    hoverBackgroundColor: widget.chartData.map((c) => c.fill),
                    borderWidth: 1,
                  },
                ],
              };

              return (
                <Box
                  key={widget.id}
                  className="flex-1 min-w-[300px] p-2 border border-[#dddddd] rounded-[10px] shadow-sm bg-white"
                >
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {widget.name}
                  </Typography>
                  <Box height={220}>
                    <Doughnut data={doughnutData} options={options} />
                  </Box>
                </Box>
              );
            }
            return null;
          })}

          <Box className="flex-1 min-w-[300px] p-2 border-2 border-[#cccccc] rounded-[10px] shadow-sm flex items-center justify-center bg-white">
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={() => toogleDrawer()}
              className="rounded-[10px] !normal-case text-[14px] font-medium px-[14px] py-[6px] border !border-[#e0e0e0] !text-[#333333] bg-white !hover:border-[#bdbdbd] !hover:bg-[#fafafa]"
            >
              Add Widget
            </Button>
          </Box>
        </Box>
      </Box>

      {WidgetPopUp && (
        <Drawer anchor="right" open={WidgetPopUp} onClose={toogleDrawer}>
          <AddWidgetModel onClose={toogleDrawer} />
        </Drawer>
      )}
    </>
  );
}

export default CSPMDashboard;
