import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import mockData from './data.json'

import './Index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App data={mockData} expandedFolders={['/Common7', '/VC', '/VC/include']} />);
