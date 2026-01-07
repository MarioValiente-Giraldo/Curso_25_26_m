import React from 'react'

function Ejercicio8() {
    function Card({title,body,footer}){
        return (
            <div>
                <header>{title}</header>
                <div>{body}</div    >
                <footer>{footer}</footer>
            </div>
        );
    }
  return (
    <div>
        <Card title='Este es el título' body= 'Este es el cuerpo' footer='Este es el pie de página'  />
    </div>
  )
}

export default Ejercicio8