import React from 'react'
import {Routes, Route, BrowserRouter, NavLink, Navigate} from "react-router-dom";
import {Inicio} from '../componets/Inicio';
import {Articulos} from '../componets/Articulos';
import {Contacto} from '../componets/Contacto';
import {Error} from '../componets/Error';
import { Persona } from '../componets/Persona';
import { PanelControl } from '../componets/PanelControl';
import { InicioPanel } from '../componets/panel/InicioPanel';
import { Acerca } from '../componets/panel/Acerca';
import { Crear } from '../componets/panel/Crear';
import { Gestionar } from '../componets/panel/Gestionar';


export const RouterPrincipal = () => {
  return (
    <BrowserRouter>

        <h1>Cabezera</h1>
        <hr/>

        <nav>
          <ul>
            <li>
              <NavLink
              className={({isActive})=> isActive ? "activado": ""}
              to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink
              className={({isActive})=> isActive ? "activado": ""}
              to="/articulos">Articulos</NavLink>
            </li>
            <li>
              <NavLink
              className={({isActive})=> isActive ? "activado": ""}
              to="/contacto">Contacto</NavLink>
            </li>
            <li>
              <NavLink
              className={({isActive})=> isActive ? "activado": ""}
              to="/persona">Persona</NavLink>
            </li>
            <li>
              <NavLink
              className={({isActive})=> isActive ? "activado": ""}
              to="/panel">Panel de control</NavLink>
            </li>
          </ul>
        </nav>
        <hr/>
        <section className='contenido-principal'>
          <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/articulos' element={<Articulos/>} />
            <Route path='/contacto' element={<Contacto/>} />
            <Route path='/persona/:nombre/:apellido' element={<Persona/>} />
            <Route path='/persona/:nombre' element={<Persona/>} />
            <Route path='/persona' element={<Persona/>} />
            <Route path='/redirigir' element={<Navigate to={'/persona/Jesus/Leccia'} />} />

            <Route path='/panel/*' element={<PanelControl/>} >
              <Route index element={<InicioPanel/>} />
              <Route path='inicio' element={<InicioPanel/>} />
              <Route path='crear-articulos' element={<Crear/>} />  
              <Route path='gestion-usuarios' element={<Gestionar/>} />  
              <Route path='acerca-de' element={<Acerca/>} />    
            </Route>
            
            <Route path='*' element={<Error/>} />
          </Routes>
        </section>
        <hr/>
        <footer>
          <h3>Pie de pagina</h3>
        </footer>
        
    
    </BrowserRouter>
  )
}
