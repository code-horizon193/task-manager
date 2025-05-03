import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SideBar from './components/SideBar';
import Projects from './pages/Projects';
import Notes from './pages/Notes';
import Team from './pages/Team';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

import { useAppContext } from './context/contextAPI';
import Header from './components/Header';
import Favorite from './pages/Favorite';

function App() {
  const { sideBar } = useAppContext();
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-white dark:bg-darkmode dark:text-white transition-all duration-300">
      <BrowserRouter>
        <div>
          <SideBar />
          <main className={`ml-0 lg:ml-60 transition-all duration-300 relative`}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/team" element={<Team />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
