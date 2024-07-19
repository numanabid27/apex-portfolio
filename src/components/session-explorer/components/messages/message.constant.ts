import * as echarts from "echarts";
import { USER_1, USER_2, USER_3 } from "../sessions/session.constant";
import code from "@/common/assets/images/code.svg";
import coin from "@/common/assets/images/coins.svg";
import bag from "@/common/assets/images/briefcase-business.svg";
import shield from "@/common/assets/images/shield-check.svg";
import scale from "@/common/assets/images/scale.svg";
import scrollText from "@/common/assets/images/scroll-text.svg";
import pie from "@/common/assets/images/pie-chart.svg";
import flag from "@/common/assets/images/flag.svg";
import land from "@/common/assets/images/land-plot.svg";

export const TOTAL_SESSIONS_CHART = {
  height: 50,
  width: 100,
  tooltip: {
    trigger: "axis",
    show: false,
    axisPointer: {
      show: false,
      type: "cross",
      label: {
        backgroundColor: "#FEF3F2",
      },
    },
  },
  legend: {
    show: false,
    data: ["Email"],
  },
  toolbox: {
    show: false,
  },
  grid: {
    show: false,
  },
  xAxis: [
    {
      show: false,
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  ],
  yAxis: [
    {
      show: false,
      type: "value",
    },
  ],
  series: [
    {
      name: "Union Ads",
      type: "line",
      cursor: "default",
      stack: "Total",
      data: [20, 10, 13, 18, 11, 8, 0],
      color: ["#12B76A"],
      gradientColor: ["#65DFA2"],
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#65DFA2",
          },
          {
            offset: 1,
            color: "#fef9f86e",
          },
        ]),
      },
      step: false,
      smooth: true,
      showSymbol: false,
    },
  ],
};

export const SESSION_USER_CHART = {
  height: 90,
  tooltip: {
    trigger: "axis",
    show: true,
    axisPointer: {
      show: false,
      type: "cross",
      label: {
        backgroundColor: "#DAEFFF",
        color: "#000000",
        fontWeight: "550",
      },
    },
  },
  legend: {
    show: false,
    data: ["Session over time, Active User"],
  },
  toolbox: {
    show: false,
  },
  grid: {
    show: false,
  },
  xAxis: [
    {
      show: true,
      type: "category",
      boundaryGap: false,
      data: ["1", "4", "8", "12", "16", "20", "24", "28"],
    },
  ],
  yAxis: [
    {
      show: true,
      axisLabel: {
        show: false,
      },
      splitNumber: 3,
    },
  ],
  series: [
    {
      name: "Session over time, Active User",
      type: "line",
      stack: "Total",
      data: [10, 10, 23, 28, 11, 40, 20, 22, 21, 24, 26, 28, 32, 38],
      color: ["#1570EF"],
      gradientColor: ["#DAEFFF"],
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#DAEFFF",
          },
          {
            offset: 1,
            color: "#F7FBFF",
          },
        ]),
      },
      step: false,
      smooth: false,
      showSymbol: false,
    },
  ],
};

