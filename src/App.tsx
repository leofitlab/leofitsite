import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GymMemberships from './pages/GymMemberships';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfServices from './pages/TermOfService';
import Contact from './pages/Contact';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gyms" element={<GymMemberships />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
         <Route path="/termOfServices" element={<TermOfService />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Layout>
  );
}

export default App;
