import React from 'react'

function Ejercicio3() {
    const handleClick = () =>{ console.log('Has presionado el botón')}
  return (
    <div>
        <button onClick={handleClick} className='bg-red-200'>Presioname</button>
        <br></br>
        <p>Mire la consola para ver el mensaje</p>
    </div>
  )
}

export default Ejercicio3