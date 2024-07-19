import * as echarts from "echarts";
import code from "@/common/assets/images/code.svg";
import coin from "@/common/assets/images/coins.svg";
import bag from "@/common/assets/images/briefcase-business.svg";
import shield from "@/common/assets/images/shield-check.svg";
import scale from "@/common/assets/images/scale.svg";
import scrollText from "@/common/assets/images/scroll-text.svg";
import pie from "@/common/assets/images/pie-chart.svg";
import flag from "@/common/assets/images/flag.svg";

export const USER_1 = {
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
  xAxis: {
    type: "category",
    boundaryGap: false,
    show: true,
    data: Array.from({ length: 20 }, (_, i) => i + 1),
    axisLabel: {
      formatter: function (value:any) {
        const visibleLabels = [1, 4, 8, 12, 16, 20, 24, 28];
        return visibleLabels.includes(Number(value)) ? value : '';
      },
    },
  },
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
      data: [
        1.5, 1.5, 1.5, 2, 2.5, 2.5, 2.5, 3, 2, 1.5, 1.5, 1.5, 3.7, 3.7, 2, 1.5, 1.5, 2, 2, 3
      ],
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
      smooth: false,
      showSymbol: false,
    },
  ],
};

export const USER_2 = {
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
      data: Array.from({ length: 20 }, (_, i) => i + 1),
      axisLabel: {
        formatter: function (value:any) {
          const visibleLabels = [1, 4, 8, 12, 16, 20, 24, 28];
          return visibleLabels.includes(Number(value)) ? value : '';
        },
      },
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
      data: [
        3.2, 3, 3, 3, 3.5, 2.5, 2.5, 2, 2, 1.5, 1.5, 1.5, 1.5, 1.5, 1.7, 1.9, 1.6, 1, 1, 1
      ],
      color: ["#F04438"],
      gradientColor: ["#f0443869"],
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#f0443869",
          },
          {
            offset: 1,
            color: "#f0443812",
          },
        ]),
      },
      step: false,
      smooth: false,
      showSymbol: false,
    },
  ],
};

export const USER_3 = {
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
      data: Array.from({ length: 20 }, (_, i) => i + 1),
      axisLabel: {
        formatter: function (value:any) {
          const visibleLabels = [1, 4, 8, 12, 16, 20, 24, 28];
          return visibleLabels.includes(Number(value)) ? value : '';
        },
      },
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
      data: [
        3,2,2,1.5,1.5,2,3.7,3.7,1.5,1.5,1.5,2,3,2.5,2.5,2.5,2,1.5,1.5,1.5
      ],
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
      smooth: false,
      showSymbol: false,
    },
  ],
};

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
  xAxis: {
    type: "category",
    boundaryGap: false,
    show: true,
    data: Array.from({ length: 30 }, (_, i) => i + 1),
    axisLabel: {
      formatter: function (value:any) {
        const visibleLabels = [1, 4, 8, 12, 16, 20, 24, 28];
        return visibleLabels.includes(Number(value)) ? value : '';
      },
    },
    axisLine: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      show: false,
    },
  },
  series: [
    {
      data: [
        1, 1.5, 1.5, 1.5, 1.5, 4, 5, 3, 2, 1.5, 1.5, 1.5, 7, 3, 2, 1.5, 1.5, 2, 2, 4, 8, 6, 4, 3,
        2, 1, 2, 2, 2.2, 2.5,
      ],
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
      type: "line",
      step: false,
      smooth: false,
      showSymbol: false,
    },
  ],
};



