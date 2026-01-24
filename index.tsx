
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import clarity from '@microsoft/clarity';
import App from './App';

// Initialize Microsoft Clarity
// Replace 'YOUR_PROJECT_ID' with your actual Clarity project ID
const clarityProjectId = 'v6kttpuir1';
clarity.init(clarityProjectId);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
