import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { User, ShieldCheck } from 'lucide-react';

// Import all the components we built
import DemoEngine from './pages/DemoEngine'; // Your original Menu page
import ManagerDashboard from './pages/ManagerDashboard';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <BrowserRouter>
      <div style={{ position: 'relative', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
        
        {/* 🛠️ THE DEMO SWITCHER (Hidden "Pro" Toggle) */}
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          display: 'flex',
          gap: '10px'
        }}>
          <Link 
            to="/" 
            onClick={() => setIsAdmin(false)}
            style={{
              padding: '12px 20px',
              background: !isAdmin ? '#f97316' : '#fff',
              color: !isAdmin ? '#fff' : '#1e293b',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid #e2e8f0'
            }}
          >
            <User size={18}/> Customer Menu
          </Link>

          <Link 
            to="/manager" 
            onClick={() => setIsAdmin(true)}
            style={{
              padding: '12px 20px',
              background: isAdmin ? '#1e293b' : '#fff',
              color: isAdmin ? '#fff' : '#1e293b',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid #e2e8f0'
            }}
          >
            <ShieldCheck size={18}/> Manager Portal
          </Link>
        </div>

        {/* 🚦 NAVIGATION ROUTES */}
        <Routes>
          <Route path="/" element={<DemoEngine />} />
          <Route path="/manager" element={<ManagerDashboard />} />
        </Routes>

        {/* 🎨 GLOBAL STYLES (Paste this into your index.css too) */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
          
          body { margin: 0; padding: 0; background: #f8fafc; }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes scaleIn {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }

          /* Hide scrollbar for Chrome, Safari and Opera */
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
    </BrowserRouter>
  );
}

export default App;