import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {
    // const parametros = useParams(); primera forma de hacer
    // segunda forma de hacer:
    const {nombre, apellido} = useParams();
    console.log({nombre});

    const navegar = useNavigate();

    const enviar = (e) =>{
      e.preventDefault();
      let nombre = e.target.nombre.value;
      let apellido = e.target.apellido.value;
      let url = `/persona/${nombre}/${apellido}`;

      if (nombre.length <=0 && apellido.length <=0){
        navegar("/");
      }else{
        navegar(url)
      }
      
    };

  return (
    <div>
        {/* <h1>Pagina de Persona: {parametros.nombre}</h1>  se puede usar asi */}
        {/* o se puede usar asi: */}
        {
          nombre && !apellido?(
            <h1>Pagina de Persona: {nombre}  Error (ingresa tu apellido) </h1>
          ):!nombre && apellido?(
            <h1>Pagina de Persona:  Error (ingresa tu nombre), {apellido} </h1>
          ):!nombre || !apellido?(
            <h1>Pagina de Persona: Error (ingresa tu nombre y apellido) </h1>
          ):(
            <h1>Pagina de Persona: {nombre} {apellido} </h1>
          )
        }
        <p>Esta es la pagina de Persona</p>

        <form onSubmit={enviar}>
          <input type='text' name='nombre' />
          <input type='text' name='apellido' />
          <input type='submit' name='enviar' value="enviar" />
        </form>
    </div>
  )
}