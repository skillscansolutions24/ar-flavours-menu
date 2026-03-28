import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DemoEngine from './pages/DemoEngine';
import WaiterDashboard from './pages/WaiterDashboard';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/demo" element={<DemoEngine />} />
        <Route path="/waiter" element={<WaiterDashboard />} />
        <Route path="*" element={<Navigate to="/demo" replace />} />
      </Routes>
    </Router>
  );
}

export default App;