export const MESSAGE_DATA = [
  {
    id: 1,
    flag: flag,
    title: "Learn AWS",
    mails: "cindy@email.com",
    lastUpdate: "Apr 24, 2024 10:46 PM",
    interface: "Apex Chat",
    engineType: "Google Gemini",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: [
      {
        id: 1,
        title: "Code",
        codes: true,
        img: code,
      },
    ],

    violation: "12",
    violationCat: "ChatGPT",
  },
  {
    id: 2,

    title: "JIRA ticket",
    mails: "james@email.com",
    lastUpdate: "Apr 12, 2024 09:21 PM",
    interface: "Apex Chat",
    engineType: "OpenAI GPT4",
    context: "repo/filepath.py",
    sessionId: "",
    active: "Active",
    topics: [
      {
        id: 1,
        title: "Finance",
        codes: false,
        img: coin,
      },
      {
        id: 2,
        title: "Hiring",
        codes: false,
        img: bag,
      },
    ],

    violation: "8",
    violationCat: "Bard",
  },
  {
    id: 3,
    flag: flag,
    title: "Python",
    mails: "george@email.com",
    lastUpdate: "Apr 12, 2024 07:42 AM",
    interface: "Github Copilot",
    engineType: "OpenAI Codex",
    context: "repo/filepath.py",
    sessionId: "",
    active: "Active",
    topics: [
      {
        id: 1,
        title: "Code",
        img: code,
      },
      {
        id: 2,
        title: "Security",
        img: shield,
      },
    ],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 4,
    flag: flag,
    title: "Write email",
    mails: "barbara@email.com",
    lastUpdate: "Apr 11, 2024 8:30 AM",
    interface: "365 Copilot",
    engineType: "365 Copilot",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: [
      {
        id: 1,
        title: "Contracts & Agreements",
        img: scrollText,
      },
      {
        id: 2,
        title: "Legal",
        img: scale,
      },
    ],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 5,
    flag: flag,
    title: "Summarize Q4 strategy",
    mails: "john@email.com",
    lastUpdate: "Apr 10, 2024 11:45 AM",
    interface: "Apex Chat",
    engineType: "Claude Sonnet 3.5",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: [
      {
        id: 1,
        title: "Finance",
        img: coin,
      },
      {
        id: 2,
        title: "Strategy",
        img: land,
      },
    ],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 6,

    title: "Hi, how are you?",
    mails: "john@email.com",
    lastUpdate: "Aug 12, 2023 10:46 AM",
    interface: "Apex API",
    engineType: "OpenAI GPT3.5",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: [
      {
        id: 1,
        title: "Data analysis",
        img: pie,
      },
    ],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 7,
    flag: flag,
    title: "Script analysis",
    mails: "ben@email.com",
    lastUpdate: "Aug 12, 2023 10:46 AM",
    interface: "Apex Chat",
    engineType: "OpenAI GPT4",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: [
      {
        id: 1,
        title: "Code",
        img: code,
      },
      {
        id: 2,
        title: "Security",
        img: shield,
      },
    ],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 8,
    flag: flag,
    title: "Insights from file",
    mails: "rita@email.com",
    lastUpdate: "Aug 12, 2023 10:46 AM",
    interface: "365 Copilot",
    engineType: "365 Copilot",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: [
      {
        id: 1,
        title: "Contracts & Agreements",
        img: scrollText,
      },
      {
        id: 2,
        title: "Legal",
        img: scale,
      },
    ],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 9,
    flag: flag,
    title: "What does this API call do",
    mails: "sarah@email.com",
    lastUpdate: "Aug 12, 2023 10:46 AM",
    interface: "Apex Chat",
    engineType: "Claude",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: [
      {
        id: 1,
        title: "Code",
        img: code,
      },
      {
        id: 2,
        title: "Security",
        img: shield,
      },
    ],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 10,
    flag: flag,
    title: "Write a contract",
    mails: "li@email.com",
    lastUpdate: "Aug 12, 2023 10:46 AM",
    interface: "Glean",
    engineType: "Glean",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: [
      {
        id: 1,
        title: "Code",
        img: code,
      },
      {
        id: 2,
        title: "Finance",
        img: coin,
      },
    ],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 11,

    title: "Script analysis",
    mails: "ben@email.com",
    lastUpdate: "Aug 12, 2023 10:46 AM",
    interface: "Apex Chat",
    engineType: "OpenAI GPT4",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: [
      {
        id: 1,
        title: "Code",
        img: code,
      },
      {
        id: 2,
        title: "Finance",
        img: coin,
      },
      {
        id: 3,
        title: "Contracts & Agreements",
        img: scrollText,
      },
    ],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 12,
    flag: flag,
    title: "Script analysis",
    mails: "ben@email.com",
    lastUpdate: "Aug 12, 2023 10:46 AM",
    interface: "Apex Chat",
    engineType: "OpenAI GPT4",
    context: "repo/filepath.py",
    sessionId: "123456",
    active: "Active",
    topics: [
      {
        id: 1,
        title: "Code",
        img: code,
      },
      {
        id: 2,
        title: "Finance",
        img: coin,
      },
    ],

    violation: "6",
    violationCat: "OpenAI",
  },
];

export const SENTIMENT = [
  {
    id: 1,
    label: "Positive",
  },
  {
    id: 2,
    label: "Neutral",
  },
  {
    id: 3,
    label: "Negative",
  },
];

