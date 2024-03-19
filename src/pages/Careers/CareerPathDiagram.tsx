
import React from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'react-flow-renderer';

// Define the initial nodes
const initialNodes = [
  { id: 'entry', type: 'default', data: { label: 'Entry Level Developer' }, position: { x: 0, y: 0 } },
  { id: 'frontend', type: 'default', data: { label: 'Frontend Developer' }, position: { x: -300, y: 100 } },
  { id: 'backend', type: 'default', data: { label: 'Backend Developer' }, position: { x: 0, y: 100 } },
  { id: 'devops', type: 'default', data: { label: 'DevOps Engineer' }, position: { x: 300, y: 100 } },
  { id: 'senior-frontend', type: 'default', data: { label: 'Senior Frontend Developer' }, position: { x: -300, y: 200 } },
  { id: 'senior-backend', type: 'default', data: { label: 'Senior Backend Developer' }, position: { x: 0, y: 200 } },
  { id: 'senior-devops', type: 'default', data: { label: 'Senior DevOps Engineer' }, position: { x: 300, y: 200 } },
  { id: 'frontend-lead', type: 'default', data: { label: 'Frontend Tech Lead' }, position: { x: -300, y: 300 } },
  { id: 'backend-architect', type: 'default', data: { label: 'Backend Architect' }, position: { x: 0, y: 300 } },
  { id: 'cloud-architect', type: 'default', data: { label: 'Cloud Architect' }, position: { x: 300, y: 300 } },
  
];

// Define the edges connecting the nodes
const initialEdges = [
  { id: 'e-entry-frontend', source: 'entry', target: 'frontend', arrowHeadType: 'arrow', type: 'smoothstep' },
  { id: 'e-entry-backend', source: 'entry', target: 'backend', arrowHeadType: 'arrow', type: 'smoothstep' },
  { id: 'e-entry-devops', source: 'entry', target: 'devops', arrowHeadType: 'arrow', type: 'smoothstep' },
  { id: 'e-frontend-senior', source: 'frontend', target: 'senior-frontend', arrowHeadType: 'arrow', type: 'smoothstep' },
  { id: 'e-backend-senior', source: 'backend', target: 'senior-backend', arrowHeadType: 'arrow', type: 'smoothstep' },
  { id: 'e-devops-senior', source: 'devops', target: 'senior-devops', arrowHeadType: 'arrow', type: 'smoothstep' },
  { id: 'e-senior-frontend-lead', source: 'senior-frontend', target: 'frontend-lead', arrowHeadType: 'arrow', type: 'smoothstep' },
  { id: 'e-senior-backend-architect', source: 'senior-backend', target: 'backend-architect', arrowHeadType: 'arrow', type: 'smoothstep' },
  { id: 'e-senior-devops-cloud', source: 'senior-devops', target: 'cloud-architect', arrowHeadType: 'arrow', type: 'smoothstep' },
];

const nodeStyle: React.CSSProperties = {
  background: '#FFFFFF',
  color: '#000000',
  borderRadius: '10px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  fontSize: '14px',
  fontWeight: 'bold',
  textAlign: 'center', 
  display: 'flex',
  flexDirection: 'column', 
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
};

// Define the React Flow component
const CareerPathDiagram = () => {
return (
  <div style={{ 
      height: 800, 
      border: '2px solid #000',
      padding: '10px',
      boxSizing: 'border-box',
      borderRadius: '20px',
  }}>
    <ReactFlow
      nodes={initialNodes.map(node => ({
        ...node,
        style: nodeStyle,
      }))}
      edges={initialEdges}
      fitView
      nodesConnectable={false}
      nodesDraggable={false}
      zoomOnScroll={false}
      zoomOnDoubleClick={false}
    >
      <MiniMap
        nodeColor={(node) => {
          switch (node.type) {
            case 'input': return 'red';
            case 'default': return '#00ff00';
            case 'output': return 'rgb(0,0,255)';
            default: return '#eee';
          }
        }}
        nodeStrokeWidth={3}
      />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  </div>
);
};

export default CareerPathDiagram;