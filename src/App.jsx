
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import { Box, CssBaseline } from '@mui/material';
import Dashboard from './components/dashboard'; 
import Navigation from './components/navigation';
import CreateTrack from './components/track/create-track';
import axios from 'axios';
import AuthenticatedRoute  from './components/route/authenticated-route';
import NotFound from './components/route/not-found';


function App() {
  
   const createTrack = async (isrc) => {
    const token = localStorage.getItem('authToken'); 
    const apiUrl = process.env.REACT_APP_API_URL;
    let response;
    let error;
    
    try{ 
      response = await axios.post(apiUrl, null, {
        params: {
          isrc
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      error = err.response.data;
    }


    return {data: response && response.data, error};

   };

   const searchTrack = async (isrc) => {
    const token = localStorage.getItem('authToken'); 
    const apiUrl = process.env.REACT_APP_API_URL;
    let response;
    let error;
    
    try{ 
        response = await axios.get(apiUrl, {
        params: {
          isrc
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      error = err.response.data;
    }

    return {data: response && response.data, error};

   };


  return (
  <Router>
    <CssBaseline /> {/* Global styles reset */}

    {/* Navigation Bar */}
    <Navigation />

    {/* Main content area */}
    <Box component="main" sx={{ p: 3 }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<AuthenticatedRoute element={<Dashboard />} />} />
        <Route path="/create-track" element={<AuthenticatedRoute element={<CreateTrack title="Create Track by ISRC" label="Create" action={ createTrack }/>} />} />
        <Route path="/search-track" element={<AuthenticatedRoute element={<CreateTrack title="Search Track by ISRC" label="Search" action={ searchTrack }/>} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  </Router>
  );
}

export default App;
