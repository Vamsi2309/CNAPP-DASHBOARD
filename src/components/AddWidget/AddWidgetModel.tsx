import React, { useEffect, useState } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  Tabs,
  Tab,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Divider,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";
import { dispatch, RootState } from "@/store";
import { Category, Widget } from "../Types/types";
import { addWidget, removeWidget } from "@/store/slice/dashBoardSlice";

interface AddWidgetModelProps {
  onClose: () => void;
}

export default function AddWidgetModel({ onClose }: AddWidgetModelProps) {
  const categories = useSelector(
    (state: RootState) => state.dashboard.categories
  );

  const newWidgetData = {
    catogaryId: "",
    widgetName: "",
    WidgetText: "",
  };

  const [newWidget, setNewWidget] = useState(newWidgetData);

  const tabs = ["CSPM", "CWPP", "Registry Scan"];
  const [activeTab, setActiveTab] = useState("CSPM");

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const handleAddWidget = () => {
    dispatch(
      addWidget({
        categoryId: newWidget.catogaryId,
        widgetName: newWidget.widgetName,
        widgetText: newWidget.WidgetText,
      })
    );
  };

  useEffect(() => {
    const selectedCat = categories.find(
      (cat: Category) => cat.tab === activeTab
    );
    if (selectedCat) {
      setNewWidget((prev) => ({ ...prev, catogaryId: selectedCat.id }));
    }
  }, [activeTab, categories]);

  return (
    <Box>
      <Box className="flex justify-between bg-[#0A174E] w-[700px]">
        <DialogTitle className="text-white text-[16px]">Add widget</DialogTitle>
        <Button sx={{ color: "white" }} onClick={onClose}>
          X
        </Button>
      </Box>

      <Box sx={{ px: 3, pt: 1 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Personalize your dashboard by adding the following widgets
        </Typography>

        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="primary"
          sx={{ mb: 2 }}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab}
              value={tab}
              label={tab}
              sx={{
                textTransform: "none",
                fontWeight: activeTab === tab ? 600 : 400,
              }}
            />
          ))}
        </Tabs>

        <Box>
          {categories
            .filter((cat: Category) => cat.tab === activeTab)
            .flatMap((cat: Category) =>
              cat.widgets.map((widget: Widget) => (
                <Box
                  key={widget.id}
                  className="border border-[#e0e0e0] rounded-[6px] px-2 py-1 mb-1"
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={widget.isActive}
                        onChange={(e) => {
                          if (!e.target.checked) {
                            dispatch(
                              removeWidget({
                                categoryId: cat.id,
                                widgetId: widget.id,
                              })
                            );
                          }
                        }}
                      />
                    }
                    label={widget.name}
                    sx={{ "& .MuiFormControlLabel-label": { fontWeight: 500 } }}
                  />
                </Box>
              ))
            )}
        </Box>
      </Box>

      <Divider sx={{ mt: 2 }} />

      <Box sx={{ padding: "15px 15px" }}>
        <Typography
          variant="h4"
          className="!font-bold !text-[16px] !text-[#333333] text-left mt-2 mb-1"
        >
          {`Add Custom Widget to ${activeTab}`}
        </Typography>

        <Box className="flex flex-col items-center gap-2">
          <TextField
            variant="outlined"
            placeholder="Enter category ID"
            sx={{ width: "100%" }}
            value={
              categories.find((cat: Category) => cat.tab === activeTab)?.name ||
              ""
            }
            onChange={(e) =>
              setNewWidget({
                ...newWidget,
                catogaryId: e.target.value,
              })
            }
          />

          <TextField
            variant="outlined"
            placeholder="Widget Name"
            sx={{ width: "100%" }}
            value={newWidget.widgetName}
            onChange={(e) =>
              setNewWidget({ ...newWidget, widgetName: e.target.value })
            }
          />

          <TextField
            variant="outlined"
            placeholder="Widget Text"
            sx={{ width: "100%" }}
            value={newWidget.WidgetText}
            onChange={(e) =>
              setNewWidget({ ...newWidget, WidgetText: e.target.value })
            }
          />
          <Box sx={{ width: "100%", paddingLeft: "30px" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddWidget}
              sx={{ width: "30%" }}
            >
              Add Widget
            </Button>
          </Box>
        </Box>
      </Box>

      <Box className="flex justify-end gap-2 p-2">
        <Button variant="outlined" size="small">
          Cancel
        </Button>
        <Button variant="contained" size="small">
          Confirm
        </Button>
      </Box>
    </Box>
  );
}
