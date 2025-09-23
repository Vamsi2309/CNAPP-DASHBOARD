import React, { useState } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import {
  Box,
  Button,
  Drawer,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddWidgetModel from "../AddWidget/AddWidgetModel";

function CnaDashboard() {
  const [WidgetPopUp, setWidgetPopUp] = useState(false);

  const toogleDrawer = () => {
    setWidgetPopUp((prev) => !prev);
  };
  const closeOn = () => {
    setWidgetPopUp((prev) => !prev);
  };

  return (
    <>
      <Box className="flex justify-between p-2.5">
        <Typography className="text-[16px] !font-bold text-[#333]">
          CNAPP Dashboard
        </Typography>
        <Box className="flex flex-row items-start gap-1.5 bg-[#f1f4f9] px-[15px] py-[10px]">
          <Button
            variant="outlined"
            onClick={() => toogleDrawer()}
            endIcon={<AddIcon />}
            className="rounded-[10px] normal-case !capitalize text-[14px] font-medium px-[14px] py-[6px] border border-[#e0e0e0] !text-[#333] bg-white hover:border-[#bdbdbd] hover:bg-[#fafafa]"
          >
            Add Widget
          </Button>
          <Button
            variant="outlined"
            className="min-w-[40px] rounded-[10px] border border-[#e0e0e0] bg-white hover:border-[#bdbdbd] hover:bg-[#fafafa]"
          >
            <AutorenewIcon sx={{ fontSize: 20, color: "#333" }} />
          </Button>

          <Button
            variant="outlined"
            className="min-w-[40px] rounded-[10px] border border-[#e0e0e0] bg-white hover:border-[#bdbdbd] hover:bg-[#fafafa]"
          >
            <MoreVertOutlinedIcon className="text-[20px] text-[#333]" />
          </Button>
          <FormControl
            sx={{
              minWidth: 160,
              borderRadius: "10px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: 600,
                color: "#1a237e",
              },
            }}
            size="small"
          >
            <Select defaultValue="2">
              <MenuItem value="2">Past 2 days</MenuItem>
              <MenuItem value="4">Past 4 days</MenuItem>
              <MenuItem value="6">Past 6 days</MenuItem>
              <MenuItem value="7">Past 7 days</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {WidgetPopUp && (
        <Drawer anchor="right" open={WidgetPopUp} onClose={() => setWidgetPopUp(false)}>
          <AddWidgetModel onClose={closeOn} />
        </Drawer>
      )}
    </>
  );
}
export default CnaDashboard;
