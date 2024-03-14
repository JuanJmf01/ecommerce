import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { CategoriesProvider } from './data/services/providers/categoriesContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CategoriesProvider>
      <App />
    </CategoriesProvider>

  </React.StrictMode>,
)
