import React from 'react';
import Projects from '../components/Projects';
import { getAssetPath } from '../utils/assetHelper';

export default function ProjectsPage() {
  return (
    <>
      <section
        className="relative flex items-center justify-center bg-no-repeat bg-cover bg-fixed"
        style={{ backgroundImage: `url('${getAssetPath('/assets/Mount-Rainier.jpg')}')`, backgroundPosition: '10% 0', padding: '110px 0 140px' }}
      >
        <div className="absolute inset-0 bg-[#050407] opacity-60"></div>
        <div className="relative text-center px-4">
          <h1 className="text-4xl font-600 mb-4 text-white">Projects</h1>
        </div>
      </section>
      <div className="font-sans antialiased text-gray-800 min-h-screen flex flex-col">
        <Projects />
      </div>
    </>
  );
}
