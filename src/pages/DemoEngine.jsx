import React, { useState, useEffect } from 'react';
import { Star, ChevronRight, Bell, ShoppingBag, X, Plus, Minus, Leaf, Flame, Maximize2, CheckCircle, MapPin } from 'lucide-react';

const DemoEngine = () => {
  const [step, setStep] = useState('menu'); // menu, cart, feedback
  const [cart, setCart] = useState([]);
  const [rating, setRating] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [category, setCategory] = useState('all');
  const [previewItem, setPreviewItem] = useState(null);

  // Auto-scroll to top when steps change
  useEffect(() => { window.scrollTo(0,0); }, [step]);

  const menu = [
    { id: 1, type: 'non-veg', name: "Zafrani Mutton Biryani", price: 450, desc: "Saffron infused tender goat meat with long-grain basmati.", img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, type: 'non-veg', name: "Apollo Fish", price: 380, desc: "Hyderabadi spiced deep-fried fish fillets.", img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=800" },
    { id: 3, type: 'non-veg', name: "Tandoori Chicken Full", price: 580, desc: "Clay oven roasted chicken with mint chutney.", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800" },
    { id: 4, type: 'non-veg', name: "Mutton Seekh Kebab", price: 420, desc: "Minced lamb skewers grilled to perfection.", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800" },
    { id: 5, type: 'non-veg', name: "Chicken 65", price: 320, desc: "Classic spicy tempered chicken appetizer.", img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=800" },
    { id: 6, type: 'non-veg', name: "Butter Chicken", price: 390, desc: "Creamy tomato gravy with grilled chicken chunks.", img: "https://images.unsplash.com/photo-1603894527134-99e44e3f1265?w=800" },
    { id: 7, type: 'non-veg', name: "Prawns Iguru", price: 490, desc: "Spicy South Indian style prawn roast.", img: "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=800" },
    { id: 8, type: 'veg', name: "Paneer Butter Masala", price: 340, desc: "Soft paneer cubes in rich makhani gravy.", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800" },
    { id: 9, type: 'veg', name: "Veg Dum Biryani", price: 310, desc: "Seasonal vegetables slow cooked with aromatic rice.", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800" },
    { id: 10, type: 'veg', name: "Gobi Manchurian", price: 260, desc: "Crispy cauliflower tossed in soy-garlic sauce.", img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800" },
    { id: 11, type: 'veg', name: "Dal Makhani", price: 280, desc: "Overnight slow-cooked black lentils.", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800" },
    { id: 12, type: 'veg', name: "Crispy Corn", price: 240, desc: "Fried sweet corn tossed with peppercorns.", img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800" },
    { id: 13, type: 'veg', name: "Stuffed Mushroom", price: 350, desc: "Cheese filled mushrooms grilled in Tandoor.", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800" },
    { id: 14, type: 'veg', name: "Double Ka Meetha", price: 180, desc: "Fried bread soaked in saffron milk.", img: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=800" },
    { id: 15, type: 'veg', name: "Himalayan Mineral Water", price: 60, desc: "750ml Bottled natural spring water.", img: "https://images.unsplash.com/photo-1616118132261-dd50d60ad435?w=800" }
  ];

  const addToCart = (item) => {
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      setCart(cart.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const updateQty = (id, delta) => {
    setCart(cart.map(i => i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i).filter(i => i.qty > 0));
  };

  const total = cart.reduce((s, i) => s + (i.price * i.qty), 0);

  return (
    <div className="app-container">
      {/* 🔔 KITCHEN NOTIFICATION */}
      {showNotification && (
        <div className="alert-toast" style={{animation: 'slideDown 0.4s forwards'}}>
          <div className="alert-icon"><Bell size={20}/></div>
          <div>
            <b>ORDER SENT!</b>
            <span style={{fontSize:'12px', display:'block', opacity:0.8}}>Chef is preparing your meal for Table 04.</span>
          </div>
        </div>
      )}

      {/* 🖼️ IMAGE PREVIEW MODAL */}
      {previewItem && (
        <div className="modal-overlay" onClick={() => setPreviewItem(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-preview" onClick={() => setPreviewItem(null)}><X size={24}/></button>
            <img src={previewItem.img} className="full-img" alt={previewItem.name}/>
            <div className="modal-info">
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <h2>{previewItem.name}</h2>
                <span className="price-tag">₹{previewItem.price}</span>
              </div>
              <p style={{color: '#64748b', margin: '10px 0 20px'}}>{previewItem.desc}</p>
              <button className="btn-dark" style={{width:'100%', borderRadius: '15px'}} onClick={() => { addToCart(previewItem); setPreviewItem(null); }}>
                ADD TO ORDER
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MENU STEP --- */}
      {step === 'menu' && (
        <>
          <div className="hero-section" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1544145945-f904253d0c71?q=80&w=1000&auto=format&fit=crop')`}}>
            <div style={{display:'flex', alignItems:'center', gap: '5px', fontSize:'11px', textTransform: 'uppercase', letterSpacing: '1px'}}>
              <MapPin size={12}/> Hyderabad
            </div>
            <h1 style={{fontSize: '32px'}}>AR Flavours</h1>
            <p style={{opacity: 0.9}}>Authentic Tastes • Table 04</p>
          </div>

          <div className="tab-container">
            <button onClick={() => setCategory('all')} className={category === 'all' ? 'tab-active' : 'tab'}>All Items</button>
            <button onClick={() => setCategory('veg')} className={category === 'veg' ? 'tab-active' : 'tab'}><Leaf size={14}/> Veg</button>
            <button onClick={() => setCategory('non-veg')} className={category === 'non-veg' ? 'tab-active' : 'tab'}><Flame size={14}/> Non-Veg</button>
          </div>

          <div style={{padding: '0 15px 120px'}}>
            {menu.filter(i => category === 'all' || i.type === category).map(item => (
              <div key={item.id} className="menu-item">
                <div className="img-container" onClick={() => setPreviewItem(item)}>
                  <img src={item.img} className="item-img" />
                  <div className="zoom-hint"><Maximize2 size={14} color="white"/></div>
                </div>
                <div className="item-info">
                  <div style={{display:'flex', justifyContent:'space-between'}}>
                    <b style={{fontSize:'15px'}}>{item.name}</b>
                    {item.type === 'veg' ? <Leaf color="#22c55e" size={14}/> : <Flame color="#ef4444" size={14}/>}
                  </div>
                  <small className="desc-text">{item.desc}</small>
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop: '10px'}}>
                    <span style={{fontWeight: '800', color: '#f97316'}}>₹{item.price}</span>
                    <button className="btn-add" onClick={() => addToCart(item)}>ADD</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {cart.length > 0 && (
            <div className="floating-cart" onClick={() => setStep('cart')}>
              <span><ShoppingBag size={18} style={{marginRight:8}}/> {cart.length} Item(s)</span>
              <b>Pay Bill (₹{total}) <ChevronRight size={18}/></b>
            </div>
          )}
        </>
      )}

      {/* --- CART STEP --- */}
      {step === 'cart' && (
        <div style={{padding: '20px', animation: 'fadeIn 0.3s'}}>
          <div style={{display:'flex', alignItems:'center', gap:'15px', marginBottom: '30px'}}>
            <X onClick={() => setStep('menu')} style={{cursor:'pointer'}}/>
            <h2 style={{margin:0}}>Review Order</h2>
          </div>
          
          {cart.map(item => (
            <div key={item.id} style={{display:'flex', justifyContent:'space-between', padding:'15px 0', borderBottom:'1px solid #f1f5f9'}}>
              <div>
                <b>{item.name}</b>
                <div style={{color: '#64748b', fontSize: '13px'}}>₹{item.price}</div>
              </div>
              <div style={{display:'flex', alignItems:'center', gap:'12px', background: '#f8fafc', padding: '5px 12px', borderRadius: '10px'}}>
                <Minus size={16} onClick={() => updateQty(item.id, -1)} style={{cursor:'pointer'}}/>
                <b>{item.qty}</b>
                <Plus size={16} onClick={() => updateQty(item.id, 1)} style={{cursor:'pointer'}}/>
              </div>
            </div>
          ))}

          <div style={{marginTop: '40px', background: '#f8fafc', padding: '20px', borderRadius: '20px'}}>
             <div style={{display:'flex', justifyContent:'space-between', marginBottom: '10px'}}><span>Subtotal</span><b>₹{total}</b></div>
             <div style={{display:'flex', justifyContent:'space-between', color: '#16a34a'}}><span>GST (5%)</span><b>₹{Math.round(total*0.05)}</b></div>
             <hr style={{border: 'none', borderTop: '1px solid #e2e8f0', margin: '15px 0'}}/>
             <div style={{display:'flex', justifyContent:'space-between', fontSize: '20px'}}><b>Total</b><b style={{color: '#f97316'}}>₹{Math.round(total*1.05)}</b></div>
          </div>

          <button className="btn-dark" style={{width:'100%', padding: '18px', borderRadius: '18px', marginTop: '30px', position: 'static'}} onClick={() => { setShowNotification(true); setStep('menu'); }}>
            CONFIRM & SEND TO KITCHEN
          </button>

          <p onClick={() => setStep('feedback')} style={{textAlign:'center', marginTop: '20px', color: '#64748b', textDecoration: 'underline', cursor: 'pointer'}}>
            I have finished my meal. Pay Bill.
          </p>
        </div>
      )}

      {/* --- FEEDBACK / GOOGLE REVIEW STEP --- */}
      {step === 'feedback' && (
        <div style={{padding: '40px 20px', textAlign: 'center', animation: 'slideUp 0.4s'}}>
          <div className="premium-card" style={{padding: '30px 20px'}}>
            <h2 style={{fontSize: '24px'}}>How was the food?</h2>
            <p style={{color: '#64748b', fontSize: '14px', marginBottom: '30px'}}>Your feedback helps AR Flavours stay perfect.</p>
            
            <div style={{display:'flex', justifyContent:'center', gap: '10px', marginBottom: '40px'}}>
              {[1,2,3,4,5].map(n => (
                <Star key={n} size={38} 
                  fill={rating >= n ? "#facc15" : "none"} 
                  color={rating >= n ? "#facc15" : "#cbd5e1"} 
                  onClick={() => setRating(n)}
                  style={{cursor: 'pointer', transition: '0.2s transform'}}
                />
              ))}
            </div>

            {/* GOOGLE REVIEW LOGIC: Points to AR Flavours Maps link */}
            {rating >= 4 && (
              <div style={{background: '#f0fdf4', padding: '25px', borderRadius: '20px', border: '2px dashed #22c55e', animation: 'bounceIn 0.5s'}}>
                <CheckCircle color="#16a34a" size={40} style={{margin: '0 auto 15px'}}/>
                <h3 style={{color: '#166534', margin: '0 0 10px 0'}}>Awesome!</h3>
                <p style={{fontSize: '13px', color: '#166534', lineHeight: '1.5'}}>
                  Post your 5-star review on <b>Google Maps</b> for <b>AR Flavours</b> and show this screen to the manager for an <b>Instant ₹20 Cashback</b> on this bill!
                </p>
                <button 
                  onClick={() => window.open('https://www.google.com/maps/search/AR+Flavours+Hyderabad/', '_blank')}
                  className="btn-primary" style={{width:'100%', background: '#2563eb', marginTop: '20px', border: 'none'}}
                >
                  Write Google Review
                </button>
              </div>
            )}

            {rating > 0 && rating < 4 && (
              <div style={{animation: 'fadeIn 0.5s'}}>
                <textarea placeholder="Tell us how we can improve privately..." style={{width:'100%', height:'100px', borderRadius:'15px', border:'1px solid #e2e8f0', padding:'15px', marginBottom:'15px'}} />
                <button className="btn-dark" style={{width:'100%', position: 'static'}} onClick={() => alert('Feedback sent to Manager!')}>Send Private Feedback</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoEngine;