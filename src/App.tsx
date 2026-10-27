import { Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import GamingPage from './pages/gamingPage.jsx';
import ExclusivePage from './pages/exclusivePage.jsx';
import ConfiguratorPage from './pages/configuratorPage.jsx';
import ComponentsPage from './pages/componentsPage.jsx';

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gaming" element={<GamingPage />} />
        <Route path="/exclusive" element={<ExclusivePage />} />
        <Route path="/configurator" element={<ConfiguratorPage />} />
        <Route path="/components" element={<ComponentsPage />} />
      </Routes>
    </>
  );
}
