import React, { useState } from 'react';
import { ClipboardList, BarChart3, Settings, Package } from 'lucide-react';
import KOTGenerator from '../components/KOTGenerator';
import AnalyticsDashboard from '../components/AnalyticsDashboard';
import InventoryManager from '../components/InventoryManager';

const ManagerDashboard = () => {
  const [activeTab, setActiveTab] = useState('live');

  // Mobile Bottom Navigation for Manager
  const TabButton = ({ id, icon: Icon, label }) => (
    <button 
      onClick={() => setActiveTab(id)}
      style={{
        flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px',
        padding: '10px 0', border: 'none', background: 'transparent',
        color: activeTab === id ? '#f97316' : '#94a3b8', fontWeight: 'bold', fontSize: '10px'
      }}
    >
      <Icon size={20} /> {label}
    </button>
  );

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Top Status Bar */}
      <div style={{ padding: '15px 20px', background: '#0f172a', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '18px', margin: 0 }}>AR Manager</h2>
        <div style={{ fontSize: '10px', background: '#22c55e', padding: '4px 8px', borderRadius: '5px' }}>LIVE</div>
      </div>

      <div style={{ padding: '15px' }}>
        {activeTab === 'live' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Live Orders</h3>
            {/* Sample Order for Mobile View */}
            <KOTGenerator 
              orderId="104" table="02" source="Dine-In" timestamp="04:30 PM"
              items={[{name: 'Mutton Biryani', qty: 1, category: 'non-veg'}]} 
            />
          </div>
        )}
        
        {activeTab === 'analytics' && <AnalyticsDashboard />}
        
        {activeTab === 'inventory' && (
          <InventoryManager 
            menuData={[]} // Pass your menu state here
            currentGoogleLink="https://g.page/review"
          />
        )}
      </div>

      {/* Persistent Mobile Navigation */}
      <nav style={{ 
        position: 'fixed', bottom: 0, left: 0, right: 0, 
        background: '#fff', display: 'flex', borderTop: '1px solid #e2e8f0',
        padding: '5px 0', zIndex: 1000 
      }}>
        <TabButton id="live" icon={ClipboardList} label="ORDERS" />
        <TabButton id="analytics" icon={BarChart3} label="SALES" />
        <TabButton id="inventory" icon={Package} label="MENU" />
      </nav>
    </div>
  );
};

export default ManagerDashboard;