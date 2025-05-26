import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GymMemberships from './pages/GymMemberships';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gyms" element={<GymMemberships />} />
      </Routes>
    </Layout>
  );
}

export default App;