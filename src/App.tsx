import { Routes, Route, useNavigate } from 'react-router-dom';
import { Suspense } from 'react';


import MainLayout from './layout/MainLayout';
import ErrorPage from './pages/error/ErrorPage';

import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
  const navigate = useNavigate();
  return (
    <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
        </Route>
        <Route path="/error/:code?" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