export const SEVERITY = [
  {
    id: 1,
    label: "Finance",
  },
  {
    id: 2,
    label: "Hiring",
  },
  {
    id: 3,
    label: "Marketing",
  },
  {
    id: 5,
    label: "Corporate Sabotage",
  },
  {
    id: 6,
    label: "Profanity",
  },
  {
    id: 7,
    label: "Legal",
  },
  {
    id: 8,
    label: "Security",
  },
  {
    id: 9,
    label: "Data analysis",
  },
  {
    id: 10,
    label: "Medical",
  },
  {
    id: 11,
    label: "Customer files",
  },
];

export const EQUALS = [
  {
    id: 1,
    label: "Equals",
  },
  {
    id: 2,
    label: "Does not equal",
  },
  {
    id: 3,
    label: "Contains",
  },
  {
    id: 4,
    label: "Does not contain",
  },
];

export const MESSAGES_GRAPH = [
  {
    id: 1,
    title: "John White",
    value: "9.8K",
    chart: USER_1,
  },
  {
    id: 2,
    title: "George Mayer",
    value: "4K",
    chart: USER_2,
  },
  {
    id: 3,
    title: "Cindy Sherman",
    value: "3.7K",
    chart: USER_1,
  },
  {
    id: 4,
    title: "Barbara Kruger",
    value: "3.6K",
    chart: USER_2,
  },
  {
    id: 5,
    title: "Michael Black",
    value: "3.1K",
    chart: USER_3,
  },
];

