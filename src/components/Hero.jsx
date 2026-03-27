import React from 'react';
import { FiDownload, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { getAssetPath } from '../utils/assetHelper';

function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center bg-no-repeat bg-cover bg-fixed"
      style={{ backgroundImage: `url('${getAssetPath('/assets/Mount-Rainier.jpg')}')`, backgroundPosition: '10% 0', padding: '110px 0 140px' }}
    >
      <div className="absolute inset-0 bg-[#050407] opacity-60"></div>
      <div className="relative text-center px-4">
      <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-600 mb-4 text-white">
          Vaishnavi Subramanian
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-white">
          AI Engineer | Data Scientist
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact"
            className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg hover:bg-[#353240] hover:text-white transition"
          >
            <FiMail className="mr-2" /> GET IN TOUCH
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Hero;