import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { query } from './store/index.tsx'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={query}>
    <App />
    <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>,
)
