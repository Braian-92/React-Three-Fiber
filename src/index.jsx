import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import App_polyhedron from './App_polyhedron'
import App_leva from './App_leva'
import App_materials from './App_materials'
import App_luces from './App_luces'
import App_sombras from './App_sombras'
import App_texture_loader from './App_texture_loader'
import App_enviroment from './App_enviroment'
import App_gtlf_loader_02_avanzado from './App_gtlf_loader_02_avanzado'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App_polyhedron /> */}
    {/* <App_leva /> */}
    {/* <App_materials /> */}
    {/* <App_luces /> */}
    {/* <App_sombras /> */}
    {/* <App_texture_loader /> */}
    {/* <App_enviroment /> */}
    <App_gtlf_loader_02_avanzado />
  </StrictMode>
)