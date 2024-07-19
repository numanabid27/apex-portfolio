import * as echarts from "echarts";
import git from "@/common/assets/images/copilot.svg";
import apache from "@/common/assets/images/apache.svg";
import warn from "@/common/assets/images/warning.svg";
import gitLite from "@/common/assets/images/gitLite.svg";
import angle from "@/common/assets/images/angle.svg";

export const SESSION_EXPLORER_DATA = [
    {
      id: 1,
      name: "Written with AI",
      value: 45,
      color: "#7F56D9",
      percentage: "%",
    },
    {
      id: 2,
      name: "Written by employees",
      value: 55,
      color: "#53B1FD",
      percentage: "%",
    }
];

export const SESSION_EXPLORER_DATA2 = [
  {
    id: 1,
    name: "Written with Copilot",
    value: 65,
    color: "#7F56D9",
    percentage: "%",
  },
  {
    id: 2,
    name: "Written by employees",
    value: 35,
    color: "#FD853A",
    percentage: "%",
  }
];

export const SESSION_EXPLORER_DATA3 = [
  {
    id: 1,
    name: "Written with Copilot",
    value: 45,
    color: "#7F56D9",
    percentage: "%",
  },
  {
    id: 2,
    name: "OSS similarity",
    value: 15,
    color: "#FD853A",
    percentage: "%",
  },
  {
    id: 3,
    name: "Written by dev",
    value: 40,
    color: "#53B1FD",
    percentage: "%",
  }
];

export const SESSION_EXPLORER_DATA4 = [
  {
    id: 1,
    name: "Written with Copilot",
    value: 65,
    color: "#7F56D9",
    percentage: "%",
  },
  {
    id: 2,
    name: "Written by employees",
    value: 35,
    color: "#FD853A",
    percentage: "%",
  }
];

// GITHUB
export const AIBOOM_TABLE_DATA = [
  {
    id:1,
    folderName: "R",
    code: "85",
    voilation: [2, "violations"],
    comment: "21 hours",
    osSimilarity:{label:"27 blocks"},
    osLicience:{label:"Apache"},
    engines:git,
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'java.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
     
    ]
  },
  {
    id:2,
    folderName: "Data",
    code: "23",
    voilation: [15, "violations"],
    comment: "25 sceonds ago",
    osSimilarity:{icon:warn, label:"27 blocks"},
    osLicience:{icon:warn, label:"GPL, MIT, Apache"},
    engines:apache,
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'java.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
     
    ]
  },
  {
    id:3,
    folderName: "doc",
    code: "18",
    voilation: [1, "violations"],
    comment: "25 sceonds ago",
    osSimilarity:{label:"1 block"},
    osLicience:{label:"MIT"},
    engines:angle,
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'java.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
     
    ]
  },
  {
    id:4,
    folderName: "ext",
    code: "22",
    voilation: [3, "violations"],
    comment: "25 sceonds ago",
    engines:gitLite,
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'java.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
     
    ]
  },
  {
    id:5,
    folderName: "output",
    code: "8",
    voilation: [22, "violations"],
    comment: "22 hours ago",
    osSimilarity:{icon:warn, label:"19 blocks"},
    osLicience:{icon:warn, label:"LGPL"},
    engines:git,
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'java.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
     
    ]
  },
  {
    id:6,
    folderName: "qa",
    code: "13",
    voilation: ["","No violations"],
    comment: "22 hours ago",
    engines:apache,
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'java.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
     
    ]
  },
  {
    id:7,
    folderName: "qa",
    code: "8",
    voilation: [15, "violations"],
    comment: "25 sceonds ago",
    engines:angle,
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'java.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
     
    ]
  },
  {
    id:8,
    folderName: "ext",
    code: "30",
    voilation: [1, "violations"],
    comment: "22 hours ago",
    engines:gitLite,
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'java.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
     
    ]
  },
  {
    id:9,
    folderName: "doc",
    code: "18",
    voilation: ["", "No violations"],
    comment: "25 sceonds ago",
    osSimilarity:{label:"3 blocks"},
    osLicience:{label:"BSD"},
    engines:git,
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'java.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
     
    ]
  },
  {
    id:10,
    folderName: "output",
    code: "13",
    voilation: ["15", "Violations"],
    comment: "22 hours ago",
    engines:apache,
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'java.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
     
    ]
  },
  {
    id:11,
    folderName: "Data",
    code: "23",
    voilation: ["2", "Violations"],
    comment: "25 sceonds ago",
    osSimilarity:{label:"7 blocks"},
    osLicience:{label:"MIT, Apache"},
    engines:angle,
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'java.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
     
    ]
  },
  {
    id:12,
    folderName: "Data",
    code: "53",
    voilation: ["4", "Violations"],
    comment: "25 sceonds ago",
    engines:gitLite,
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'java.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
     
    ]
  },
  {
    id:13,
    folderName: "output",
    code: "53",
    voilation: ["4", "Violations"],
    comment: "25 sceonds ago",
    engines:gitLite,
    files:[
      {
        id:1,
        fileName:'codefile.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'code.py',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'api.py',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'core.py',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'codefile.txt',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'new_code.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'runandstop.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'txt.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'readme.txt',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'runscript.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'java.py',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
     
    ]
  }
]

