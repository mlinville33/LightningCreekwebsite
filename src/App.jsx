import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import DemoPage from './pages/DemoPage';
import CfaTimerPage from './pages/demo/CfaTimerPage';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/software" element={<Navigate to="/services" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/demo/cfaTimer" element={<CfaTimerPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
