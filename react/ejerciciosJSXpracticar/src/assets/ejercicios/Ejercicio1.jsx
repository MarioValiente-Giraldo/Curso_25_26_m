import React from 'react'

export default function ejercicio1() {
    const isLoggedIn = true;

  return (
    <div>
        <p>{isLoggedIn? 'Bienvenido': 'Por favor, inicia sesión'}</p>
    </div>
  )
}
