import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MPPage from './pages/MPPage';
import PSIPage from './pages/PSIPage';
import SubjectPage from './pages/SubjectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="mp" element={<MPPage />} />
          <Route path="mp/sup" element={<SubjectPage title="MP Sup" track="mp" year="sup" />} />
          <Route path="mp/spe" element={<SubjectPage title="MP Spé" track="mp" year="spe" />} />
          <Route path="psi" element={<PSIPage />} />
          <Route path="psi/sup" element={<SubjectPage title="PSI Sup" track="psi" year="sup" />} />
          <Route path="psi/spe" element={<SubjectPage title="PSI Spé" track="psi" year="spe" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;