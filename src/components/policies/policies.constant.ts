import { CustomSwitch } from "@/common/components/custom-switch/custom-switch.component";
import ActionDropdown from "../create-policy/component/action-dropdown/actionDropdown.component";
import AssetsDropdown from "../create-policy/component/assets-dropdown/assets-dropdown";
import Severity from "../create-policy/component/severityLevel/severty.component";
import AddWord from "../create-policy/component/addWord/addWord.component";
import engine from "@/common/assets/images/vs.svg";
import gemini from "@/common/assets/images/gemini.svg";
import gpt from "@/common/assets/images/gpt.svg";
import claud from "@/common/assets/images/claud.svg";
import microsft from "@/common/assets/images/microsoft.svg"
import snyk from "@/common/assets/images/synk.svg"

export const POLICIES_ACCORDION_DATA = [
  {
    id: 1,
    value: "PII",
    switch: CustomSwitch,
    action: ActionDropdown,
    headerEngines: "Liron_Azure",
    headerAssets: "File",
    headerSeverityevel: "Medium",
    policiesData: [
      {
        id: 1,
        policyName: "Email",
        type: "Block",
        engine: "Liron_Azure",
        assets: "File",
        integration: "None",
        severityLevel: "Medium",
      },
      {
        id: 2,
        policyName: "SSN",
        type: "Redact",
        engine: "Liron_Azure",
        assets: "File",
        integration: "Snyk",
        severityLevel: "Medium",
      },
    ],
  },
  {
    id: 2,
    value: "Access Data",
    switch: CustomSwitch,
    action: "Notify",
    headerEngines: ActionDropdown,
    headerAssets: ActionDropdown,
    headerSeverityevel: ActionDropdown,
    policiesData: [
      {
        id: 1,
        policyName: "Microsoft webhook",
        type: "Notify",
        engine: "A",
        assets: ["Message"],
        integration: "None",
        severityLevel: "Low",
      },
      {
        id: 2,
        policyName: "SSN",
        type: "Notify",
        engine: "Liron_Azure",
        assets: ["File", "Message"],
        integration: "None",
        severityLevel: "High",
      },
    ],
  },
  {
    id: 3,
    value: "PCI",
    switch: CustomSwitch,
    action: ActionDropdown,
    policiesData: [
      {
        id: 1,
        policyName: "Microsoft webhook",
        type: "Notify",
        engine: "A",
        assets: ["Message"],
        integration: "None",
        severityLevel: "High",
      },
      {
        id: 2,
        policyName: "SSN",
        type: "Notify",
        engine: "Liron_Azure",
        assets: ["Message"],
        integration: "None",
        severityLevel: "High",
      },
    ],
  },
  {
    id: 4,
    value: "Custom policies",
    switch: CustomSwitch,
    action: ActionDropdown,
    policiesData: [
      {
        id: 1,
        policyName: "Suspicious Prompt",
        type: "Alert",
        engine: "Azure Marketing",
        severityLevel: "High",
        status: "",
        description: ["This policy is intended to mitigate"],
        usedBy: [
          {
            title: "SSO Group: Untitled - All",
          },
        ],
        count: "219",
        highData: [14, 5, 5, 0, 16, 6, 6, 0, 10, 8, 4, 0], //red
        mediumData: [5, 3, 3, 18, 5, 3, 3, 9, 5, 3, 3, 10], //orange
        lowData: [5, 8, 10, 5, 5, 8, 12, 12, 5, 5, 7, 6], //green
      },
      {
        id: 2,
        policyName: "Suspicious Response",
        type: "Alert",
        engine: "Azure R&D",
        severityLevel: "Critical",
        status: "",
        description: ["This policy is intended to mitigate"],
        usedBy: [
          {
            title: "SSO Group: Untitled - All",
          },
        ],
        count: "193",
        highData: [12, 6, 6, 0, 0, 5, 3, 0, 5, 5, 8, 0], //red
        mediumData: [5, 3, 8, 10, 6, 3, 4, 7, 2, 2, 6, 6], //orange
        lowData: [5, 5, 5, 6, 8, 8, 6, 7, 6, 5, 6, 6], //green
      },
      {
        id: 3,
        policyName: "Known Prompt Injections",
        type: "Alert",
        engine: "All",
        severityLevel: "Critical",
        status: "",
        description: ["This policy is intended to mitigate"],
        usedBy: [
          {
            title: "SSO Group: Untitled - All",
          },
        ],
        highData: [12, 6, 6, 0, 0, 5, 3, 0, 5, 5, 8, 0], //red
        mediumData: [5, 3, 8, 10, 6, 3, 4, 7, 2, 2, 6, 6], //orange
        lowData: [5, 5, 5, 6, 8, 8, 6, 7, 6, 5, 6, 6], //green
      },
      {
        id: 4,
        policyName: "Model Theft",
        type: "Alert",
        engine: "All",
        severityLevel: "Critical",
        status: "",
        description: ["This policy is intended to mitigate"],
        usedBy: [
          {
            title: "SSO Group: Untitled - All",
          },
        ],
        highData: [12, 6, 6, 0, 0, 5, 3, 0, 5, 5, 8, 0], //red
        mediumData: [5, 3, 8, 10, 6, 3, 4, 7, 2, 2, 6, 6], //orange
        lowData: [5, 5, 5, 6, 8, 8, 6, 7, 6, 5, 6, 6], //green
      },
    ],
  },
];

