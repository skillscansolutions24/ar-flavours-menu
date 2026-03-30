import React, { useState } from 'react';
import FoodCanvas from '../components/FoodCanvas';
import ReputationShield from '../components/ReputationShield';
import { ShoppingCart, Star, Info } from 'lucide-react';

const CustomerMenu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [show3D, setShow3D] = useState(false);

  const categories = ['All', 'Starters', 'Main Course', 'Desserts'];

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', pb: '100px' }}>
      {/* Header */}
      <div style={{ padding: '20px', background: '#fff', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '20px', fontWeight: '800', color: '#1e293b', margin: 0 }}>AR FLAVOURS</h1>
        <div style={{ position: 'relative' }}>
          <ShoppingCart size={24} />
          <span style={{ position: 'absolute', top: -5, right: -5, background: '#f97316', color: '#fff', borderRadius: '50%', width: '18px', height: '18px', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</span>
        </div>
      </div>

      {/* 3D Hero Section - Only loads if user wants it (saves memory) */}
      <div style={{ padding: '15px' }}>
        <div style={{ height: '300px', background: '#000', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
          {show3D ? (
            <FoodCanvas />
          ) : (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', textAlign: 'center', padding: '20px' }}>
              <img src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
              <h3 style={{ zIndex: 1 }}>Experience our 3D Menu</h3>
              <button 
                onClick={() => setShow3D(true)}
                style={{ zIndex: 1, padding: '12px 25px', background: '#f97316', color: 'white', border: 'none', borderRadius: '30px', fontWeight: 'bold', marginTop: '10px' }}
              >
                View in 3D
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', padding: '10px 15px' }} className="no-scrollbar">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{ 
              padding: '8px 20px', borderRadius: '20px', whiteSpace: 'nowrap', border: 'none',
              background: activeCategory === cat ? '#1e293b' : '#fff',
              color: activeCategory === cat ? '#fff' : '#64748b',
              fontWeight: '600', boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div style={{ padding: '15px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {[1, 2].map(item => (
          <div key={item} style={{ background: '#fff', padding: '12px', borderRadius: '15px', display: 'flex', gap: '15px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <img src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=150" style={{ width: '80px', height: '80px', borderRadius: '12px', objectFit: 'cover' }} />
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: '0 0 5px 0' }}>Zafrani Mutton Biryani</h4>
              <p style={{ margin: 0, color: '#f97316', fontWeight: 'bold' }}>₹450</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px', color: '#64748b', fontSize: '12px' }}>
                <Star size={12} fill="#facc15" color="#facc15" /> 4.8 (120 reviews)
              </div>
            </div>
            <button style={{ height: '35px', padding: '0 15px', borderRadius: '8px', border: '1px solid #f97316', color: '#f97316', background: 'transparent', fontWeight: 'bold' }}>ADD</button>
          </div>
        ))}
      </div>

      {/* The Reputation Shield at the bottom */}
      <div style={{ padding: '15px' }}>
        <ReputationShield restaurantName="AR Flavours" googleMapsLink="https://g.page/review" />
      </div>
    </div>
  );
};

export default CustomerMenu;