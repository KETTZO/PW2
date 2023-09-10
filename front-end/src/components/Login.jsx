import { useState } from 'react'
import logo from '../assets/flicker.png'
import '../App.css'

export function Login({setUser}){

  async function loginUser() {

    const payload =  {
      user: nombre,
      pass: contra,
    }

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }
    setError(false)
    const response = await fetch("http://localhost:5000/login", config)
    if (response.status == 401){
      //alert("Error en las credenciales")
      setError(true)
    }else{
      //alert("Logiado correctamente")
      setError(false)
      setUser([nombre])
      return
    }
  }

    const [nombre, setNombre] = useState('')
    const [contra, setContra] = useState('')
    const [error, setError] = useState(false)
  
    const handleSubmit = (e) =>{
      e.preventDefault()
      /*
      if(nombre === '' || contra === ''){
        setError(true)
        return
      }
      else if(nombre === 'admin' || contra === 'admin'){
        setError(false)
        setUser([nombre])
        return
      }
      else{
        setError(true)
        return
      }*/
      
    }
  
    return (
      <>
        <div className="loginImage">
          <img src={logo} alt="" />
          <br />
          <h1>Bienvenido</h1>
          <h3>Ingresa para continuar</h3>
        </div>
        <form className='loginForm'
          onSubmit={handleSubmit}
        >
          <h2>Inicio de sesión</h2>
          <div className='inputs'>
            <input type="text" className='' placeholder='correo electrónico'
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
            <br />
            <input type="password" className='' placeholder='contraseña'
              value={contra}
              onChange={e => setContra(e.target.value)}
            />
            {error && <p className='msgError'>Verifique usuario y/o contraseña</p>}
          </div>
          <br />
          <button onClick={loginUser}>Continuar</button>
          <br />
          <p>¿Olvidaste tu contraseña?</p>
          
        </form>
      </>
    )
}