export const POLICIES_ACCESS_USAGE_DATA = [
  {
    id: 1,
    policyName: "Anna Smith Access to LLM",
    category: "Restrict",
    type: "Restrict",
    engine: "AzureOpenAI general",
    severityLevel: "Critical",
    status: "New",
    description: [
      "This policy is intended to mitigate unauthorized and unauthenticated access to your LLMs.",
      "It currently restricts users from accessing ApexChat without authenticating through your company’s SSO.",
    ],
    usedBy: [
      {
        title: "Anna Smith",
      },
    ],
    count: "195",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id: 2,
    policyName: "Access without Company’s SSO",
    category: "Restrict",
    engine: "Azure Marketing",
    type: "Restrict",
    severityLevel: "Critical",
    status: "",
    description: [
      "This policy is intended to mitigate unauthorized and unauthenticated access to your LLMs.",
      "It currently restricts users from accessing ApexChat without authenticating through your company’s SSO.",
    ],
    count: "195",
    usedBy: [
      {
        title: "SSO Group: Untitled - All",
      },
    ],
    highData: [5, 6, 10, 10, 0, 5, 5, 0, 5, 5, 5, 0], //red
    mediumData: [4, 4, 5, 5, 14, 3, 3, 12, 4, 3, 3, 8], //orange
    lowData: [10, 8, 5, 5, 4, 7, 6, 5, 4, 6, 8, 8], //green
  },
  {
    id: 3,
    policyName: "Indivisual usage limit",
    category: "Restrict",
    engine: "Azure Marketing",
    severityLevel: "Critical",
    type: "Restrict",
    status: "",
    description: [
      "This policy is intended to mitigate unauthorized and unauthenticated access to your LLMs.",
      "It currently restricts users from accessing ApexChat without authenticating through your company’s SSO.",
    ],
    count: "168",
    usedBy: [
      {
        title: "SSO Group: Untitled - dev department ",
      },
      {
        title: "Untitled - marketing department",
      },
    ],
    highData: [6, 10, 6, 6, 0, 6, 0, 0, 10, 6, 6, 0], //red
    mediumData: [4, 8, 4, 4, 12, 3, 15, 6, 6, 8, 4, 0], //orange
    lowData: [10, 6, 10, 10, 8, 0, 5, 8, 6, 0, 0, 14], //green
  },
  {
    id: 4,
    policyName: "Engine Public Access",
    category: "Restrict",
    engine: "Azure Marketing",
    severityLevel: "Medium",
    type: "Restrict",
    status: "",
    description: [
      "This policy is intended to mitigate unauthorized and unauthenticated access to your LLMs.",
      "It currently restricts users from accessing ApexChat without authenticating through your company’s SSO.",
    ],
    count: "185",
    usedBy: [
      {
        title: "SSO Group name",
      },
    ],
    highData: [12, 5, 5, 0, 14, 5, 5, 0, 9, 5, 5, 0], //red
    mediumData: [7, 3, 3, 14, 5, 3, 3, 9, 6, 3, 3, 14], //orange
    lowData: [7, 6, 9, 6, 5, 8, 10, 9, 4, 7, 9, 5], //green
  },
];

