import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './Routes/Route';
import AuthProvider from './Providers/AuthProvider';
import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' bg-gradient-to-r from-black to-gray-800'>
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
  <AuthProvider> <RouterProvider router={router} /></AuthProvider>
 </React.StrictMode>
</QueryClientProvider>
</div>
)
