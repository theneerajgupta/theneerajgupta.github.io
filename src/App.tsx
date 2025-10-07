import './styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Blog from './pages/Blog';
import { Suspense } from 'react';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';

function App() {
  const navigate = useNavigate();
  return (
    <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
