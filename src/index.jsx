import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import App_polyhedron from './App_polyhedron'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <App_polyhedron />
  </StrictMode>
)