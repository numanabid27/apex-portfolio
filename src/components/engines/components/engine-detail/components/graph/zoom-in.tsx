import Image from "next/image";
import { useCallback } from "react";
import ReactFlow, {
  Node,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";

import "reactflow/dist/style.css";

import BlockIcon from "@mui/icons-material/Block";

import SmartToyIcon from "@mui/icons-material/SmartToy";

import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";

import { Typography } from "@mui/material";
import { Style } from "./graph";
import { ImageError } from "next/dist/server/image-optimizer";

const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 710, y: 20 },
    data: {
      label: (
        <>
          <Grid className="Second_Grpah_First_Node" container>
            <SmartToyIcon
              style={{
                fontSize: "24px",
                marginRight: "10px",
                color: "#98A2B3",
              }}
            />
            <span  style={{ fontFamily: 'Inter, sans-serif' }}>Company Slackbot</span>
          </Grid>
          <Box className="seconf_graph_left_Box_Dropdown">
            <p className="heading_span"  style={{ fontFamily: 'Inter, sans-serif' }}>Top Active Users</p>
            <ul className="List">
              <li>
                <p className="list_span"  style={{ fontFamily: 'Inter, sans-serif' }} >1. Anna Smith</p>
                <p className="list_span"  style={{ fontFamily: 'Inter, sans-serif' }}>2. Ben Nathan</p>
                <p className="list_span"  style={{ fontFamily: 'Inter, sans-serif' }}>3. John Smith</p>
              </li>
            </ul>
          </Box>
          <Box className="seconf_graph_right_Box_Dropdown">
            <p className="heading_span"  style={{ fontFamily: 'Inter, sans-serif' }}>Chat Subject</p>
            <ul className="List">
              <li>
                <p className="list_span"  style={{ fontFamily: 'Inter, sans-serif' }}>1. M&A</p>
                <p className="list_span"  style={{ fontFamily: 'Inter, sans-serif' }}>2. Company Quarter Goals</p>
                <p className="list_span"  style={{ fontFamily: 'Inter, sans-serif' }}>3. Code</p>
              </li>
            </ul>
          </Box>
        </>
      ),
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "2",
    position: { x: 800, y: 230 },
    data: {
      label: (
        <>
          <Grid className="Second_Grpah_second_Node" container>
            <p className="description"  style={{ fontFamily: 'Inter, sans-serif' }}>Session name</p>
          </Grid>
        </>
      ),
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "3",
    position: { x: 280, y: 260 },
    data: {
      label: (
        <Grid className="second_graph_third_node" container>
          <Typography style={{ paddingBottom: "20px", width: "100%" }}>
            <a href="https://azure.microsoft.com/" target="_blank">
              <Image
                src="/image/Azura_logo_img.png"
                style={{ position: "relative", top: "7px" }}
                alt="image"
                height={40}
                  width={40}
              />
              <h1
                style={{
                  margin: "0px",
                  display: "inline-block",fontFamily: 'Inter, sans-serif',
                }}
              >
                Azure Open AI
              </h1>
              <img style={{marginTop:"10px" , marginBottom:"10px"}} src="/image/border-line.png" />
            </a>
          </Typography>
        </Grid>
      ),
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "4",
    position: { x: 1080, y: 260 },
    data: {
      label: (
        <Grid className="second_graph_third_node" container>
          <Typography style={{ paddingBottom: "20px", width: "100%" }}>
            <a href="https://openai.com/" target="_blank">
              <Image
                src="/image/openai.png"
                style={{ position: "relative", top: "7px" }}
                alt="image"
                height={40}
                  width={40}
              />
              <h1
                style={{
                  margin: "0px",
                  display: "inline-block",
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Open AI
              </h1>
            </a>
            <img style={{marginTop:"10px" , marginBottom:"10px"}} src="/image/border-line.png" />

          </Typography>
        </Grid>
      ),
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "5",
    position: { x: 315, y: 360 },
    data: {
      label: (
        <Grid className="child_node" container>
          <p  style={{ fontFamily: 'Inter, sans-serif' }}>Azure General</p>
        </Grid>
      ),
      parentNode: "4",
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "6",
    position: { x: 510, y: 360 },
    data: {
      label: (
        <Grid className="child_node" container>
          <p  style={{ fontFamily: 'Inter, sans-serif' }}>Azure R&D</p>
        </Grid>
      ),
      parentNode: "4",
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "7",
    position: { x: 390, y: 410 },
    data: {
      label: (
        <Grid className="child_node" container>
          <p  style={{ fontFamily: 'Inter, sans-serif' }}>Azure Marketing</p>
          <span className="openChip">Open to anyone</span>
        </Grid>
      ),
      parentNode: "4",
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "8",
    position: { x: 1300, y: 360 },
    data: {
      label: (
        <Grid className="child_node" container>
          <p  style={{ fontFamily: 'Inter, sans-serif' }}>GPT 3.5</p>
          <span className="openChip_small">Public</span>
        </Grid>
      ),
      parentNode: "4",
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "9",
    position: { x: 1150, y: 360 },
    data: {
      label: (
        <Grid className="child_node" container>
          <p  style={{ fontFamily: 'Inter, sans-serif' }}>GPT 4</p>
          <span className="openChip_small_cuccess">Private</span>
        </Grid>
      ),
      parentNode: "4",
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "10",
    position: { x: 900, y: 360 },
    data: {
      label: (
        <Grid className="child_node" container>
          <p  style={{ fontFamily: 'Inter, sans-serif' }}>PII, PCI</p>
        </Grid>
      ),
      parentNode: "4",
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "11",
    position: { x: 700, y: 560 },
    data: {
      label: (
        <>
          <Grid className="Second_Grpah_First_Node" container>
            <SmartToyIcon
              style={{
                fontSize: "19px",
                marginRight: "10px",
                color: "#98A2B3",
                position: "relative",
                top: "5px",
              }}
            />
            <span  style={{ fontFamily: 'Inter, sans-serif' }}>Customer service chatbot</span>
          </Grid>
        </>
      ),
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "12",
    position: { x: 60, y: 530 },
    data: {
      label: (
        <>
          <Grid className="first_node">
            <Box>
              <a
                href="https://www.saleforce.com/"
                className="saleforce_img"
                target="_blank"
              >
                <img src="/image/salesforce.png" alt="image" />
              </a>
              <a
                href="https://www.google.com/drive/"
                className="drive_img"
                target="_blank"
              >
                <img src="/image/drive.png" alt="image" />
              </a>
            </Box>
          </Grid>
          <Box className="bottom_box">
            <p className="node_description"  style={{ fontFamily: 'Inter, sans-serif' }}>Tuned by Apex</p>
          </Box>
        </>
      ),
      className: "MyCLass",
    },
  },
  {
    id: "13",
    position: { x: 1456, y: 530 },
    data: {
      label: (
        <Grid className="fourht_node" container>
          <BlockIcon
            style={{ fontSize: "16px", marginRight: "10px", color: "#F04438" }}
          />
          <span  style={{ fontFamily: 'Inter, sans-serif' }}>Block</span>
        </Grid>
      ),
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "14",
    position: { x: 650, y: 660 },
    data: {
      label: (
        <Grid className="second_graph_thirteenth_node" container>
          <Typography style={{ paddingBottom: "20px", width: "100%" }}>
            <a href="https://github.com/features/copilot" target="_blank">
              <Image
                src="/image/teddy.png"
                style={{ position: "relative", top: "7px" }}
                alt="image"
                height={40}
                  width={40}
              />
              <h1
                style={{
                  margin: "0px",
                  display: "inline-block",
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Co-Pilot
              </h1>
              <img style={{marginTop:"10px" , marginBottom:"10px"}} src="/image/border-line.png" />

            </a>
          </Typography>
        </Grid>
      ),
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "15",
    position: { x: 700, y: 770 },
    data: {
      label: (
        <Grid className="child_node" container>
          <p  style={{ fontFamily: 'Inter, sans-serif' }}>Codex General</p>
          <span className="openChip "  style={{ fontFamily: 'Inter, sans-serif' }}>Suspicious data</span>
        </Grid>
      ),
      parentNode: "14",
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "16",
    position: { x: 913, y: 770 },
    data: {
      label: (
        <Grid className="child_node" sx={{ width: "200px" }} container>
          <p  style={{ fontFamily: 'Inter, sans-serif' }}>Codex Project X</p>
        </Grid>
      ),
      parentNode: "14",
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "17",
    position: { x: 1300, y: 640 },
    data: {
      label: (
        <Grid className="third_node" container>
          <Typography
            style={{
              borderBottom: "1px solid #D0D5DD",
              paddingBottom: "20px",
              width: "100%",
            }}
          >
            <a href="github.com">
              <Image
                src="/image/github.png"
                style={{ position: "relative", top: "7px" }}
                alt="image"
                height={40}
                  width={40}
              />
              <h1
                style={{
                  margin: "0px",
                  display: "inline-block",
                  width: "100%",
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Github
              </h1>
            </a>
          </Typography>
        </Grid>
      ),
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "18",
    position: { x: 1310, y: 770 },
    data: {
      label: (
        <Grid className="child_node" container>
          <p  style={{ fontFamily: 'Inter, sans-serif' }}>Repo 1</p>
        </Grid>
      ),
      parentNode: "17",
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "19",
    position: { x: 1435, y: 770 },
    data: {
      label: (
        <Grid className="child_node" container>
          <p  style={{ fontFamily: 'Inter, sans-serif' }}>Repo 2</p>
        </Grid>
      ),
      parentNode: "17",
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "20",
    position: { x: 200, y: 780 },
    data: {
      label: (
        <Grid className="child_node" container>
          <p  style={{ fontFamily: 'Inter, sans-serif' }}>Contractors SSO access</p>
        </Grid>
      ),
      parentNode: "4",
      Style: {
        color: "red",
      },
    },
  },
];

const initialEdges = [
  { type: "smoothstep", id: "1", source: "1", target: "2" , animated:true},
  { type: "smoothstep", id: "2", source: "2", target: "5" , animated:true},
  { type: "smoothstep", id: "4", source: "2", target: "10" , animated:true},
  { type: "smoothstep", id: "5", source: "10", target: "8" , animated:true},
  { type: "smoothstep", id: "6", source: "5", target: "12" , animated:true},
  { type: "smoothstep", id: "7", source: "5", target: "11" , animated:true},
  { type: "smoothstep", id: "8", source: "9", target: "11" , animated:true},
  { type: "smoothstep", id: "9", source: "8", target: "13" , animated:true},
  { type: "smoothstep", id: "10", source: "13", target: "17" , animated:true},
  { type: "smoothstep", id: "11", source: "17", target: "14" , animated:true},
  { type: "smoothstep", id: "12", source: "14", target: "20" , animated:true},
];
function ZoomIn() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  return (
    <>
      <Grid container sx={Style.FlowChart} style={{ zoom: 0.7  , justifyContent:"center"}} className="graph-map" >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          zoomOnScroll={false}   // Disable zooming via mou
          onConnect={onConnect}
          className="mynodes"
        >  
        </ReactFlow>
      </Grid>
    </>
  );
}

export default ZoomIn;
