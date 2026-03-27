import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function AppLayout() {
  return (
    <div className="font-sans antialiased text-gray-800 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 mt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
