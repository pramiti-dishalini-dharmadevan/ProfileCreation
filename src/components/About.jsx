import React from 'react';
import { getAssetPath } from '../utils/assetHelper';
import { FiMonitor, FiMail } from 'react-icons/fi';
import { FaCloud, FaTwitter, FaLinkedinIn, FaFacebook } from 'react-icons/fa';
import { SiPython } from 'react-icons/si';
import { MdOutlineScience } from 'react-icons/md';
import { Link } from 'react-router-dom';

const capabilities = [
  { icon: <FiMonitor size={40} style={{ color: '#655e7a' }} />, title: 'R SHINY APPS', desc: 'Design and deploy Shiny dashboards to visualize and interact with data' },
  { icon: <MdOutlineScience size={40} style={{ color: '#655e7a' }} />, title: 'A/B TESTING', desc: 'Run online experiments to test new features, designs, and products' },
  { icon: <SiPython size={40} style={{ color: '#655e7a' }} />, title: 'MACHINE LEARNING', desc: 'Build and deploy advanced statistical models in Python and R' },
  { icon: <FaCloud size={40} style={{ color: '#655e7a' }} />, title: 'DATA PIPELINES', desc: 'Aggregate data from a wide variety of sources, including external APIs' }
];

function About() {
  return (
    <>

      {/* About Me */}
      <section id="about" className="py-20 bg-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2 tracking-widest" style={{ color: '#655e7a' }}>ABOUT ME</h2>
          <p className="text-sm italic text-gray-500 mb-8">
            When I'm not analyzing data, I like to do yoga, meditate, gardening and spending time with family.
          </p>
          <img src={getAssetPath('/assets/Vaishnavi_s.jpeg')} alt="Vaishnavi" className="w-40 h-40 rounded-full object-cover mx-auto mb-8 shadow-lg" />
          <div className="flex justify-center gap-6">
            <a href="mailto:vaish.jana@gmail.com" className="text-gray-500 hover:text-gray-700"><FiMail size={24} /></a>
            <a href="https://www.facebook.com/vaishnavi.uma" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700"><FaFacebook size={24} /></a>
            <a href="https://www.linkedin.com/in/vaishnavi-subramanian/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700"><FaLinkedinIn size={24} /></a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
