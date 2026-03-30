import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ClipboardList, 
  BarChart3, 
  Settings, 
  Bell, 
  LogOut, 
  Search,
  PlusCircle
} from 'lucide-react';

// Import our modular blocks
import KOTGenerator from '../components/KOTGenerator';
import AnalyticsDashboard from '../components/AnalyticsDashboard';
import InventoryManager from '../components/InventoryManager';

const ManagerDashboard = () => {
  const [activeTab, setActiveTab] = useState('live'); // live, analytics, inventory
  const [searchQuery, setSearchQuery] = useState("");

  // Mock Menu Data (State managed here so Inventory can update it)
  const [menuData, setMenuData] = useState([
    { id: 1, name: "Zafrani Mutton Biryani", price: 450, inStock: true, img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=200" },
    { id: 2, name: "Apollo Fish", price: 380, inStock: true, img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=200" },
    { id: 3, name: "Paneer Butter Masala", price: 340, inStock: false, img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200" }
  ]);

  const [googleLink, setGoogleLink] = useState("https://g.page/ar-flavours/review");

  // Mock Live Orders
  const liveOrders = [
    { id: '102', table: '04', source: 'Dine-In', timestamp: '01:25 PM', status: 'preparing', items: [{name: 'Mutton Biryani', qty: 2, category: 'non-veg'}] },
    { id: 'S-88', table: 'N/A', source: 'Swiggy', timestamp: '01:28 PM', status: 'urgent', items: [{name: 'Apollo Fish', qty: 1, category: 'non-veg', notes: 'Extra Spicy'}] },
    { id: 'Z-12', table: 'N/A', source: 'Zomato', timestamp: '01:30 PM', status: 'preparing', items: [{name: 'Paneer Masala', qty: 1, category: 'veg'}] },
  ];

  const NavItem = ({ id, icon: Icon, label }) => (
    <button 
      onClick={() => setActiveTab(id)}
      style={{
        display: 'flex', alignItems: 'center', gap: '12px', width: '100%', padding: '12px 15px',
        background: activeTab === id ? '#f97316' : 'transparent',
        color: activeTab === id ? 'white' : '#94a3b8',
        border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '600', transition: '0.2s'
      }}
    >
      <Icon size={20} /> {label}
    </button>
  );

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f8fafc', overflow: 'hidden' }}>
      
      {/* 🌑 SIDEBAR */}
      <aside style={{ width: '260px', background: '#0f172a', padding: '25px 15px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={{ padding: '0 10px' }}>
          <h1 style={{ color: '#f97316', fontSize: '20px', fontWeight: '900', letterSpacing: '1px', margin: 0 }}>AR FLAVOURS</h1>
          <small style={{ color: '#475569' }}>Manager Pro v1.0</small>
        </div>

        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <NavItem id="live" icon={ClipboardList} label="Live Kitchen" />
          <NavItem id="analytics" icon={BarChart3} label="Business Insights" />
          <NavItem id="inventory" icon={Settings} label="Menu & Controls" />
        </nav>

        <button style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 15px', color: '#ef4444', background: 'transparent', border: 'none', fontWeight: 'bold' }}>
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* ⚪ MAIN CONTENT AREA */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        
        {/* TOP BAR */}
        <header style={{ height: '70px', background: 'white', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 30px' }}>
          <div style={{ position: 'relative', width: '300px' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
            <input 
              placeholder="Search orders, tables..." 
              value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '10px 10px 10px 40px', borderRadius: '10px', border: '1px solid #f1f5f9', background: '#f8fafc' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Hema vardhan</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Admin Access</div>
            </div>
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <Bell size={24} color="#64748b" />
              <span style={{ position: 'absolute', top: '-2px', right: '-2px', background: '#ef4444', width: '8px', height: '8px', borderRadius: '50%' }}></span>
            </div>
          </div>
        </header>

        {/* CONTENT RENDERER */}
        <section style={{ flex: 1, padding: '30px', overflowY: 'auto' }}>
          
          {activeTab === 'live' && (
            <div style={{ animation: 'fadeIn 0.3s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
                <h2 style={{ margin: 0 }}>Live Kitchen Tickets</h2>
                <button style={{ padding: '10px 20px', background: '#1e293b', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', display: 'flex', gap: '8px' }}>
                  <PlusCircle size={18} /> New Manual Order
                </button>
              </div>
              
              {/* GRID OF KOTs */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '25px' }}>
                {liveOrders.map(order => (
                  <KOTGenerator key={order.id} {...order} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && <AnalyticsDashboard />}

          {activeTab === 'inventory' && (
            <InventoryManager 
              menuData={menuData} 
              setMenuData={setMenuData} 
              currentGoogleLink={googleLink} 
              setGoogleLink={setGoogleLink} 
            />
          )}

        </section>
      </main>
    </div>
  );
};

export default ManagerDashboard;