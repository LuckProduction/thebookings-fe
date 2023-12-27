import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/navigation/Navbar';
import Auth from './pages/auth/Auth';

function App() {
  const pagesWithoutNavbarFooter = ['/auth', '/auth/*'];
  const location = useLocation();
  // eslint-disable-next-line max-len
  const shouldShowNavbarFooter = !pagesWithoutNavbarFooter.some((path) => location.pathname.startsWith(path));

  return (
    <>
      {shouldShowNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth/*" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
