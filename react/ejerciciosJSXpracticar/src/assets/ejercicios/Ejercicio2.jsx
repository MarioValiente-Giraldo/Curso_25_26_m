import React from 'react'

export default function Ejercicio2() {
    const nombres = ['Carolina','Mario','Daniel','Alejandro','Pablo','Harry','Maria']
  return (
    <div>
        <ul>
            {nombres.map((nombre,index)=>{
                return <li key={index}>{nombre}</li>
            })}
        </ul>
    </div>
  );
}