export const options = {
  tooltip: {
    trigger: "item",
    triggerOn: "mousemove",
  },
  series: [
    {
      type: "sankey",
      layout: "none",
      nodeAlign: "left",
      data: [
        {
          name: "ChatGPT 2,000",
          itemStyle: { color: "#039855" },
          emphasis: { itemStyle: { color: "#039855" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [50, 0],
          },
        },
        {
          name: "Github Copilot 2,000",
          itemStyle: { color: "#039855" },
          emphasis: { itemStyle: { color: "#039855" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [50, 0],
          },
        },
        {
          name: "Google Gemini 2,000",
          itemStyle: { color: "#039855" },
          emphasis: { itemStyle: { color: "#039855" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [50, 0],
          },
        },
        {
          name: "Strategy 1,000",
          itemStyle: { color: "#039855" },
          emphasis: { itemStyle: { color: "#039855" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [20, 0],
          },
        },
        {
          name: "Revenue 1,000",
          itemStyle: { color: "#039855" },
          emphasis: { itemStyle: { color: "#039855" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [20, 0],
          },
        },
        {
          name: "Legal 1,000",
          itemStyle: { color: "#039855" },
          emphasis: { itemStyle: { color: "#039855" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [20, 0],
          },
        },
        {
          name: "Healthcare 1,000",
          itemStyle: { color: "#039855" },
          emphasis: { itemStyle: { color: "#039855" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [20, 0],
          },
        },
        {
          name: "Positive 1,650",
          itemStyle: { color: "#039855" },
          emphasis: { itemStyle: { color: "#039855" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [20, 0],
          },
        },
        {
          name: "Negative 350",
          itemStyle: { color: "#A6F4C5" },
          emphasis: { itemStyle: { color: "#A6F4C5" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [20, 0],
          },
        },
      ],
      links: [
        {
          source: "ChatGPT 2,000",
          target: "Strategy 1,000",
          value: 1000,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "ChatGPT 2,000",
          target: "Legal 1,000",
          value: 1000,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "ChatGPT 2,000",
          target: "Revenue 1,000",
          value: 1000,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "Github Copilot 2,000",
          target: "Revenue 1,000",
          value: 1000,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "Google Gemini 2,000",
          target: "Healthcare 1,000",
          value: 1000,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "Strategy 1,000",
          target: "Positive 1,650",
          value: 1000,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#A6F4C5" },
                { offset: 1, color: "#30bf7cbf" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#A6F4C5" },
                    { offset: 1, color: "#039855" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "Revenue 1,000",
          target: "Positive 1,650",
          value: 1000,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#A6F4C5" },
                { offset: 1, color: "#30bf7cbf" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#A6F4C5" },
                    { offset: 1, color: "#039855" },
                  ],
                },
                opacity: 1,
              },
            },
          }
        },
        {
          source: "Legal 1,000",
          target: "Negative 350",
          value: 1000,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#a6f4c5c7" },
                { offset: 1, color: "#6ce9a678" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#6ce9a678" },
                    { offset: 1, color: "#a6f4c5c7" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "Healthcare 1,000",
          target: "Positive 1,650",
          value: 650,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#A6F4C5" },
                { offset: 1, color: "#30bf7cbf" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#A6F4C5" },
                    { offset: 1, color: "#039855" },
                  ],
                },
                opacity: 1,
              },
            },
          }
        },
        {
          source: "Healthcare 1,000",
          target: "Negative 350",
          value: 350,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#a6f4c5c7" },
                { offset: 1, color: "#6ce9a678" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#6ce9a678" },
                    { offset: 1, color: "#a6f4c5c7" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
      ],
      lineStyle: {
        color: "gradient",
        curveness: 0.5,
      },
      itemStyle: {
        borderWidth: 1,
      },
      label: {
        show: true,
        color: "#000",
        backgroundColor: "#fff",
        borderRadius: 2,
        padding: 3,
        position: "insideRight",
        fontSize: 12,
      },
      nodeWidth: 20,
      nodeGap: 25,
      layoutIterations: 2,
    },
  ],
};

export const HIRING = {
  tooltip: {
    trigger: "item",
    triggerOn: "mousemove",
  },
  series: [
    {
      type: "sankey",
      layout: "none",
      nodeAlign: "left",
      data: [
        {
          name: "Total prompts 2,000",
          itemStyle: { color: "#039855" },
          emphasis: { itemStyle: { color: "#039855" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [70, 0],
          },
        },
        {
          name: "R&D 1,000",
          itemStyle: { color: "#039855" },
          emphasis: { itemStyle: { color: "#039855" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [70, 0],
          },
        },
        {
          name: "Marketing 1,000",
          itemStyle: { color: "#039855" },
          emphasis: { itemStyle: { color: "#039855" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [20, 0],
          },
        },
        {
          name: "Hiring 1,000",
          itemStyle: { color: "#76cb98" },
          emphasis: { itemStyle: { color: "#76cb98" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [20, 0],
          },
        },
        {
          name: "Positive 1,650",
          itemStyle: { color: "#039855" },
          emphasis: { itemStyle: { color: "#039855" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [20, 0],
          },
        },
        {
          name: "Negative 350",
          itemStyle: { color: "#76cb98" },
          emphasis: { itemStyle: { color: "#76cb98" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [20, 0],
          },
        },
      ],
      links: [
        {
          source: "Total prompts 2,000",
          target: "R&D 1,000",
          value: 950,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },

        },
        {
          source: "Total prompts 2,000",
          target: "Marketing 1,000",
          value: 1100,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },

        },
        {
          source: "R&D 1,000",
          target: "Hiring 1,000",
          value: 400,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#6ce9a678" },
                { offset: 1, color: "#a6f4c5c7" },
                
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#a6f4c5c7" },
                    { offset: 1, color: "#6ce9a678" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "Marketing 1,000",
          target: "Hiring 1,000",
          value: 700,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },

        },
        {
          source: "Hiring 1,000",
          target: "Negative 350",
          value: 350,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#6ce9a678" },
                { offset: 1, color: "#a6f4c5c7" },
                
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#a6f4c5c7" },
                    { offset: 1, color: "#6ce9a678" },
                  ],
                },
                opacity: 1,
              },
            },
          },


        },
        {
          source: "Hiring 1,000",
          target: "Negative 350",
          value: 350,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#6ce9a678" },
                { offset: 1, color: "#a6f4c5c7" },
                
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#a6f4c5c7" },
                    { offset: 1, color: "#6ce9a678" },
                  ],
                },
                opacity: 1,
              },
            },
          },

        },
        {
          source: "Hiring 1,000",
          target: "Positive 1,650",
          value: 1000,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#A6F4C5" },
                { offset: 1, color: "#30bf7cbf" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#A6F4C5" },
                    { offset: 1, color: "#039855" },
                  ],
                },
                opacity: 1,
              },
            },
          },

        },

        {
          source: "Marketing 1,000",
          target: "Negative 350",
          value: 400,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#037c49a1" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#037c49a1" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "R&D 1,000",
          target: "Positive 1,650",
          value: 400,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#0398558c" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },


        },
        {
          source: "R&D 1,000",
          target: "Hiring 1,000",
          value: 150,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#037c49a1" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#037c49a1" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
      ],
      lineStyle: {
        color: "gradient",
        curveness: 0.5,
      },
      itemStyle: {
        borderWidth: 1,
      },
      label: {
        show: true,
        color: "#000",
        backgroundColor: "#fff",
        borderRadius: 2,
        padding: 3,
        position: "insideRight",
        fontSize: 12,
      },
      nodeWidth: 15,
      nodeGap: 110,
      layoutIterations: 2,
    },
  ],
};

