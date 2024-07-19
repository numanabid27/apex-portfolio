import panda from "@/common/assets/images/panda.svg";
import gpt from "@/common/assets/images/gpt.svg";
import shine from "@/common/assets/images/shine.svg";
import azure from "@/common/assets/images/azure.svg";
import emoji from "@/common/assets/images/emoji.svg";

export const SETTING = [
  {
    id: 1,
    title: "Azure OpenAI General",
    links : "engines/engine-detail",
    status: "Private",
    category: "Azure OpenAI",
    categoryImg: azure,
    avilability: "Frozen",
    properties: "Properties",
    color: "linear-gradient(160deg, #2fa5e74d -28%, #00000000, #fff3f300)",
  },
  {
    id: 2,
    title: "HuggingFace OpenAssistant Llama",
    status: "Public",
    category: "HuggingFace OpenAssistant",
    categoryImg: emoji,
    avilability: "Active",
    properties: "Properties",
    color: "linear-gradient(160deg, #e59b5940 -14%,#00000000, #00000000)",
  },
  {
    id: 3,
    title: "Github Co-Pilot",
    status: "Private",
    category: "Github Co-Pilot",
    categoryImg: panda,
    avilability: "Active",
    properties: "Properties",
    color: "linear-gradient(160deg, #00000017 -14%,#00000000, #00000000)",
  },
  {
    id: 4,
    title: "OpenAI GPT4",
    status: "Public",
    category: "OpenAI ChatGPT",
    categoryImg: gpt,
    avilability: "Active",
    properties: "Properties",
    color: "linear-gradient(160deg, #74aa9c57 -14%,#ffffff00, #00000000)",
  },
  {
    id: 5,
    title: "Google Bard Marketing",
    status: "Public",
    category: "Google Bard",
    categoryImg: shine,
    avilability: "Active",
    properties: "Properties",
    color: "linear-gradient(160deg, #cf09092e -14%,#00000000, #f9f6f600)",
  },

 
];

export const ENGINE_NAMES = [
  { id: 1, name: "ChatGPT 4" },
  { id: 2, name: "Bard" },
  { id: 3, name: "OpenAI" },
];
