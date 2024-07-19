export const Style = {
  FlowChart: {
    height: "92vh",
    "@media screen (max-width:1600px)" : {
      height: "100vh !important",
    },
    "@media (max-width: 780px)": {
      // Define styles for large (lg) screens (adjust the breakpoint as needed)
      zoom: "0.3 !important",
    },
  },

  FlowChart_one: {
    height: "115vh",
    "@media (max-width: 780px)": {
      // Define styles for large (lg) screens (adjust the breakpoint as needed)
      zoom: "0.2 !important",
    },
  },

  typography: {
    fontFamily: "Inter, sans-serif",
  },
};
