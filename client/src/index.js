import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>

      {/* <Container maxWidth="lg"> */}
      {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100%', pb: 5 }}> */}
      <App />
      {/* </Box>
          </Container> */}
    </AuthProvider>


  </React.StrictMode>



);

