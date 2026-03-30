import { useState, useEffect } from 'react';

// This custom hook will eventually manage Firebase/WebSocket connections
export const useOrderSync = () => {
  const [activeOrders, setActiveOrders] = useState([]);

  // Mock function to simulate an incoming Swiggy order
  const simulateOnlineOrder = (source) => {
    const newOrder = {
      id: Math.floor(Math.random() * 900) + 100,
      source: source, // 'Swiggy' or 'Zomato'
      table: 'N/A',
      items: [{ name: 'Butter Chicken', qty: 1, category: 'non-veg' }],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'incoming'
    };
    setActiveOrders(prev => [newOrder, ...prev]);
  };

  const markAsReady = (id) => {
    setActiveOrders(prev => prev.filter(order => order.id !== id));
  };

  return { activeOrders, setActiveOrders, simulateOnlineOrder, markAsReady };
};