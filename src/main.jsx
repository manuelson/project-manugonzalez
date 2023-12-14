import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import './index.css'
import { Analytics } from '@vercel/analytics/react';
import { Router } from  './components/Router/Index.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={Router} />
      <Analytics />
  </React.StrictMode>,
)
