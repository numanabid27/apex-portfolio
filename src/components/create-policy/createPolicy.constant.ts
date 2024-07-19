import coppit from "@/common/assets/images/copilot.svg";
import snyk from "@/common/assets/images/synk.svg";
import gemini from "@/common/assets/images/gemini.svg";
import AssistantIcon from "@/common/assets/images/emoji.svg";
import claud from "@/common/assets/images/claud.svg";
import meta from "@/common/assets/images/meta.svg";
import microsoft from "@/common/assets/images/microsoft.svg";
import bell from "@/common/assets/images/bell.svg";
import block from "@/common/assets/images/shield-off.svg";
import redat from "@/common/assets/images/shield-minus.svg";

export const OPTIONS = [
  { value: "all-devops", label: "All-Devops" },
  { value: "Qa-team", label: "QA-Team" },
];

export const actions = [
  {
    id: 1,
    label: "Google Gemini",
    img: gemini,
  },
  {
    id: 2,
    label: "Snyk",
    img: snyk,
  },
  {
    id: 3,
    label: "Huggingface",
    img: AssistantIcon,
  },
  {
    id: 4,
    label: "Claude",
    img: claud,
  },
  {
    id: 5,
    label: "Llama",
    img: meta,
  },
  {
    id: 6,
    label: "Co-pilot",
    img: coppit,
  },
  {
    id: 7,
    label: "Co-pilot",
    img: microsoft,
  },
];

export const multiAction = [
  {
    id: 1,
    label: "R&D",
  },
  {
    id: 2,
    label: "Design",
  },
  {
    id: 3,
    label: "IT",
  },
  {
    id: 4,
    label: "Dev Team",
  },
];

export const assets = [
  {
    id: 1,
    label: "R&D",
  },
  {
    id: 2,
    label: "Marketing",
  },
  {
    id: 3,
    label: "Executives",
  },
];

export const actionsAction = [
  {
    id: 1,
    label: "Block",
    actionImg:block,
  },
  {
    id: 2,
    label: "Reduct",
    actionImg:redat,
  },
  {
    id: 3,
    label: "Notify",
    actionImg:bell,
  },
];

export const severity = [
  {
    id: 1,
    label: "Medium",
  },
  {
    id: 2,
    label: "Low",
  },
  {
    id: 3,
    label: "High",
  },
  {
    id: 4,
    label: "Critical",
  },
];



export const POLICIES_CHECKBOX_FILTER = [
  { id: 1, value: "GDPR", checkedValue: true, enable: true, check: true },
  {
    id: 2,
    value: "Nist Ai RMF",
    checkedValue: true,
    enable: true,
    check: true,
  },
  { id: 3, value: "HIPAA", checkedValue: false, enable: false, check: false },
  {
    id: 4,
    value: "EU AI Act",
    checkedValue: false,
    enable: false,
    check: false,
  },
  {
    id: 5,
    value: "Mitre ATLAS",
    checkedValue: true,
    enable: true,
    check: true,
  },
];



export const  TOPICS = [
  { id: 1, name: "R&D" },
  { id: 2, name: "Hiring" },

];


export const  POLICY_GROUPS = [
  { id: 1, name: "R&D" },
  { id: 2, name: "Data Science" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Strategy" },
  { id: 5, name: "List" },
  { id: 6, name: "Executives Team" },
  { id: 7, name: "Api costumers" },
  { id: 8, name: "Finance" },
  { id: 9, name: "Strategy" },
];