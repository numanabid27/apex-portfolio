
export const ISSUES_DATA = (highData: any, mediumData: any, lowData: any) => {
  return {
    tooltip: {
      trigger: "item",
      axisPointer: {
        type: "shadow",
      },
      borderColor: "transparent",
      formatter: function (params: any) {
        const { seriesName, value, color, name: month } = params;
        return `
        <div>
          <div><strong>${month}</strong></div>
          <div>
            <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color};"></span>
            ${seriesName}: ${value}
          </div>
        </div>`;
      },
    },
    legend: {
      show: false,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    ],
    yAxis: [
      {
        show: true,
        axisLabel: {
          show: false,
        },
        splitNumber: 3,
        type: "value",
      },
    ],
    series: [
      {
        name: "Email",
        type: "bar",
        stack: "Ad",
        emphasis: {
          focus: "series",
        },
        data: highData,
        color: ["#D92D20"],
      },
      {
        name: "Union Ads",
        type: "bar",
        stack: "Ad",
        emphasis: {
          focus: "series",
        },
        data: mediumData,
        color: ["#FB6514"],
      },
      {
        name: "Video Ads",
        type: "bar",
        stack: "Ad",
        emphasis: {
          focus: "series",
        },
        data: lowData,
        color: ["#12B76A"],
      },
    ],
  };
};


export const POLICIES_GPT =[
  {
    id: 1,
    label: "GPT",
  },
  {
    id: 2,
    label: "Co pilot",
  },
]