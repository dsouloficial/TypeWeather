import { Routes, Route } from 'react-router-dom';

import { Search } from '../pages/Search';
import { Dashboard } from '../pages/Dashboard';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}