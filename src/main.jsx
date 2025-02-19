import App from './components/App';
import {createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
