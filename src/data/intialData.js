export const initialDashboardData = {
  categories: [
    {
      id: "cnapp-dashboard",
      name: "CNAPP Dashboard",
      tab: "CSPM",
      widgets: [
        {
          id: "widget1",
          name: "Cloud Accounts",
          text: "Connected (2), Not Connected (2), Total 9659",
          isActive: true,
          chartType: "donut",
          chartData: [
            { name: "Not Connected", value: 2, fill: "#FFBB28" },
            { name: "Connected", value: 2, fill: "#497ba7ff" },
          ],
          totalValue: 2,
        },
        {
          id: "widget2",
          name: "Cloud Account Risk Assessment",
          text: "Failed (1689), Warning (681), Not available (36), Passed (7253)",
          isActive: true,
          chartType: "donut",
          chartData: [
            { name: "Failed", value: 1689, fill: "#FF0000" },
            { name: "Warning", value: 681, fill: "#FFA500" },
            { name: "Not available", value: 36, fill: "#808080" },
            { name: "Passed", value: 7253, fill: "#00FF00" },
          ],
          totalValue: 9659,
        },
      ],
    },

    {
      id: "cwpp-dashboard",
      name: "CWPP Dashboard",
      tab: "CWPP",
      widgets: [
        {
          id: "widget6",
          name: "Top 5 Namespace Specific Alerts",
          text: "Sample alert data for top 5 namespaces",
          isActive: true,
          chartType: "empty",
          emptyMessage: "No Graph data available!",
        },
        {
          id: "widget5",
          name: "Workload Alerts",
          text: "Critical (2), High (2), Warning (0)",
          isActive: true,
          chartType: "empty",
          emptyMessage: "No Graph data available!",
        },
      ],
    },
    {
      id: "registry-scan",
      name: "Registry Scan",
      tab: "Registry Scan",
      widgets: [
        {
          id: "widget7",
          name: "Image Risk Assessment",
          text: "1470 Total Vulnerabilities, Critical (9), High (150)",
          isActive: true,
          chartType: "horizontal-bar",
          chartData: [
            { name: "Critical", value: 9, fill: "#8B0000" },
            { name: "High", value: 150, fill: "#FF0000" },
            { name: "Modarate", value: 200, fill: "#FFA500" },
            { name: "Low", value: 300, fill: "#BDBDBD" },
          ],
          totalValue: 159,
        },
        {
          id: "image-security",
          name: "Image Security Issues",
          tab: "Image",
          isActive: true,
          chartType: "horizontal-bar",
          chartData: [
            { name: "Critical", value: 9, fill: "#FF0000" },
            { name: "High", value: 150, fill: "#FFA500" },
            { name: "Modarate", value: 200, fill: "green" },
            { name: "Low", value: 300, fill: "black" },
          ],
          totalValue: 159,
        },
      ],
    },
  ],
};
