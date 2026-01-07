import React from 'react'

function Ejercicio7() {

    function ConditionalRender({condition}){
        return (
            <p>{condition? 'El valor es verdadero':'El valor es falso'}</p>
        );
    }
  return (
    <div>
        <ConditionalRender condition={true}/>
        <ConditionalRender condition={false}/>
    </div>
  )
}

export default Ejercicio7