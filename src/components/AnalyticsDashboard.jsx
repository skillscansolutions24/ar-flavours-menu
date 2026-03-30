import React from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, ArrowUpRight, Clock } from 'lucide-react';

const AnalyticsDashboard = () => {
  // Mock Data - In the future, this comes from your database
  const stats = [
    { label: 'Total Revenue', value: '₹24,500', growth: '+12%', icon: <DollarSign size={20}/>, color: '#22c55e' },
    { label: 'Average Bill', value: '₹850', growth: '+5%', icon: <TrendingUp size={20}/>, color: '#f97316' },
    { label: 'Table Turnover', value: '45 mins', growth: '-10%', icon: <Clock size={20}/>, color: '#3b82f6' },
    { label: 'New Reviews', value: '18', growth: '+30%', icon: <Users size={20}/>, color: '#8b5cf6' },
  ];

  const topDishes = [
    { name: 'Zafrani Mutton Biryani', orders: 142, revenue: '₹63,900', trend: 85 },
    { name: 'Apollo Fish', orders: 98, revenue: '₹37,240', trend: 60 },
    { name: 'Paneer Butter Masala', orders: 76, revenue: '₹25,840', trend: 45 },
  ];

  return (
    <div style={{ padding: '20px', background: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '24px', margin: 0, color: '#1e293b' }}>Business Insights</h1>
          <p style={{ color: '#64748b', fontSize: '14px' }}>Real-time performance of AR Flavours</p>
        </div>
        <button style={{ padding: '10px 20px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '10px', fontSize: '14px', fontWeight: '600' }}>
          Download Report
        </button>
      </div>

      {/* Quick Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        {stats.map((stat, index) => (
          <div key={index} style={{ background: '#fff', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <div style={{ padding: '10px', background: `${stat.color}15`, color: stat.color, borderRadius: '10px' }}>
                {stat.icon}
              </div>
              <span style={{ fontSize: '12px', color: '#22c55e', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                {stat.growth} <ArrowUpRight size={14}/>
              </span>
            </div>
            <small style={{ color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '11px' }}>{stat.label}</small>
            <h2 style={{ margin: '5px 0 0 0', fontSize: '22px', color: '#1e293b' }}>{stat.value}</h2>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        
        {/* Top Selling Items Card */}
        <div style={{ background: '#fff', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BarChart3 size={20} color="#f97316"/> Top Performing Dishes
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {topDishes.map((dish, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                  <span style={{ fontWeight: '600' }}>{dish.name}</span>
                  <span style={{ color: '#64748b' }}>{dish.orders} Orders</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ width: `${dish.trend}%`, height: '100%', background: '#f97316', borderRadius: '10px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Source Distribution Card */}
        <div style={{ background: '#1e293b', padding: '25px', borderRadius: '16px', color: '#fff' }}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '16px' }}>Order Sources</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', opacity: 0.8 }}>Dine-In</span>
              <b style={{ color: '#f97316' }}>65%</b>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', opacity: 0.8 }}>Swiggy</span>
              <b style={{ color: '#fc8019' }}>20%</b>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', opacity: 0.8 }}>Zomato</span>
              <b style={{ color: '#cb202d' }}>15%</b>
            </div>
          </div>
          <div style={{ marginTop: '30px', padding: '15px', background: '#334155', borderRadius: '12px', fontSize: '12px' }}>
            💡 <b>Insight:</b> Dine-in revenue is up by 15% since launching the 3D Menu.
          </div>
        </div>

      </div>
    </div>
  );
};

export default AnalyticsDashboard;