import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { User, ShieldCheck } from 'lucide-react';

// Unified Imports - Ensure these filenames match your /src/pages/ folder exactly
import CustomerMenu from './pages/CustomerMenu'; 
import ManagerDashboard from './pages/ManagerDashboard';

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', fontFamily: '"Inter", sans-serif' }}>
        
        {/* 🛠️ NAVIGATION ROUTES */}
        <Routes>
          <Route path="/" element={<CustomerMenu />} />
          <Route path="/manager" element={<ManagerDashboard />} />
        </Routes>

        {/* 📱 MOBILE FLOATING NAV (For Demo Purposes) */}
        <div style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          display: 'flex',
          gap: '10px',
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '8px',
          borderRadius: '40px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.3)'
        }}>
          <Link 
            to="/" 
            style={{
              padding: '10px 18px',
              background: '#f97316',
              color: '#fff',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <User size={16}/> Customer
          </Link>

          <Link 
            to="/manager" 
            style={{
              padding: '10px 18px',
              background: '#1e293b',
              color: '#fff',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <ShieldCheck size={16}/> Manager
          </Link>
        </div>

        {/* 🎨 GLOBAL STYLES FIXES */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
          
          body { 
            margin: 0; 
            padding: 0; 
            background: #f8fafc; 
            -webkit-font-smoothing: antialiased;
          }

          /* Utility to hide scrollbars on mobile */
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </BrowserRouter>
  );
}

export default App;