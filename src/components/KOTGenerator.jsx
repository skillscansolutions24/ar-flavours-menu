import React from 'react';
import { Printer, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const KOTGenerator = ({ orderId, table, items, timestamp, source, status }) => {
  
  // High-visibility status colors for busy kitchens
  const getHeaderColor = () => {
    if (status === 'urgent') return '#ef4444'; // Red for delayed orders
    if (source === 'Swiggy') return '#fc8019'; // Swiggy Orange
    if (source === 'Zomato') return '#cb202d'; // Zomato Red
    return '#1e293b'; // Standard Dine-in Dark
  };

  return (
    <div style={{
      background: '#fff',
      width: '100%',
      maxWidth: '340px',
      borderRadius: '12px',
      border: `2px solid ${getHeaderColor()}`,
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      fontFamily: '"Courier New", Courier, monospace', // Thermal printer feel
    }}>
      
      {/* 🎫 HEADER SECTION (High Visibility) */}
      <div style={{ 
        background: getHeaderColor(), 
        padding: '12px 15px', 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <div>
          <div style={{ fontSize: '10px', opacity: 0.8, fontWeight: 'bold' }}>{source.toUpperCase()} ORDER</div>
          <div style={{ fontSize: '20px', fontWeight: '900' }}>#{orderId}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '10px', opacity: 0.8, fontWeight: 'bold' }}>TABLE</div>
          <div style={{ fontSize: '28px', fontWeight: '900' }}>{table === 'N/A' ? 'WEB' : table}</div>
        </div>
      </div>

      {/* ⏰ TIME ELAPSED BAR */}
      <div style={{ 
        background: '#f8fafc', 
        padding: '6px 15px', 
        fontSize: '11px', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '5px', 
        borderBottom: '1px solid #e2e8f0' 
      }}>
        <Clock size={12} /> Received at {timestamp} 
        {status === 'urgent' && <span style={{color: '#ef4444', fontWeight:'bold', marginLeft:'auto'}}>!!! DELAYED !!!</span>}
      </div>

      {/* 🍜 ITEM LIST (BIG & BOLD) */}
      <div style={{ padding: '15px' }}>
        {items.map((item, index) => (
          <div key={index} style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            padding: '10px 0', 
            borderBottom: '1px solid #f1f5f9' 
          }}>
            <div style={{ 
              fontSize: '22px', 
              fontWeight: '900', 
              marginRight: '15px', 
              minWidth: '35px',
              color: '#1e293b'
            }}>
              {item.qty} x
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '18px', fontWeight: '700', textTransform: 'uppercase' }}>
                {item.name}
              </div>
              {item.notes && (
                <div style={{ fontSize: '12px', color: '#ef4444', fontWeight: 'bold', marginTop: '4px' }}>
                  <AlertCircle size={10} style={{display:'inline', marginRight: '3px'}}/> {item.notes}
                </div>
              )}
            </div>
            <div style={{ fontSize: '14px' }}>
              {item.category === 'veg' ? '🟢' : '🔴'}
            </div>
          </div>
        ))}
      </div>

      {/* ⚙️ ACTION FOOTER */}
      <div style={{ padding: '15px', display: 'flex', gap: '10px' }}>
        <button style={{ 
          flex: 1, 
          padding: '12px', 
          background: '#1e293b', 
          color: 'white', 
          border: 'none', 
          borderRadius: '8px', 
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
          <Printer size={18} /> PRINT
        </button>
        <button style={{ 
          flex: 2, 
          padding: '12px', 
          background: '#22c55e', 
          color: 'white', 
          border: 'none', 
          borderRadius: '8px', 
          fontWeight: '900',
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
          <CheckCircle2 size={20} /> READY
        </button>
      </div>
    </div>
  );
};

export default KOTGenerator;