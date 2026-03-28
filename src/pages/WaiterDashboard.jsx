import React from 'react';
import { Bell, Clock, CheckCircle } from 'lucide-react';

const WaiterDashboard = () => {
  const activeOrders = [
    { id: 101, table: "12", items: "Mutton Biryani x2, Coke x1", time: "2 mins ago", status: "New" },
    { id: 102, table: "05", items: "Chicken 65 x1", time: "15 mins ago", status: "Served" }
  ];

  return (
    <div className="app-container" style={{backgroundColor: '#f1f5f9'}}>
      <div className="header" style={{backgroundColor: '#1e293b'}}>
        <h1 style={{margin: 0}}>WAITER PANEL</h1>
        <p style={{opacity: 0.8}}>Live Orders • Kitchen Sync</p>
      </div>

      <div style={{padding: '20px'}}>
        <h3>Active Tables</h3>
        {activeOrders.map(order => (
          <div key={order.id} className="card" style={{display: 'block', borderLeft: order.status === 'New' ? '5px solid #ef4444' : '5px solid #22c55e'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
              <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>Table {order.table}</span>
              <span style={{backgroundColor: order.status === 'New' ? '#fee2e2' : '#dcfce7', padding: '2px 10px', borderRadius: '20px', fontSize: '0.8rem'}}>
                {order.status}
              </span>
            </div>
            <p style={{margin: '5px 0', color: '#475569'}}>{order.items}</p>
            <div style={{display: 'flex', alignItems: 'center', fontSize: '0.8rem', color: '#94a3b8', marginTop: '10px'}}>
              <Clock size={14} style={{marginRight: '5px'}}/> {order.time}
            </div>
            {order.status === 'New' && (
              <button className="btn-primary" style={{width: '100%', marginTop: '15px', backgroundColor: '#1e293b'}}>
                MARK AS SERVED
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaiterDashboard;