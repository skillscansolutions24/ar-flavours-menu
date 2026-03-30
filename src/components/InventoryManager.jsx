import React, { useState } from 'react';
import { Power, Edit3, Save, Trash2, Link2, DollarSign, Package } from 'lucide-react';

const InventoryManager = ({ menuData, setMenuData, currentGoogleLink, setGoogleLink }) => {
  const [editingId, setEditingId] = useState(null);
  const [tempPrice, setTempPrice] = useState("");

  const toggleStock = (id) => {
    setMenuData(menuData.map(item => 
      item.id === id ? { ...item, inStock: !item.inStock } : item
    ));
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setTempPrice(item.price);
  };

  const savePrice = (id) => {
    setMenuData(menuData.map(item => 
      item.id === id ? { ...item, price: Number(tempPrice) } : item
    ));
    setEditingId(null);
  };

  return (
    <div style={{ padding: '25px', background: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '20px', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Package color="#f97316" /> Menu & Reputation Control
        </h2>
        <div style={{ padding: '8px 15px', background: '#f0fdf4', color: '#16a34a', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold' }}>
          LIVE SYNC ACTIVE
        </div>
      </div>

      {/* 📍 REPUTATION LINK CONTROL */}
      <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '15px', marginBottom: '30px', border: '1px solid #e2e8f0' }}>
        <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#64748b', display: 'block', marginBottom: '8px' }}>
          GOOGLE MAPS REVIEW LINK
        </label>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Link2 size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
            <input 
              value={currentGoogleLink} 
              onChange={(e) => setGoogleLink(e.target.value)}
              style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '10px', border: '1px solid #e2e8f0' }}
            />
          </div>
          <button style={{ padding: '12px 20px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold' }}>Update</button>
        </div>
      </div>

      {/* 🥘 QUICK INVENTORY LIST */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <h3 style={{ fontSize: '14px', color: '#64748b', textTransform: 'uppercase' }}>Quick Stock Toggle</h3>
        {menuData.map(item => (
          <div key={item.id} style={{ 
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
            padding: '15px', border: '1px solid #f1f5f9', borderRadius: '15px',
            opacity: item.inStock ? 1 : 0.6,
            transition: '0.3s'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img src={item.img} style={{ width: '50px', height: '50px', borderRadius: '10px', objectFit: 'cover' }} />
              <div>
                <b style={{ fontSize: '15px' }}>{item.name}</b>
                <div style={{ color: '#f97316', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  {editingId === item.id ? (
                    <input 
                      type="number" 
                      value={tempPrice} 
                      onChange={(e) => setTempPrice(e.target.value)}
                      style={{ width: '60px', padding: '2px 5px', border: '1px solid #2563eb' }}
                    />
                  ) : (
                    `₹${item.price}`
                  )}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              {editingId === item.id ? (
                <button onClick={() => savePrice(item.id)} style={{ padding: '8px', background: '#22c55e', color: 'white', border: 'none', borderRadius: '8px' }}>
                  <Save size={18} />
                </button>
              ) : (
                <button onClick={() => startEdit(item)} style={{ padding: '8px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                  <Edit3 size={18} color="#64748b" />
                </button>
              )}
              
              <button 
                onClick={() => toggleStock(item.id)}
                style={{ 
                  display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 15px', 
                  background: item.inStock ? '#f1f5f9' : '#ef4444', 
                  color: item.inStock ? '#1e293b' : 'white',
                  border: 'none', borderRadius: '8px', fontWeight: 'bold'
                }}
              >
                <Power size={16} /> {item.inStock ? "IN STOCK" : "OUT"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryManager;