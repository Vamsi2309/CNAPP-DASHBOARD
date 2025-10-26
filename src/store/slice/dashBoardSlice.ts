import { createSlice } from "@reduxjs/toolkit";
import { initialDashboardData } from "../../data/intialData";
import { v4 as uuidv4 } from "uuid";

interface DashboardState {
  categories: typeof initialDashboardData.categories;
  selectedTab: string;
  searchTerm: string;
}

const initialState: DashboardState = {
  categories: initialDashboardData.categories,
  selectedTab: "CSPM",
  searchTerm: "",
};

export const DashBoardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widgetName, widgetText } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);

      if (category) {
        const newWidget = {
          id: uuidv4(),
          name: widgetName,
          text: widgetText,
          isActive: true,
          chartType: "empty",
          emptyMessage: "No Graph data available!",
          chartData: [],
          totalValue: 0,
        };
        category.widgets.push(newWidget);
      }
    },

    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);

      if (category) {
        category.widgets = category.widgets.filter(
          (widget) => widget.id !== widgetId
        ) as typeof category.widgets;
      }
    },

    setSelectedTab: (state, action) => {
      state.selectedTab = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSelectedTab, addWidget, setSearchTerm, removeWidget } =
  DashBoardSlice.actions;

export default DashBoardSlice.reducer;
