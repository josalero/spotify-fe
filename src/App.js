import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import { Box, CssBaseline } from '@mui/material';
import Dashboard from './components/dashboard'; 
import Navigation from './components/navigation';
import CreateTrack from './components/track/create-track';

function App() {
  return (
  <Router>
    <CssBaseline /> {/* Global styles reset */}

    {/* Navigation Bar */}
    <Navigation />

    {/* Main content area */}
    <Box component="main" sx={{ p: 3 }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-track" element={<CreateTrack />} />
      </Routes>
    </Box>
  </Router>
  );
}

export default App;
