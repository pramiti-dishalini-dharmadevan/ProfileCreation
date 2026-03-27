import React, { useState } from 'react';
import { getAssetPath } from '../utils/assetHelper';

const allProjects = [
  { title: 'Relgo.ai — AI Engineer', category: 'client', img: getAssetPath('/assets/Relgo-ai.jpg'), sub: 'Building intelligence for business requirements as an AI Engineer, developing smart solutions to automate and enhance enterprise workflows.' },
  { title: 'Research Data OneLake Platform', category: 'client', img: getAssetPath('/assets/onelake-architecture.png'), sub: 'Centralized research and clinical data pipelines into Microsoft Fabric OneLake using Azure Data Factory and APIs.' },
  { title: 'Immunotherapy Anomaly Detection System', category: 'client', img: getAssetPath('/assets/Anomaly-Detection.avif'), sub: 'Machine learning models to detect anomalies in high-dimensional immunological research datasets.' },
  { title: 'Enterprise Data Governance with Azure Purview', category: 'client', img: getAssetPath('/assets/Enterprise-Data-Governance.png'), sub: 'Implemented enterprise data governance, cataloging, lineage tracking, and compliance using Azure Purview.' },
  { title: 'Clinical Data Architecture & Compliance Framework', category: 'client', img: getAssetPath('/assets/Clinical-Data-Architecture.png'), sub: 'Designed SQL-based data models and documentation to bridge research data architecture and regulatory compliance.' },
  { title: 'Quantum Data Streaming Pipeline', category: 'client', img: getAssetPath('/assets/Quantum-Data-Streaming.jpg'), sub: 'Real-time data ingestion pipeline using Databricks, PySpark, Docker, and Azure for quantum measurement data.' },
  { title: 'Quantum Experiment Analytics Dashboard', category: 'client', img: getAssetPath('/assets/Quantum-Experiment.png'), sub: 'Streamlit dashboards using Pandas and NumPy to visualize telemetry and experimental performance metrics.' },
  { title: 'Azure Data Lake Claims Analytics Platform', category: 'client', img: getAssetPath('/assets/Data-Lake-Claims.png'), sub: 'Developed ETL pipelines to ingest insurance claims and usage data into Azure Data Lake for analytics.' },
  { title: 'Claims Denial Prediction Model', category: 'client', img: getAssetPath('/assets/Claims-Denial-Prediction.jpg'), sub: 'Built regression and probability models to predict insurance claim denials and reduce processing delays.' },
  { title: 'DocuSign Event Tracking Data Pipeline', category: 'client', img: getAssetPath('/assets/Event-Tracking-Data.png'), sub: 'ETL pipeline to capture DocuSign support events and load them into QlikSense analytics systems.' },
  { title: 'DocuSign Customer Usage Analytics Dashboard', category: 'client', img: getAssetPath('/assets/DocuSign-Customer.jpg'), sub: 'Dimensional models and dashboards to analyze customer journeys and service attachment trends.' },
  { title: 'Azure Stack CI/CD Monitoring Dashboard', category: 'client', img: getAssetPath('/assets/Stack-CI-CD.jpg'), sub: 'Power BI dashboards to track CI/CD pipeline deployment metrics and build performance.' },
  { title: 'Kusto Data Integration and Visualization Platform', category: 'client', img: getAssetPath('/assets/Data-Integration.avif'), sub: 'Developed Kusto functions and console applications to ingest and analyze distributed cluster data.' },
  { title: 'Azure Stack Automation Monitoring System', category: 'client', img: getAssetPath('/assets/Stack-Automation.png'), sub: 'PowerShell automation scripts to monitor Azure Stack CI pipeline runs and reduce manual effort.' },
  { title: 'LangChain Chatbot', category: 'fun', img: getAssetPath('/assets/langchain-chatbot.png'), sub: 'A conversational chatbot built using LangChain, leveraging LLMs to handle dynamic multi-turn conversations.' },
  { title: 'Job Monitoring Tool', category: 'fun', img: getAssetPath('/assets/job-monitoring.avif'), sub: 'A fun tool that monitors job postings using OpenAI and LLMs to surface relevant opportunities and insights in real time.' }
];

const filters = ['All', 'Client projects', 'Just for fun'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = allProjects.filter(p => {
    if (active === 'All') return true;
    if (active === 'Client projects') return p.category === 'client';
    return p.category === 'fun';
  });

  return (
    <main className="flex-1 mt-20 py-12 px-4 max-w-6xl mx-auto w-full">
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className="px-4 py-2 border text-sm font-medium transition"
            style={{
              borderColor: '#655e7a',
              backgroundColor: active === f ? '#655e7a' : '#fff',
              color: active === f ? '#fff' : '#655e7a'
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <div key={p.title} className="relative overflow-hidden cursor-pointer group" style={{ minHeight: '200px' }}>
            <div className="w-full h-full flex flex-col" style={{ minHeight: '200px' }}>
              <img src={p.img} alt={p.title} className="w-full object-cover" style={{ height: '160px' }} />
              <div className="p-4 bg-white border border-gray-200 flex-1">
                <h3 className="text-sm font-bold mb-1" style={{ color: '#655e7a' }}>{p.title}</h3>
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition flex flex-col items-center justify-center px-6">
              <p className="opacity-0 group-hover:opacity-100 text-white text-sm text-center mb-3 transition leading-relaxed">{p.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
