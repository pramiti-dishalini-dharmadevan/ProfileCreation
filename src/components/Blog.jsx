import React, { useState } from 'react';

const posts = [
  { id: 1, title: 'SAS Programming for Clinical Analytics', image: '/assets/sas-analysis.avif', link: 'https://substack.com/@vaishnavithecocreater/note/p-168163261?r=2kuclu&utm_source=notes-share-action&utm_medium=web', excerpt: 'Exploring SAS programming techniques used in clinical data analysis and reporting.' },
  { id: 2, title: 'Data Preprocessing', image: '/assets/data-processing.png', link: 'https://substack.com/@vaishnavithecocreater/note/p-162730348?r=2kuclu&utm_source=notes-share-action&utm_medium=web', excerpt: 'Key steps and best practices for cleaning and preparing data for analysis.' },
  { id: 3, title: 'Data Analysis with Python NumPy', image: '/assets/numpy.png', link: 'https://substack.com/@vaishnavithecocreater/note/p-174778385?r=2kuclu&utm_source=notes-share-action&utm_medium=web', excerpt: 'Hands-on guide to numerical data analysis using Python NumPy.' },
  { id: 4, title: 'Application of Programming Interface', image: '/assets/api.svg', link: 'https://substack.com/@vaishnavithecocreater/note/p-153462904?r=2kuclu&utm_source=notes-share-action&utm_medium=web', excerpt: 'Understanding and applying APIs in real-world software development.' },
  { id: 5, title: 'Data Modelling for Ecommerce', image: '/assets/database-diagram.png', link: 'https://substack.com/@vaishnavithecocreater/note/p-152876184?r=2kuclu&utm_source=notes-share-action&utm_medium=web', excerpt: 'Designing effective data models to power ecommerce platforms.' },
  { id: 6, title: 'Insights of Dashboard Visualizations', image: '/assets/power-bi.jpg', link: 'https://substack.com/@vaishnavithecocreater/note/c-79986688?r=2kuclu&utm_source=notes-share-action&utm_medium=web', excerpt: 'Turning raw data into actionable insights through dashboard visualizations.' }
];

const PER_PAGE = 3;

export default function Blog() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(posts.length / PER_PAGE);
  const paginated = posts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <main className="flex-1 mt-20 py-8 md:py-12 max-w-6xl mx-auto w-full px-4">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 min-w-0">
          <div className="space-y-12">
            {paginated.map(post => (
              <div key={post.id}>
                <img src={post.image} alt={post.title} className="w-full object-cover mb-6" style={{ maxHeight: '260px' }} />
                <h2 className="text-xl font-bold mb-2 tracking-wide" style={{ color: '#655e7a' }}>{post.title}</h2>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span>👤 Posted By Vaishnavi</span>
                  <span>🏷</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">{post.excerpt}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-white text-xs font-bold tracking-widest hover:opacity-80 transition inline-block"
                  style={{ backgroundColor: '#655e7a' }}
                >
                  CONTINUE READING
                </a>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-10">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 text-xs font-bold tracking-widest text-white hover:opacity-80 transition disabled:opacity-30"
              style={{ backgroundColor: '#655e7a' }}
            >
              PREV
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className="w-9 h-9 text-xs font-bold transition"
                style={{
                  backgroundColor: page === n ? '#655e7a' : 'transparent',
                  color: page === n ? '#fff' : '#655e7a',
                  border: '1px solid #655e7a'
                }}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 text-xs font-bold tracking-widest text-white hover:opacity-80 transition disabled:opacity-30"
              style={{ backgroundColor: '#655e7a' }}
            >
              NEXT
            </button>
          </div>
        </div>

        <div className="w-full lg:w-72 lg:flex-shrink-0">
          <h3 className="text-base font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-300">Latest Posts</h3>
          <div className="space-y-5">
            {posts.slice(-4).map(post => (
              <a key={post.id} href={post.link} target="_blank" rel="noopener noreferrer" className="flex gap-3 group no-underline">
                <img src={post.image} alt={post.title} className="w-16 h-14 flex-shrink-0 rounded object-cover bg-gray-200" />
                <div>
                  <p className="text-sm font-medium leading-tight group-hover:underline" style={{ color: '#655e7a' }}>{post.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{post.excerpt}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