export const POLICIES_LISTENING = [
  {
    id: 1,
    policyName: "Github Copilot Policy",
    policyDesc:
      "This policy is intended to protect our code when using GitHub Copilot, and detect when the conversation topics with GitHub Copilot Chat arn’t aligned with code.",
    longDesc: [
      {
        desc: "By implementing this policy, we aim to enhance our code quality and safeguard our development processes using AI.Groups:",
      }
    ],
    groups: {
      title: "Groups",
      groupName: [
        {
          name1: "R&D",
        },
        {
          name1: "Data Science",
        },
      ],
    },
    count: "195",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id: 2,
    policyName: "Marketing and strategy policy",
    policyDesc:
      "This policy is intended to protect our organization from data leakage in terms of our marketing secrets, future strategies, and customer data.",
    longDesc: [
      {
        desc: "This policy is intended to protect our organization from data leakage in terms of our marketing secrets, future strategies, and customer data.",
      },
      {
        desc: "By implementing this policy, we will prevent Potential risks include the unintentional disclosure of proprietary marketing strategies or future plans, leakage of customer data leading to potential breaches of privacy and trust, competitive disadvantage due to exposure of strategic information, and damage to brand reputation and loss of customer confidence.",
      },
    ],
    groups: {
      title: "Groups",
      groupName: [
        {
          name1: "Marketing",
        },
        { name1: "Strategy" },
      ],
    },
    count: "195",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id: 3,
    policyName: "Files & Microsoft Copilot protection",
    policyDesc:
      "This policy is intended to protect the organization from sharing sensitive information with public models. It will monitor interactions involving file sharing and the use of Microsoft Copilot to ensure that sensitive information is not inadvertently disclosed.",
    longDesc: [
      {
        desc: "This policy is intended to protect the organization from sharing sensitive information with public models. It will monitor interactions involving file sharing and the use of Microsoft Copilot to ensure that sensitive information is not inadvertently disclosed.",
      },
      {
        desc: "You will be able to monitor these interactions and notifications via the Apex security platform, providing comprehensive oversight and protection.",
      },
      {
        desc: "Potential risks include the unintentional disclosure of sensitive documents, exposure of proprietary information to unauthorized entities, and the risk of confidential data being shared with external models. By implementing this policy, we aim to safeguard our organization's sensitive information and maintain data integrity.",
      },
    ],
    groups: {
      title: "Groups",
      groupName: [
        {
          name1: "Marketing",
        },
        { name1: "Strategy" },
      ],
    },
    count: "100",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id: 4,
    policyName: "API Protection",
    policyDesc:
      "This policy is intended to protect internal applications from prompt injection, jailbreaking, and other malicious activities that could compromise the security and integrity of our systems. It will monitor API interactions to ensure they are secure and compliant with organizational standards.",
    longDesc: [
      {
        desc: "This policy is intended to protect internal applications from prompt injection, jailbreaking, and other malicious activities that could compromise the security and integrity of our systems. It will monitor API interactions to ensure they are secure and compliant with organizational standards.",
      },
      {
        desc: "You will be able to monitor these interactions and notifications via the Apex security platform, ensuring proactive protection against potential threats.",
      },
    ],
    groups: {
      title: "Groups",
      groupName: [
        {
          name1: "List",
        },
      ],
    },
    count: "200",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id: 5,
    policyName: "Sensitive Topics",
    policyDesc:
      "This policy is intended to protect the Executive team from discussing sensitive topics that could lead to data leakage or other security risks. It will monitor conversations to ensure that sensitive topics are not inadvertently discussed in insecure or inappropriate contexts.",
    longDesc: [
      {
        desc: "This policy is intended to protect the Executive team from discussing sensitive topics that could lead to data leakage or other security risks. It will monitor conversations to ensure that sensitive topics are not inadvertently discussed in insecure or inappropriate contexts.",
      },
      {
        desc: "Your users will be notified when they engage in conversations that involve sensitive topics, ensuring that they are aware of potential risks. You will be able to monitor these interactions and notifications via the Apex security platform, providing comprehensive oversight of executive communications.",
      },
      {
        desc: "Potential risks include the unintentional disclosure of confidential company strategies, exposure of sensitive financial information, and the risk of leaking proprietary business decisions. By implementing this policy, we aim to safeguard the confidentiality and integrity of our executive communications.",
      },
    ],
    groups: {
      title: "Groups",
      groupName: [
        {
          name1: "Executives Team",
        },
      ],
    },
    count: "150",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id: 6,
    policyName: "Remote code execution",
    policyDesc:
      "This policy is intended to protect our organization from risks associated with remote code execution, particularly those initiated or facilitated by AI systems. It will monitor activities to prevent unauthorized or malicious code from being executed remotely, which could compromise the security and integrity of our systems.",
    longDesc: [
      {
        desc: "This policy is intended to protect our organization from risks associated with remote code execution, particularly those initiated or facilitated by AI systems. It will monitor activities to prevent unauthorized or malicious code from being executed remotely, which could compromise the security and integrity of our systems.",
      },
      {
        desc: "Your users' sessions will be blocked when they engage in activities that pose a risk of remote code execution through AI systems, ensuring immediate protection against potential threats. You will be able to monitor these interactions and session blocks via the Apex security platform, ensuring proactive protection against potential AI-related vulnerabilities.",
      },
      {
        desc: "Potential risks include unauthorized access to critical systems by AI-powered attacks, execution of malicious code by AI systems leading to data breaches, and potential operational disruptions caused by compromised AI interactions. By enforcing this policy, we aim to protect our organization from the dangers associated with AI-facilitated remote code execution and maintain the security of our digital infrastructure.",
      },
    ],
    groups: {
      title: "Groups",
      groupName: [
        {
          name1: "Api costumers",
        },
        {
          name1: "Services accounts",
        },
      ],
    },
    count: "150",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id: 7,
    policyName: "Data Leakage",
    policyDesc:
      "This policy is intended to prevent Data Leakage attacks on our engines. It will monitor interactions to ensure that sensitive data is not inadvertently disclosed or extracted by malicious actors using AI systems.",
    longDesc: [
      {
        desc: "This policy is intended to prevent Data Leakage attacks on our engines. It will monitor interactions to ensure that sensitive data is not inadvertently disclosed or extracted by malicious actors using AI systems.",
      },
      {
        desc: "Your users will be notified when they engage in activities that pose a risk of data leakage, ensuring that they are aware of potential threats, such as unauthorized access to sensitive data, exposure of confidential information through AI-driven queries, and the extraction of proprietary data by malicious AI models. You will be able to monitor these interactions and notifications via the Apex security platform, providing comprehensive oversight and proactive protection against data leakage attempts.",
      },
      {
        desc: "By implementing this policy, we aim to safeguard our data integrity and protect against AI-facilitated data leakage attacks.",
      },
    ],
    groups: {
      title: "Groups",
      groupName: [
        {
          name1: "Marketing",
        },
        {
          name1: "Strategy",
        },
      ],
    },
    count: "150",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id: 8,
    policyName: "GDPR Policy",
    policyDesc:
      "This policy is created to ensure compliance with the General Data Protection Regulation (GDPR). It will monitor interactions and activities to ensure that personal data is handled in accordance with GDPR standards and promptly address any potential violations.",
    longDesc: [
      {
        desc: "This policy is created to ensure compliance with the General Data Protection Regulation (GDPR). It will monitor interactions and activities to ensure that personal data is handled in accordance with GDPR standards and promptly address any potential violations.",
      },
      {
        desc: "The security admin will be notified via Slack when activities that pose a risk of non-compliance with GDPR are detected. This includes improper handling of personal data, failure to obtain proper consent, and breaches of data protection principles. By providing these notifications, we aim to ensure that users are aware of potential GDPR issues and can take corrective action.",
      },
      {
        desc: "Potential risks include exposure of personal data without consent, non-compliance with data subject rights (such as the right to access and the right to be forgotten), and unauthorized data transfers outside the EU/EEA. You will be able to monitor these interactions and notifications via the Apex security platform, providing comprehensive oversight of GDPR-related activities.",
      },
      {
        desc: "By implementing this policy, we aim to safeguard personal data and ensure full compliance with GDPR regulatory standards.",
      },
    ],
    groups: {
      title: "Groups",
    },
    count: "150",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id: 9,
    policyName: "Notify Sexual, Violence and Harmful content",
    policyDesc:
      "This policy is intended to protect the Executive team from discussing sensitive topics that could lead to data leakage or other security risks, especially in interactions with AI systems. It will monitor conversations to ensure that sensitive topics are not inadvertently discussed in insecure or inappropriate contexts, particularly when interacting with AI-powered tools and platforms.",
    longDesc: [
      {
        desc: "This policy is intended to protect the Executive team from discussing sensitive topics that could lead to data leakage or other security risks, especially in interactions with AI systems. It will monitor conversations to ensure that sensitive topics are not inadvertently discussed in insecure or inappropriate contexts, particularly when interacting with AI-powered tools and platforms.",
      },
      {
        desc: "Your users will be notified when they engage in conversations that involve sensitive topics, ensuring that they are aware of potential AI-related risks. You will be able to monitor these interactions and notifications via the Apex security platform, providing comprehensive oversight of executive communications.",
      },
      {
        desc: "Potential risks include the unintentional disclosure of confidential company strategies, exposure of sensitive financial information, and the risk of leaking proprietary business decisions to AI systems that may not be secure. By implementing this policy, we aim to safeguard the confidentiality and integrity of our executive communications against AI-related threats.",
      },
    ],
    groups: {
      title: "Groups",
      groupName: [
        {
          name1: "Api costumers",
        },
      ],
    },
    count: "150",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
  {
    id: 10,
    policyName: "AI-BOM policy",
    policyDesc:
      "This policy is intended to detect when a sensitive or strategy-related file is being written by an AI engine, or when an important strategic decision is made with the help of an AI model. It will monitor AI interactions to ensure that critical company decisions and sensitive documents are handled appropriately.",
    longDesc: [
      {
        desc: "This policy is intended to detect when a sensitive or strategy-related file is being written by an AI engine, or when an important strategic decision is made with the help of an AI model. It will monitor AI interactions to ensure that critical company decisions and sensitive documents are handled appropriately.",
      },
      {
        desc: "If more than 10% of a sensitive document is written by an AI engine, the user's session will be blocked to prevent potential risks. These risks include the inadvertent disclosure of sensitive information through AI-generated documents, the reliance on AI for strategic decisions without proper oversight, and the potential manipulation of AI models to influence company strategy.",
      },
      {
        desc: "You will be able to monitor these activities and session blocks via the Apex security platform, providing comprehensive oversight of AI-assisted decision-making processes. By enforcing this policy, we aim to protect the integrity and confidentiality of our strategic operations and sensitive documents.",
      },
    ],
    groups: {
      title: "Groups",
      groupName: [
        {
          name1: "Finance",
        },
        {
          name1: "Strategy",
        },
      ],
    },
    count: "150",
    highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
    mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
    lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
  },
];

function createData(
  name: any,
  calories: any,
  fat: any,
  carbs: any,
  protein: any,
  price: any
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

export const Rows: any = [
  {
    id: 1,
    value: "Data Exposure",
    policiesMainData: [
      {
        type: "PII",
        component: CustomSwitch,
        action: AssetsDropdown,
        // engines: [{text:"Azure GPT 4o", icon:engine}],
        engines: ActionDropdown,
        // headerAssets: "R&D",
        headerAssets: AssetsDropdown,
        integration: ["GDPR", "HIPPA", "NIST AI RMF"],
        // headerSeverityevel: "Medium",
        headerSeverityevel: Severity,
        desc:"This policy is intended to mitigate data leakage. It will monitor when your users are including PII in their prompts, as they interact with LLMs. Your users will be notified, when they use ApexPortal, as they make these actions. You will be able to monitor these actions via Apex security platform.\nPII includes email addresses, social security numbers and US zip codes.",
        count: "195",
        highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
        mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
        lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
        policiesData: [
          {
            id: 1,
            component: CustomSwitch,
            policyName: "Email",
            type: "Block",
            engine: [{text:"Azure GPT 4o", icon:engine}],
            assets: "R&D",
            integration: ["GDPR", "Mitre ATLAS"],
            severityLevel: "Medium",
          },
          {
            id: 2,
            component: CustomSwitch,
            policyName: "SSN",
            type: "Redact",
            engine: [{text:"Claude", icon:claud}],
            assets: "R&D",
            integration: ["HIPPA", "NIST AI RMF", "OWASP: 06"],
            severityLevel: "Medium",
          },
          {
            id: 3,
            component: CustomSwitch,
            policyName: "Address",
            type: "Redact",
            engine: [{text:"Azure GPT 4o", icon:engine}],
            assets: "Marketing",
            integration: ["GDPR", "HIPA", "CSF - NIST"],
            severityLevel: "High",
          },
          {
            id: 4,
            component: CustomSwitch,
            policyName: "Date of birth",
            type: "Block",
            engine: [{text:"Gemini", icon:gemini}],
            assets: "R&D",
            integration: ["GDPR", "HIPA", "EU AI Act"],
            severityLevel: "Medium",
          },
          {
            id: 5,
            component: CustomSwitch,
            policyName: "ID detector",
            type: "Redact",
            engine: [{text:"Co-pilot", icon:microsft}],
            assets: "R&D",
            integration: ["GDPR", "HIPA", "Colorado Privacy Law,"],
            severityLevel: "Medium",
          },
          {
            id: 6,
            component: CustomSwitch,
            policyName: "Biometric data",
            type: "Block",
            engine: [{text:"Azure GPT 4o", icon:engine}],
            assets: "Marketing",
            integration: ["GDPR", "Map", "Govern"],
            severityLevel: "Low",
          },
          {
            id: 7,
            component: CustomSwitch,
            policyName: "Phone number",
            type: "Redact",
            engine: [{text:"Azure GPT 4o", icon:engine}],
            assets: "Executives",
            integration: ["Measure", "CSF - NIST", "HIPA"],
            severityLevel: "Medium",
          },
          {
            id: 8,
            component: CustomSwitch,
            policyName: "China ID",
            type: "Notify",
            engine: [{text:"Claude", icon:claud}],
            assets: "R&D",
            integration: ["GDPR", "CSF - NIST", "EU AI Act"],
            severityLevel: "High",
          }
        ],
      },
      {
        type: "Access Data",
        component: CustomSwitch,
        // action: "Notify",
        action: AssetsDropdown,
        engines: ActionDropdown,
        headerAssets: AssetsDropdown,
        integration: ["GDPR", "NIST AI RMF", "CSF - NIST"],
        headerSeverityevel: Severity,
        desc:"This policy is intended to mitigate data leakage. It will monitor when your users are including access data in their prompts, as they interact with LLMs. Your users will be notified, when they use ApexPortal, as they make these actions. You will be able to monitor these actions via Apex security platform. Access data includes IPs, MAC address, DB connection strings, passwords, API tokens, API keys, Access tokens, refresh tokens, URLs and private keys.",
        count: "200",
        highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
        mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
        lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
        policiesData: [
          {
            id: 1,
            component: CustomSwitch,
            policyName: "Clojars API token",
            type: "Notify",
            engine: [{text:"Gemini", icon:gemini}, {text:"Claude", icon:claud}],
            assets: "Marketing , R&D, executives",
            integration: ["GDPR", "CSF - NIST", "NIST AI RMF"],
            severityLevel: "Low",
          },
          {
            id: 2,
            component: CustomSwitch,
            policyName: "Encryption keys",
            type: "Block",
            engine: [{text:"Azure GPT 4o", icon:engine}],
            assets: "Finance, Product",
            integration: ["GDPR", "CSF - NIST", "NIST AI RMF"],
            severityLevel: "High",
          },
          {
            id: 3,
            component: CustomSwitch,
            policyName: "API keys",
            type: "Notify",
            engine: [{text:"Gemini", icon:gemini}],
            assets: "Marketing , R&D, executives",
            integration: ["GDPR", "Sensitive Data Exposure - LLM06"],
            severityLevel: "Low",
          },
          {
            id: 4,
            component: CustomSwitch,
            policyName: "Access tokens",
            type: "Block",
            engine: [{text:"Gemini", icon:gemini}],
            assets: "Marketing , R&D, executives",
            integration: ["Map", "Govern", "Measure"],
            severityLevel: "Medium",
          },
        ],
      },
      {
        type: "PCI",
        component: CustomSwitch,
        action: AssetsDropdown,
        // engines: [{text:"Gemini", icon:gemini}],
        engines: ActionDropdown,
        // headerAssets: "*",
        headerAssets: AssetsDropdown,
        integration: ["GDPR", "HIPPA", "NIST AI RMF"],
        // headerSeverityevel: "Medium",
        headerSeverityevel: Severity,
        desc:"This policy is intended to mitigate data leakage. It will monitor when your users are including PCI in their prompts, as they interact with LLMs.\nYour users will be notified, when they use ApexPortal, as they make these actions. You will be able to monitor these actions via Apex security platform. PCI includes credit card numbers, SWIFT, IBANs, and Bitcoin addresses.",
        count: "150",
        highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
        mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
        lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
        policiesData: [
          {
            id: 1,
            component: CustomSwitch,
            policyName: "Credit card numbers",
            type: "Notify",
            engine: [{text:"Claude", icon:claud}],
            assets: "File",
            integration: ["GDPR", "CSF - NIST", "NIST AI RMF"],
            severityLevel: "High",
          },
          {
            id: 2,
            component: CustomSwitch,
            policyName: "SWIFT numbers",
            type: "Block",
            engine: [{text:"Azure GPT 4o", icon:engine}],
            assets: "Message",
            integration: ["GDPR", "CSF - NIST", "NIST AI RMF"],
            severityLevel: "Medium",
          },
          {
            id: 3,
            component: CustomSwitch,
            policyName: "IBANs",
            type: "Redact",
            engine: [{text:"Azure GPT 4o", icon:engine}],
            assets: "File",
            integration: ["GDPR", "HIPA", "NIST AI RMF"],
            severityLevel: "Low",
          },
          {
            id: 4,
            component: CustomSwitch,
            policyName: "Bitcoin addresses",
            type: "Notify",
            engine: [{text:"Gemini", icon:gemini}],
            assets: "File",
            integration: ["GDPR", "HIPA", "CSF - NIST"],
            severityLevel: "High",
          },
          {
            id: 5,
            component: CustomSwitch,
            policyName: "CVVs",
            type: "Redact",
            engine: [{text:"Snyk", icon:snyk}],
            assets: "Message",
            integration: ["CSF - NIST", "Manage", "Measure"],
            severityLevel: "Critical",
          },
          {
            id: 6,
            component: CustomSwitch,
            policyName: "US bank account routing number",
            type: "Notify",
            engine: [{text:"Gemini", icon:gemini}],
            assets: "File",
            integration: ["GDPR", "HIPA", "Govern"],
            severityLevel: "High",
          },
        ],
      },
      {
        type: "Custom Policies",
        component: CustomSwitch,
        action: AssetsDropdown,
        // engines: [{text:"GPT 4", icon:gpt}],
        engines: ActionDropdown,
        // headerAssets: "*",
        headerAssets: AssetsDropdown,
        integration: ["EU AI Act", "NIST AI RMF", " CSF - NIST"],
        headerSeverityevel: Severity,
        desc:"This policy is intended to ensure company policy compliance by monitoring file access and content being discussed. Notifications will be sent via ApexPortal and monitored through the Apex security platform. company custom policy include the following sub-types: Sensitive file patterns, Github copilot file access, custom words, file denial list.",
        count: "150",
        highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
        mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
        lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
        policiesData: [
          {
            id: 1,
            component: CustomSwitch,
            policyName: "Sensitive file patterns",
            keyWord: AddWord,
            type: "Notify",
            engine: [{text:"GPT 4", icon:gpt}],
            assets: "Message",
            integration: ["GDPR","EU AI Act","Govern"],
            severityLevel: "Low",
          },
          {
            id: 2,
            component: CustomSwitch,
            policyName: "Custom words",
            keyWord: AddWord,
            type: "Notify",
            engine: [{text:"GPT 4", icon:gpt}],
            assets: "Message",
            integration: ["NIST AI RMF"],
            severityLevel: "High",
          },
          {
            id: 3,
            component: CustomSwitch,
            policyName: "File denial list",
            keyWord: AddWord,
            type: "Notify",
            engine: [{text:"Gemini", icon:gemini}],
            assets: "File",
            integration: ["NIST AI RMF"],
            severityLevel: "Critical",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    value: "AI Threats",
    policiesMainData: [
      {
        type: "Jailbreak",
        component: CustomSwitch,
        action: AssetsDropdown,
        // engines: [{text:"Azure GPT 4o", icon:engine}],
        engines: ActionDropdown,
        // headerAssets: "R&D",
        headerAssets: AssetsDropdown,
        integration: ["Broken Access Contro", "NIST AI RMF", "CSF - NIST"],
        // headerSeverityevel: "Medium",
        headerSeverityevel: Severity,
        desc:"This policy is intended to mitigate jailbreak threats. It will monitor when your users are trying to jailbreak your AI models.\n Jailbreaking is a technique to manipulate AI outputs by providing crafted inputs.Jailbreaking can lead to the generation of harmful or misleading content, posing ethical, security, and trust risks\n You will be able to monitor Jailbreak techniques like DAN, DUDE, STAN and others via the Apex security platform.",
        count: "150",
        highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
        mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
        lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
        policiesData: [
          {
            id: 1,
            component: CustomSwitch,
            policyName: "Dan",
            type: "Block",
            engine: [{text:"Azure GPT 4o", icon:engine}],
            assets: "R&D",
            integration: ["NIST AI RMF", "CSF - NIST"],
            severityLevel: "High",
          },
          {
            id: 2,
            component: CustomSwitch,
            policyName: "DUDE",
            type: "Redact",
            engine: [{text:"Co-pilot", icon:microsft}],
            assets: "Executives",
            integration: ["NIST AI RMF", "CSF - NIST"],
            severityLevel: "Medium",
          },
          {
            id: 3,
            component: CustomSwitch,
            policyName: "STAN",
            type: "Notify",
            engine: [{text:"Gemini", icon:gemini}],
            assets: "Marketng",
            integration: ["Map", "Govern - NIST", "CSF - NIST"],
            severityLevel: "Critical",
          },
          {
            id: 4,
            component: CustomSwitch,
            policyName: "Token smuggling",
            type: "Redact",
            engine: [{text:"Co-pilot", icon:microsft}],
            assets: "R&D",
            integration: ["Broken Access Control - LLM04", "Map"],
            severityLevel: "Medium",
          },
          {
            id: 5,
            component: CustomSwitch,
            policyName: "TOM",
            type: "Redact",
            engine: [{text:"Azure GPT 4o", icon:engine}],
            assets: "Marketng",
            integration: ["Security Misconfiguration - LLM03", "Map"],
            severityLevel: "Low",
          },
        ],
      },
      {
        type: "Prompt injection",
        component: CustomSwitch,
        // action: "Notify",
        action: AssetsDropdown,
        engines: ActionDropdown,
        headerAssets: AssetsDropdown,
        integration: ["Injection", "NIST AI RMF", "CSF - NIST"],
        headerSeverityevel: Severity,
        desc:"This policy is designed to mitigate prompt injection threats. It will monitor attempts to inject prompts into your AI models.\nPrompt injection is a technique where a prompt includes crafted inputs to manipulate AI outputs. This can bypass alignment checks, resulting in the generation of harmful or misleading content, posing significant ethical, security, and trust risks.\nYou will be able to monitor prompt injection techniques, including methods like invisible characters, data exfiltration, and others via the Apex security platform.",
        count: "150",
        highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
        mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
        lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
        policiesData: [
          {
            id: 1,
            component: CustomSwitch,
            policyName: "Encryption",
            type: "Notify",
            engine: [{text:"Gemini", icon:gemini}, {text:"Claude", icon:claud}],
            assets: "Marketing , R&D, executives",
            integration: ["CSF - NIST", "NIST AI RMF", "Injection - LLM07"],
            severityLevel: "Low",
          },
          {
            id: 2,
            component: CustomSwitch,
            policyName: "Prompt leak",
            type: "Block",
            engine: [{text:"Azure GPT 4o", icon:engine}],
            assets: "Finance, Product",
            integration: ["CSF - NIST", "NIST AI RMF", "Injection - LLM07"],
            severityLevel: "High",
          },
          {
            id: 3,
            component: CustomSwitch,
            policyName: "ASCII Smuggler",
            type: "Block",
            engine: [{text:"Azure GPT 4o", icon:engine}],
            assets: "Finance, Product",
            integration: ["Map", "CSF - NIST", "Manage"],
            severityLevel: "High",
          },
          {
            id: 4,
            component: CustomSwitch,
            policyName: "Data exfiltration",
            type: "Redact",
            engine: [{text:"Azure GPT 4o", icon:engine}],
            assets: "Finance, Product",
            integration: ["Map", "CSF - NIST", "Manage"],
            severityLevel: "Medium",
          },
          {
            id: 5,
            component: CustomSwitch,
            policyName: "Prompt leak",
            type: "Notify",
            engine: [{text:"Azure GPT 4o", icon:engine}],
            assets: "Finance, Product",
            integration: ["Injection - LLM07", "CSF - NIST", "Manage"],
            severityLevel: "High",
          },
        ],
      },
      {
        type: "Malicious code",
        component: CustomSwitch,
        action: AssetsDropdown,
        // engines: [{text:"Gemini", icon:gemini}],
        engines: ActionDropdown,
        // headerAssets: "*",
        headerAssets: AssetsDropdown,
        integration: ["Software & Data Integrity ", "CSF - NIST", "NIST AI RMF"],
        // headerSeverityevel: "Medium",
        headerSeverityevel: Severity,
        desc:"This policy is intended to monitor and mitigate the inclusion of malicious code in prompts. Notifications will be sent via ApexChat and monitored through the Apex security platform. Malicious code includes the following sub-types: Package hallucination, Model DOS, Typosquatting.",
        count: "150",
        highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
        mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
        lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
        policiesData: [
          {
            id: 1,
            component: CustomSwitch,
            policyName: "Package hallucination",
            type: "Notify",
            engine: [{text:"Azure GPT 4o", icon:engine}],
            assets: "Message",
            integration: ["NIST AI RMF", "CSF - NIST", " Govern"],
            severityLevel: "Critical",
          },
          {
            id: 2,
            component: CustomSwitch,
            policyName: "Model DOS",
            type: "Redact",
            engine: [{text:"Azure GPT 4o", icon:engine}],
            assets: "File",
            integration: ["Vulnerable & Outdated Components - LLM05", "Map"],
            severityLevel: "Low",
          },
          {
            id: 3,
            component: CustomSwitch,
            policyName: "Typosquatting",
            type: "Notify",
            engine: [{text:"Azure GPT 4o", icon:engine}],
            assets: "File",
            integration: ["Map", "Govern", "CSF - NIST"],
            severityLevel: "High",
          },
        ],
      },
      {
        type: "Rouge Agent",
        component: CustomSwitch,
        action: AssetsDropdown,
        // engines: [{text:"GPT 4", icon:gpt}],
        engines: ActionDropdown,
        // headerAssets: "*",
        headerAssets: AssetsDropdown,
        integration: ["NIST AI RMF","CSF - NIST"],
        headerSeverityevel: Severity,
        desc:"This policy is intended to monitor and mitigate the use of insecure agents. It ensures that all agents interacting with AI systems are secure and compliant. Notifications will be sent via ApexChat and monitored through the Apex security platform.",
        count: "150",
        highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
        mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
        lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
        policiesData: [
          {
            id: 1,
            component: CustomSwitch,
            policyName: "Insecure agent",
            type: "Notify",
            engine: [{text:"GPT 4", icon:gpt}],
            assets: "File",
            integration: ["Map", "CSF - NIST", " Govern"],
            severityLevel: "High",
          },
        ]
      },
    ],
  },
  {
    id: 3,
    value: "Responsible AI usage",
    policiesMainData: [
      {
        type: "Topics and content",
        component: CustomSwitch,
        action: AssetsDropdown,
        // engines: [{text:"Azure GPT 4o", icon:engine}],
        engines: ActionDropdown,
        // headerAssets: "R&D",
        headerAssets: AssetsDropdown,
        integration: ["GDPR", "EU AI Act", "CSF - NIST"],
        // headerSeverityevel: "Medium",
        headerSeverityevel: Severity,
        desc:"This policy is intended to ensure that all prompts conform to approved topics and content guidelines. It will monitor the prompts to ensure they do not request content on unapproved or sensitive topics, and comply with the content standards set by the organization. You will be able to monitor these activities via the Apex security platform.",
        count: "150",
        highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
        mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
        lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
        policiesData: [
          {
            id: 1,
            component: CustomSwitch,
            policyName: "Financial data",
            type: "Block",
            engine: [{text:"Claude", icon:claud}],
            assets: "R&D",
            integration: ["GDPR", "EU AI Act", "CSF - NIST"],
            severityLevel: "Critical",
          },
          {
            id: 2,
            component: CustomSwitch,
            policyName: "HR records",
            type: "Redact",
            engine: [{text:"Azure GPT 4o", icon:engine}],
            assets: "Marketing",
            integration: ["GDPR", "EU AI Act", "CSF - NIST"],
            severityLevel: "Medium",
          },
          {
            id: 3,
            component: CustomSwitch,
            policyName: "IMEI hardware id",
            type: "Block",
            engine: [{text:"Gemini", icon:gemini}],
            assets: "Executives",
            integration: ["GDPR", "EU AI Act", "Govern"],
            severityLevel: "Low",
          },
          {
            id: 4,
            component: CustomSwitch,
            policyName: "PHI",
            type: "Redact",
            engine: [{text:"Gemini", icon:gemini}],
            assets: "R&D",
            integration: ["GDPR", "EU AI Act", "Govern"],
            severityLevel: "Medium",
          },
          {
            id: 5,
            component: CustomSwitch,
            policyName: "Sensitive data disclosure",
            type: "Redact",
            engine: [{text:"Azure GPT 4o", icon:engine}],
            assets: "R&D",
            integration: ["GDPR", "EU AI Act", "Govern"],
            severityLevel: "Medium",
          },
          {
            id: 6,
            component: CustomSwitch,
            policyName: "Suspicious URLs",
            type: "Notify",
            engine: [{text:"Azure GPT 4o", icon:engine}],
            assets: "Marketing",
            integration: ["GDPR", "EU AI Act", "Govern"],
            severityLevel: "High",
          },
        ],
      },
      {
        type: "Data hallucination",
        component: CustomSwitch,
        // action: "Notify",
        action: AssetsDropdown,
        engines: ActionDropdown,
        headerAssets: AssetsDropdown,
        integration: ["NIST AI RMF", "CSF - NIST"],
        headerSeverityevel: Severity,
        desc:"This policy is intended to monitor and mitigate issues related to data hallucination. It ensures the integrity of data being used and generated by AI systems. Notifications will be sent via ApexChat and monitored through the Apex security platform.",
        count: "195",
        highData: [6, 6, 14, 14, 0, 5, 5, 0, 6, 5, 5, 0], //red
        mediumData: [4, 4, 8, 8, 20, 3, 3, 14, 4, 2, 3, 6], //orange
        lowData: [10, 8, 8, 8, 5, 8, 6, 5, 4, 6, 8, 10], //green
      }
    ],
  }
];