export const MARKETING = {
  tooltip: {
    trigger: "item",
    triggerOn: "mousemove",
  },
  series: [
    {
      type: "sankey",
      layout: "none",
      nodeAlign: "left",
      data: [
        {
          name: "Total prompts 2,000",
          itemStyle: { color: "#039855" },
          emphasis: { itemStyle: { color: "#039855" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            opcaity: 0,
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [70, 0],
          },
        },
        {
          name: "R&D 1,000",
          itemStyle: { color: "#039855" },
          emphasis: { itemStyle: { color: "#039855" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [20, 0],
          },
        },
        {
          name: "Marketing 1,000",
          itemStyle: { color: "#039855" },
          emphasis: { itemStyle: { color: "#039855" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [20, 0],
          },
        },
        {
          name: "Code 1,000",
          itemStyle: { color: "#039855" },
          emphasis: { itemStyle: { color: "#039855" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [20, 0],
          },
        },
        {
          name: "Email 400",
          itemStyle: { color: "#039855" },
          emphasis: { itemStyle: { color: "#039855" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [20, 0],
          },
        },
        {
          name: "Legal 600",
          itemStyle: { color: "#039855" },
          emphasis: { itemStyle: { color: "#039855" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [20, 0],
          },
        },
        {
          name: "Positive 1,650",
          itemStyle: { color: "#039855" },
          emphasis: { itemStyle: { color: "#039855" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [20, 0],
          },
        },
        {
          name: "Negative 350",
          itemStyle: { color: "#A6F4C5" },
          emphasis: { itemStyle: { color: "#A6F4C5" } },
          label: {
            show: true,
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 6,
            position: "insideRight",
            offset: [20, 0],
          },
        },
      ],
      links: [
        {
          source: "Total prompts 2,000",
          target: "R&D 1,000",
          value: 1800,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "Total prompts 2,000",
          target: "Marketing 1,000",
          value: 1800,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "R&D 1,000",
          target: "Code 1,000",
          value: 1000,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "R&D 1,000",
          target: "Email 400",
          value: 400,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "R&D 1,000",
          target: "Legal 600",
          value: 600,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "Marketing 1,000",
          target: "Code 1,000",
          value: 1000,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#a6f4c5c7" },
                { offset: 1, color: "#6ce9a678" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#6ce9a678" },
                    { offset: 1, color: "#a6f4c5c7" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "Marketing 1,000",
          target: "Email 400",
          value: 400,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "Marketing 1,000",
          target: "Legal 600",
          value: 600,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "Code 1,000",
          target: "Positive 1650",
          value: 1650,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "Code 1000",
          target: "Negative 350",
          value: 350,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#a6f4c5c7" },
                { offset: 1, color: "#6ce9a678" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#6ce9a678" },
                    { offset: 1, color: "#a6f4c5c7" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "Email 400",
          target: "Positive 1,650",
          value: 1250,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "Email 400",
          target: "Negative 350",
          value: 350,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "Legal 600",
          target: "Positive 1,650",
          value: 1250,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "Legal 600",
          target: "Negative 350",
          value: 350,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "Code 1,000",
          target: "Positive 1,650",
          value: 1000,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#30bf7cbf" },
                { offset: 1, color: "#A6F4C5" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#039855" },
                    { offset: 1, color: "#A6F4C5" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
        {
          source: "Code 1,000",
          target: "Negative 350",
          value: 700,
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#a6f4c5c7" },
                { offset: 1, color: "#6ce9a678" },
              ],
            },
            opacity: 1,
            emphasis: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#6ce9a678" },
                    { offset: 1, color: "#a6f4c5c7" },
                  ],
                },
                opacity: 1,
              },
            },
          },
        },
      ],
      lineStyle: {
        color: "gradient",
        curveness: 0.5,
      },
      label: {
        show: true,
        color: "#000",
        backgroundColor: "#fff",
        borderRadius: 2,
        padding: 3,
        position: "insideRight",
        fontSize: 12,
      },
      itemStyle: {
        borderWidth: 1,
      },
      nodeWidth: 20,
      nodeGap: 25,
      layoutIterations: 2,
    },
  ],
};
