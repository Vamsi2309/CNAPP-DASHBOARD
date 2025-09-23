import React from "react";
import { Box, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { RootState, useDispatch, useSelector } from "@/store";
import { setSearchTerm } from "@/store/slice/dashBoardSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(
    (state: RootState) => state.dashboard.searchTerm
  );

  return (
    <Box className="flex flex-row justify-between items-center px-5 py-2.5 bg-white shadow-sm border-b border-gray-200">
      <Box className="flex flex-row items-center gap-2">
        <Typography className="text-base font-medium cursor-pointer">
          Home
        </Typography>
        <Typography className="text-base font-medium cursor-pointer"></Typography>
        <Typography className="text-base font-bold text-black cursor-pointer">
          Dashboard V2
        </Typography>
      </Box>

      <Box className="flex items-center bg-gray-100 rounded-[10px] px-2.5 py-1.5 min-w-[250px]">
        <SearchIcon className="text-gray-500 mr-1" />
        <input
          type="search"
          placeholder="Search widget"
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          className="border-0 outline-none bg-transparent flex-1 text-sm"
        />
      </Box>

      <Box className="flex flex-row items-center gap-2">
        <NotificationsNoneOutlinedIcon className="text-[28px] text-gray-500 cursor-pointer" />
        <AccountCircleIcon className="text-[32px] cursor-pointer" />
      </Box>
    </Box>
  );
};

export default NavBar;
