import { FaCloud } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { MdOutlineScience } from "react-icons/md";
import { SiPython } from "react-icons/si";
import { Link } from "react-router-dom";

 const capabilities = [
  {
    icon: <FaCloud size={60} style={{ color: '#655e7a' }} />,
    title: 'DATA PIPELINES',
    desc: 'Aggregate data from a wide variety of sources, including external APIs'
  },
  {
    icon: <SiPython size={60} style={{ color: '#655e7a' }} />,
    title: 'MACHINE LEARNING',
    desc: 'Build and deploy advanced statistical models in Python and R'
  },
  {
    icon: <FiMonitor size={60} style={{ color: '#655e7a' }} />,
    title: 'Streamlit and Power BI',
    desc: 'Design and deploy interactive dashboards using Streamlit and Power BI'
  },
  {
    icon: <MdOutlineScience size={60} style={{ color: '#655e7a' }} />,
    title: 'A/B TESTING',
    desc: 'Run online experiments to test new features, designs, and products'
  },
 
];

function Capability() {

return (
    <>
       {/* Capabilities Strip */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {capabilities.map((cap) => (
                    <div key={cap.title} className="flex flex-col items-center">
                      <div className="mb-4">{cap.icon}</div>
                      <h3 className="text-lg font-600 mb-2 tracking-wide" style={{ color: '#655e7a' }}>
                        {cap.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{cap.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
      
            {/* Dark CTA Banner */}
            <section className="py-20 text-center" style={{ backgroundColor: '#4a4a5a' }}>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                Data analysis from start to finish
              </h2>
              <p className="text-sm text-gray-300 max-w-xl mx-auto mb-8">
                With experience in data science and AI engineering, I have a broad set of skills
                that enable me to cover the entire analysis process.
              </p>
              <Link
                to="/projects"
                className="inline-block px-8 py-3 border border-white text-white text-sm font-bold tracking-widest hover:bg-white transition"
                style={{ color: 'white' }}
                onMouseEnter={e => { e.target.style.color = '#655e7a'; }}
                onMouseLeave={e => { e.target.style.color = 'white'; }}
              >
                SEE PROJECTS
              </Link>
            </section>
    </>
  );
}
export default Capability;