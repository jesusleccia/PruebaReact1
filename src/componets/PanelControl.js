import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
// import { InicioPanel } from './panel/InicioPanel'
// import { Route, Routes } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>PanelControl</h1>
        <ul>
            <li>
                <NavLink to='inicio' >inicio</NavLink>
            </li>
            <li>
                <NavLink to='crear-articulos' >Crear Articulos</NavLink>
            </li>
            <li>
                <NavLink to='gestion-usuarios' >Gestion de Usuarios</NavLink>
            </li>
            <li>
                <NavLink to='acerca-de' >Acerca de</NavLink>
            </li>
        </ul>
        <div>
            <Outlet/>
        </div>
        {/* <Routes>
            <Route path='inicio' element={<InicioPanel/>} />
        </Routes> */}
    </div>
  )
}