export const SESSION_EXPLORE_DATA = [
  {
    id: 1,
    title: "Content Strategy Development",
    mails:"cindy@email.com",
    lastUpdate:"Apr 24, 2024 10:46 PM",
    interface:"Apex Chat",
    engineType:"Google Gemini",
    context:"repo/filepath.py",
    sessionId:"123456",
    topics:[
      {
        id:1,
        title:'Code',
        img:code,
      }
    ],

    violation: "12",
    violationCat: "ChatGPT",
  },
  {
    id: 2,
    title: "SEO Best Practices",
    mails:"james@email.com",
    lastUpdate:"Apr 12, 2024 09:21 PM",
    interface:"Apex Chat",
    engineType:"OpenAI GPT4",
    context:"repo/filepath.py",
    sessionId:"",
    topics:[
      {
        id:1,
        title:'Finance',
        img:coin,
      },
      {
        id:2,
        title:'Hiring',
        img:bag
      }
    ],

    violation: "8",
    violationCat: "Bard",
  },
  {
    id: 3,
    title: "Social Media Campaign Ideas",
    mails:"george@email.com",
    lastUpdate:"Apr 12, 2024 07:42 AM",
    interface:"Github Copilot",
    engineType:"OpenAI Codex",
    context:"repo/filepath.py",
    sessionId:"",
    topics:[
      {
        id:1,
        title:'Code',
        img:code,
      },
      {
        id:2,
        title:'Security',
        img:shield
      }
    ],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 4,
    title: "Effective Email Marketing",
    mails:"barbara@email.com",
    lastUpdate:"Apr 11, 2024 8:30 AM",
    interface:"365 Copilot",
    engineType:"365 Copilot",
    context:"repo/filepath.py",
    sessionId:"123456",
    topics:[
      {
        id:1,
        title:'Contracts & Agreements',
        img:scrollText,
      },
      {
        id:2,
        title:'Legal',
        img:scale
      }
    ],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 5,
    title: " Product Launch Planning",
    mails:"john@email.com",
    lastUpdate:"Apr 10, 2024 11:45 AM",
    interface:"Apex Chat",
    engineType:"OpenAI Codex",
    context:"repo/filepath.py",
    sessionId:"123456",
    topics:[
      {
        id:1,
        title:'Code',
        img:code,
      },
      {
        id:2,
        title:'Security',
        img:shield
      }
    ],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 6,
    title: "Competitive Market Analysis",
    mails:"john@email.com",
    lastUpdate:"Aug 12, 2023 10:46 AM",
    interface:"Apex API",
    engineType:"OpenAI GPT3.5",
    context:"repo/filepath.py",
    sessionId:"123456",
    topics:[
      {
        id:1,
        title:'Data analysis',
        img:pie,
      }
    ],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 7,
    title: "Customer Feedback Interpretation",
    mails:"ben@email.com",
    lastUpdate:"Aug 12, 2023 10:46 AM",
    interface:"Apex Chat",
    engineType:"OpenAI GPT4",
    context:"repo/filepath.py",
    sessionId:"123456",
    topics:[
      {
        id:1,
        title:'Code',
        img:code,
      },
      {
        id:2,
        title:'Security',
        img:shield
      }
    ],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 8,
    title: "Team Building Activities",
    mails:"rita@email.com",
    lastUpdate:"Aug 12, 2023 10:46 AM",
    interface:"365 Copilot",
    engineType:"365 Copilot",
    context:"repo/filepath.py",
    sessionId:"123456",
    topics:[
      {
        id:1,
        title:'Contracts & Agreements',
        img:scrollText,
      },
      {
        id:2,
        title:'Legal',
        img:scale
      }
    ],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 9,
    title: " Leadership Skills Enhancement",
    mails:"sarah@email.com",
    lastUpdate:"Aug 12, 2023 10:46 AM",
    interface:"Apex Chat",
    engineType:"Claude",
    context:"repo/filepath.py",
    sessionId:"123456",
    topics:[
      {
        id:1,
        title:'Code',
        img:code,
      },
      {
        id:2,
        title:'Security',
        img:shield
      }
    ],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 10,
    title: "Time Management Techniques",
    mails:"li@email.com",
    lastUpdate:"Aug 12, 2023 10:46 AM",
    interface:"Glean",
    engineType:"Glean",
    context:"repo/filepath.py",
    sessionId:"123456",
    topics:[
      {
        id:1,
        title:'Code',
        img:code,
      },
      {
        id:2,
        title:'Finance',
        img:coin
      }
    ],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 11,
    title: "Advanced Data Analytics",
    mails:"ben@email.com",
    lastUpdate:"Aug 12, 2023 10:46 AM",
    interface:"Apex Chat",
    engineType:"OpenAI GPT4",
    context:"repo/filepath.py",
    sessionId:"123456",
    topics:[
      {
        id:1,
        title:'Code',
        img:code,
      },
      {
        id:2,
        title:'Finance',
        img:coin
      },
      {
        id:3,
        title:'Contracts & Agreements',
        img:scrollText
      }
    ],

    violation: "6",
    violationCat: "OpenAI",
  },
  {
    id: 12,
    title: "Sales Pitch Preparation",
    mails:"ben@email.com",
    lastUpdate:"Aug 12, 2023 10:46 AM",
    interface:"Apex Chat",
    engineType:"OpenAI GPT4",
    context:"repo/filepath.py",
    sessionId:"123456",
    topics:[
      {
        id:1,
        title:'Code',
        img:code,
      },
      {
        id:2,
        title:'Finance',
        img:coin
      }
    ],

    violation: "6",
    violationCat: "OpenAI",
  },
];

