import Image from 'next/image';
import React, { useCallback } from 'react';
import ReactFlow, { Background, Controls, MiniMap,addEdge, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';
import apx from "@/common/assets/images/apx.svg";

const initialNodes = [
  // Main Row Nodes
  {
    id: '1',
    data: {
      label: (
        <>
          <Image src={apx} alt="" width={100} height={100} />
        </>
      ),
      Style: {
        color: "red",
      },
    },
    position: { x: 170, y: 80  },
  },
  {
    id: '2',
    data: {
      label: (
        <>
          <Image src={apx} alt="" width={100} height={100} />
        </>
      ),
      Style: {
        color: "red",
      },
    },
    position: { x: 370, y: 80  },
  },
  {
    id: '3',
    data: {
      label: (
        <>
          <Image src={apx} alt="" width={100} height={100} />
        </>
      ),
      Style: {
        color: "red",
      },
    },
    position: { x: 470, y: 80  },
  },
  {
    id: '4',
    data: {
      label: (
        <>
          <Image src={apx} alt="" width={100} height={100} />
        </>
      ),
      Style: {
        color: "red",
      },
    },
    position: { x: 570, y: 80  },
  },
  {
    id: '5',
    data: {
      label: (
        <>
          <Image src={apx} alt="" width={100} height={100} />
        </>
      ),
      Style: {
        color: "red",
      },
    },
    position: { x: 570, y: 80  },
  },
  {
    id: '6',
    data: {
      label: (
        <>
          <Image src={apx} alt="" width={100} height={100} />
        </>
      ),
      Style: {
        color: "red",
      },
    },
    position: { x: 570, y: 80  },
  },
  // Nodes to the left of Node 1
//   {
//   id: '1a',
//   data: {
//     label: (
//       <div>
//         <h3>Node 1a Header</h3>
//         <p>This is a complete HTML element.</p>
//         <button>Click me</button>
//       </div>
//     ),
//   },
//   position: { x: 200, y: 0 },
// },
//   {
//     id: '1b',
//     data: { label: 'Node 1b' },
//     position: {  x: 200, y: 150 },
//   },
//   {
//     id: '1c',
//     data: { label: 'Node 1c' },
//     position: {  x: 200, y: 200 },
//   },
  // Nodes to the right of Node 3
  // {
  //   id: '3a',
  //   data: { label: 'Node 3a' },
  //   position: { x: 950, y: 25 },
  // },
  // {
  //   id: '3b',
  //   data: { label: 'Node 3b' },
  //   position: { x:950, y: 175 },
  // },
];

const initialEdges = [
  { type: "", id: "1", source: "1", target: "1" , animated:true},
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

const edges:any = [];

const MyFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<any>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<any>(initialEdges);
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  return (
    <div style={{ height: '50vh', width: '100%'}} className='imag-map'>
    <ReactFlow 
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}>
    </ReactFlow>
  </div>
  );
};

export default MyFlow;
