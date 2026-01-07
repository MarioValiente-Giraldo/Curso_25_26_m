import React, { useState } from 'react'

function ToggleVisibility(){
    const [isVisibility, setisVisibility] = useState(true)
    return (
       <div>
        <button onClick={() => setisVisibility(!isVisibility)}>{isVisibility? 'Ocultar': 'Mostrar'}</button>
        {isVisibility&&<p>Este parrafo se puede mostrar y ocultar</p>}
       </div> 
    )

}

export default function Ejercicio9() {
  return (
    <div>
        <ToggleVisibility />
    </div>  
  )
}