export const MESSAGES = [
  {
    id:1,
    userMsg:'Hi ChatGPT, I need some help with hiring content. I am looking at a CV and want to make sure I am asking the right questions in the interview. Can you help me with that?',
    time:'04:53 PM',
    reply:'Of course! Id be happy to help. Can you tell me a bit about the role you are hiring for and the CV you are reviewing?'
  },
  {
    id:2,
    userMsg:'Sure. The role is for a Senior Content Manager. The CV has a lot of experience in content creation, team management, and SEO. The candidate has worked at a few well-known companies in the industry. Attached - the hire CV. ',
    time:'04:53 PM',
    reply:'Great! For a Senior Content Manager, you will want to focus on their strategic thinking, leadership skills, and ability to drive content performance. Here are a few questions you might consider:',
    replyList:[
      {
        id:1,
        list:'Can you tell me about a time when you developed a content strategy that significantly improved your companys engagement metrics?',
      },
      {
        id:2,
        list:'How do you prioritize content projects and manage deadlines for a team?',
      },
      {
        id:3,
        list:'Can you give an example of how you have used SEO to increase organic traffic?',
      },
      {
        id:4,
        list:' How do you measure the success of your content initiatives?',
      },
      {
        id:5,
        list:'Can you describe your experience with cross-functional collaboration, particularly with marketing and product teams?',
      },
    ]
  },
  {
    id:3,
    userMsg:' Those are really good questions. The CV also mentions that they have led a team of writers and editors. How can I dig deeper into their leadership skills?',
    time:'04:53 PM',
    reply:' Leadership is crucial for a Senior Content Manager. Here are some targeted questions to explore their leadership abilities:',
    replyList:[
      {
        id:1,
        list:'Can you describe your approach to mentoring and developing your team members?',
      },
      {
        id:2,
        list:'How do you handle conflicts or disagreements within your team?',
      },
      {
        id:3,
        list:'Can you give an example of a challenging project and how you led your team to overcome obstacles?',
      },
      {
        id:4,
        list:' How do you ensure your team stays motivated and productive, especially during tight deadlines?',
      },
      {
        id:5,
        list:'How do you handle feedback, both giving and receiving it?',
      },
    ]
  },
  {
    id:4,
    userMsg:' These are very helpful. The CV also mentions experience with content analytics tools. Should I ask about that too?',
    time:'04:53 PM',
    reply:'Absolutely. Understanding their proficiency with content analytics tools is important. You can ask questions like:',
    replyList:[
      {
        id:1,
        list:'Which content analytics tools are you most familiar with, and how have you used them to drive content strategy?',
      },
      {
        id:2,
        list:'Can you walk me through a time when you used data to pivot your content approach?',
      },
      {
        id:3,
        list:'How do you stay updated with the latest trends and tools in content analytics?',
      }
    ]
  },
  {
    id:5,
    userMsg:'This is perfect. Thanks for your help, ChatGPT!',
    time:'04:53 PM',
    reply:'You’re welcome! If you have any more questions or need further assistance, feel free to ask. Good luck with your interview!',
    
  }
]

export const SESSION_GRAPH = [
  {
    id:1,
    title:"John White",
    value:'100',
    chart:USER_1,
  },
  {
    id:2,
    title:"George Mayer",
    value:'100',
    chart:USER_2,
  },
  {
    id:3,
    title:"Cindy Sherman",
    value:'100',
    chart:USER_1,
  },
  {
    id:4,
    title:"Barbara Kruger",
    value:'100',
    chart:USER_2,
  },
  {
    id:5,
    title:"Michael Black",
    value:'100',
    chart:USER_3,
  }
]
