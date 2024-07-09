import React from 'react'
import ReactDOM from 'react-dom/client'
import {Header, ImportForm} from './Form.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <ImportForm />
  </React.StrictMode>,
)