// BOX
export const AIBOOM_TABLE_BOX = [
  {
    id:1,
    folderName: "Project_Delta",
    code: "85",
    voilation: [2, "violations"],
    comment: "21 hours",
    files:[
      {
        id:1,
        fileName:'Q1_Sales_Report.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'Marketing_Strategy_Plan.docx',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'Client_Agreement_2024.pdf',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'Product_Roadmap.pptx',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'Design_Specs_Spring2024.pdf',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'Annual_Budget.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'Research_Summary.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'Employee_Handbook.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'Legal_Contract_Template.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'Vendor_Payment_Invoice_1234.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'Customer_Survey_Results.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'Project_Timeline_Schedule.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:13,
        fileName:'Training_Session_Agenda.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:14,
        fileName:'Team_Meeting_Notes_05152024.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:15,
        fileName:'Product_Feature_List.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:2,
    folderName: "Marketing_Materials",
    code: "23",
    voilation: [15, "violations"],
    comment: "25 sceonds ago",
    files:[
      {
        id:1,
        fileName:'Q1_Sales_Report.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'Marketing_Strategy_Plan.docx',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'Client_Agreement_2024.pdf',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'Product_Roadmap.pptx',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'Design_Specs_Spring2024.pdf',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'Annual_Budget.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'Research_Summary.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'Employee_Handbook.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'Legal_Contract_Template.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'Vendor_Payment_Invoice_1234.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'Customer_Survey_Results.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'Project_Timeline_Schedule.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:13,
        fileName:'Training_Session_Agenda.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:14,
        fileName:'Team_Meeting_Notes_05152024.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:15,
        fileName:'Product_Feature_List.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:3,
    folderName: "Development_Docs",
    code: "18",
    voilation: [1, "violations"],
    comment: "25 sceonds ago",
    files:[
      {
        id:1,
        fileName:'Q1_Sales_Report.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'Marketing_Strategy_Plan.docx',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'Client_Agreement_2024.pdf',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'Product_Roadmap.pptx',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'Design_Specs_Spring2024.pdf',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'Annual_Budget.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'Research_Summary.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'Employee_Handbook.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'Legal_Contract_Template.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'Vendor_Payment_Invoice_1234.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'Customer_Survey_Results.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'Project_Timeline_Schedule.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:13,
        fileName:'Training_Session_Agenda.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:14,
        fileName:'Team_Meeting_Notes_05152024.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:15,
        fileName:'Product_Feature_List.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:4,
    folderName: "Client_Contracts",
    code: "22",
    voilation: [3, "violations"],
    comment: "25 sceonds ago",
    files:[
      {
        id:1,
        fileName:'Q1_Sales_Report.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'Marketing_Strategy_Plan.docx',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'Client_Agreement_2024.pdf',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'Product_Roadmap.pptx',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'Design_Specs_Spring2024.pdf',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'Annual_Budget.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'Research_Summary.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'Employee_Handbook.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'Legal_Contract_Template.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'Vendor_Payment_Invoice_1234.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'Customer_Survey_Results.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'Project_Timeline_Schedule.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:13,
        fileName:'Training_Session_Agenda.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:14,
        fileName:'Team_Meeting_Notes_05152024.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:15,
        fileName:'Product_Feature_List.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:5,
    folderName: "Financial_Statements",
    code: "8",
    voilation: [22, "violations"],
    comment: "22 hours ago",
    files:[
      {
        id:1,
        fileName:'Q1_Sales_Report.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'Marketing_Strategy_Plan.docx',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'Client_Agreement_2024.pdf',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'Product_Roadmap.pptx',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'Design_Specs_Spring2024.pdf',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'Annual_Budget.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'Research_Summary.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'Employee_Handbook.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'Legal_Contract_Template.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'Vendor_Payment_Invoice_1234.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'Customer_Survey_Results.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'Project_Timeline_Schedule.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:13,
        fileName:'Training_Session_Agenda.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:14,
        fileName:'Team_Meeting_Notes_05152024.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:15,
        fileName:'Product_Feature_List.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:6,
    folderName: "Research_Notes",
    code: "13",
    voilation: ["","No violations"],
    comment: "22 hours ago",
    files:[
      {
        id:1,
        fileName:'Q1_Sales_Report.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'Marketing_Strategy_Plan.docx',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'Client_Agreement_2024.pdf',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'Product_Roadmap.pptx',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'Design_Specs_Spring2024.pdf',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'Annual_Budget.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'Research_Summary.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'Employee_Handbook.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'Legal_Contract_Template.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'Vendor_Payment_Invoice_1234.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'Customer_Survey_Results.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'Project_Timeline_Schedule.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:13,
        fileName:'Training_Session_Agenda.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:14,
        fileName:'Team_Meeting_Notes_05152024.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:15,
        fileName:'Product_Feature_List.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:7,
    folderName: "Design_Assets",
    code: "8",
    voilation: [15, "violations"],
    comment: "25 sceonds ago",
    files:[
      {
        id:1,
        fileName:'Q1_Sales_Report.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'Marketing_Strategy_Plan.docx',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'Client_Agreement_2024.pdf',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'Product_Roadmap.pptx',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'Design_Specs_Spring2024.pdf',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'Annual_Budget.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'Research_Summary.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'Employee_Handbook.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'Legal_Contract_Template.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'Vendor_Payment_Invoice_1234.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'Customer_Survey_Results.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'Project_Timeline_Schedule.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:13,
        fileName:'Training_Session_Agenda.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:14,
        fileName:'Team_Meeting_Notes_05152024.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:15,
        fileName:'Product_Feature_List.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:8,
    folderName: "Product_Proposals",
    code: "30",
    voilation: [1, "violations"],
    comment: "22 hours ago",
    files:[
      {
        id:1,
        fileName:'Q1_Sales_Report.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'Marketing_Strategy_Plan.docx',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'Client_Agreement_2024.pdf',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'Product_Roadmap.pptx',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'Design_Specs_Spring2024.pdf',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'Annual_Budget.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'Research_Summary.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'Employee_Handbook.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'Legal_Contract_Template.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'Vendor_Payment_Invoice_1234.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'Customer_Survey_Results.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'Project_Timeline_Schedule.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:13,
        fileName:'Training_Session_Agenda.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:14,
        fileName:'Team_Meeting_Notes_05152024.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:15,
        fileName:'Product_Feature_List.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:9,
    folderName: "Training_Manuals",
    code: "18",
    voilation: ["", "No violations"],
    comment: "25 sceonds ago",
    files:[
      {
        id:1,
        fileName:'Q1_Sales_Report.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'Marketing_Strategy_Plan.docx',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'Client_Agreement_2024.pdf',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'Product_Roadmap.pptx',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'Design_Specs_Spring2024.pdf',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'Annual_Budget.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'Research_Summary.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'Employee_Handbook.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'Legal_Contract_Template.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'Vendor_Payment_Invoice_1234.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'Customer_Survey_Results.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'Project_Timeline_Schedule.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:13,
        fileName:'Training_Session_Agenda.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:14,
        fileName:'Team_Meeting_Notes_05152024.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:15,
        fileName:'Product_Feature_List.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:10,
    folderName: "Meeting_Minutes",
    code: "13",
    voilation: ["15", "Violations"],
    comment: "22 hours ago",
    files:[
      {
        id:1,
        fileName:'Q1_Sales_Report.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'Marketing_Strategy_Plan.docx',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'Client_Agreement_2024.pdf',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'Product_Roadmap.pptx',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'Design_Specs_Spring2024.pdf',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'Annual_Budget.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'Research_Summary.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'Employee_Handbook.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'Legal_Contract_Template.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'Vendor_Payment_Invoice_1234.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'Customer_Survey_Results.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'Project_Timeline_Schedule.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:13,
        fileName:'Training_Session_Agenda.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:14,
        fileName:'Team_Meeting_Notes_05152024.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:15,
        fileName:'Product_Feature_List.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:11,
    folderName: "HR_Policies",
    code: "23",
    voilation: ["2", "Violations"],
    comment: "25 sceonds ago",
    files:[
      {
        id:1,
        fileName:'Q1_Sales_Report.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'Marketing_Strategy_Plan.docx',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'Client_Agreement_2024.pdf',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'Product_Roadmap.pptx',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'Design_Specs_Spring2024.pdf',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'Annual_Budget.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'Research_Summary.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'Employee_Handbook.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'Legal_Contract_Template.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'Vendor_Payment_Invoice_1234.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'Customer_Survey_Results.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'Project_Timeline_Schedule.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:13,
        fileName:'Training_Session_Agenda.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:14,
        fileName:'Team_Meeting_Notes_05152024.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:15,
        fileName:'Product_Feature_List.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:12,
    folderName: "Legal_Documents",
    code: "53",
    voilation: ["4", "Violations"],
    comment: "25 sceonds ago",
    files:[
      {
        id:1,
        fileName:'Q1_Sales_Report.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'Marketing_Strategy_Plan.docx',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'Client_Agreement_2024.pdf',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'Product_Roadmap.pptx',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'Design_Specs_Spring2024.pdf',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'Annual_Budget.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'Research_Summary.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'Employee_Handbook.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'Legal_Contract_Template.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'Vendor_Payment_Invoice_1234.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'Customer_Survey_Results.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'Project_Timeline_Schedule.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:13,
        fileName:'Training_Session_Agenda.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:14,
        fileName:'Team_Meeting_Notes_05152024.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:15,
        fileName:'Product_Feature_List.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:13,
    folderName: "Vendor_Invoices",
    code: "53",
    voilation: ["4", "Violations"],
    comment: "25 sceonds ago",
    files:[
      {
        id:1,
        fileName:'Q1_Sales_Report.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'Marketing_Strategy_Plan.docx',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'Client_Agreement_2024.pdf',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'Product_Roadmap.pptx',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'Design_Specs_Spring2024.pdf',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'Annual_Budget.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'Research_Summary.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'Employee_Handbook.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'Legal_Contract_Template.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'Vendor_Payment_Invoice_1234.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'Customer_Survey_Results.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'Project_Timeline_Schedule.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:13,
        fileName:'Training_Session_Agenda.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:14,
        fileName:'Team_Meeting_Notes_05152024.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:15,
        fileName:'Product_Feature_List.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  },
  {
    id:14,
    folderName: "Customer_Feedback",
    code: "53",
    voilation: ["4", "Violations"],
    comment: "25 sceonds ago",
    files:[
      {
        id:1,
        fileName:'Q1_Sales_Report.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:2,
        fileName:'Marketing_Strategy_Plan.docx',
        fileVoilation: [1, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:3,
        fileName:'Client_Agreement_2024.pdf',
        fileVoilation: [15, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:4,
        fileName:'Product_Roadmap.pptx',
        fileVoilation: [3, "violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:5,
        fileName:'Design_Specs_Spring2024.pdf',
        fileVoilation: [5, "violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:6,
        fileName:'Annual_Budget.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:7,
        fileName:'Research_Summary.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:8,
        fileName:'Employee_Handbook.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "21 hours"
      },
      {
        id:9,
        fileName:'Legal_Contract_Template.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:10,
        fileName:'Vendor_Payment_Invoice_1234.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:11,
        fileName:'Customer_Survey_Results.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "25 sceonds ago"
      },
      {
        id:12,
        fileName:'Project_Timeline_Schedule.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:13,
        fileName:'Training_Session_Agenda.docx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:14,
        fileName:'Team_Meeting_Notes_05152024.pdf',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      },
      {
        id:15,
        fileName:'Product_Feature_List.xlsx',
        fileVoilation: [null, "No violations"],
        fileCommit: "22 hours ago"
      }
    ]
  }
]


export const AIBOOM_CHART = {
  height: 100,
  width: 450,
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
      data: [40, 82.1, 88.7, 70.1, 53.4, 85.1, 85.1,85.1],
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

export const TABS_DATA = [
  {
    id:1,
    indexes:0
  },
  {
    id:2,
    indexes:1
  },
  {
    id:3,
    indexes:2
  },
  {
    id:4,
    indexes:3
  }
]