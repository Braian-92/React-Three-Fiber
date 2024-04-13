import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
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
import App_gtlf_loader_03_herramientas from './App_gtlf_loader_03_herramientas'
import App_gtlf_loader_04_anotaciones from './App_gtlf_loader_04_anotaciones'
import App_gltfjsx from './App_gltfjsx'
import App_lerp from './App_lerp'

const apps = [
  { name: 'App', component: <App /> },
  { name: 'App_polyhedron', component: <App_polyhedron /> },
  { name: 'App_leva', component: <App_leva /> },
  { name: 'App_materials', component: <App_materials /> },
  { name: 'App_luces', component: <App_luces /> },
  { name: 'App_sombras', component: <App_sombras /> },
  { name: 'App_texture_loader', component: <App_texture_loader /> },
  { name: 'App_enviroment', component: <App_enviroment /> },
  { name: 'App_gtlf_loader_02_avanzado', component: <App_gtlf_loader_02_avanzado /> },
  { name: 'App_gtlf_loader_03_herramientas', component: <App_gtlf_loader_03_herramientas /> },
  { name: 'App_gtlf_loader_04_anotaciones', component: <App_gtlf_loader_04_anotaciones /> },
  { name: 'App_gltfjsx', component: <App_gltfjsx /> },
  { name: 'App_lerp', component: <App_lerp /> }
]

function Root() {
  const [selectedApp, setSelectedApp] = useState(apps.length - 1)

  return (
    <StrictMode>
      {apps[selectedApp].component}
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>
        <select value={selectedApp} onChange={e => setSelectedApp(Number(e.target.value))}>
          {apps.map((app, index) => (
            <option key={index} value={index}>{app.name}</option>
          ))}
        </select>
      </div>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
