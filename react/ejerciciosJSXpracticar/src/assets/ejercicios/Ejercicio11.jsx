import React from 'react'
function ConditionalRenderAdvanced({isLoggedIn,userRole}){
  if(!isLoggedIn){
    return <p>Por favor, inicia sesión</p>
  }
  return (
    <div>
      <p>Bienvenido</p>
      <p>Tu rol es: {userRole}</p>
      {userRole==='admin' && (<p>Bienvenido administrador</p>)}
    </div>
  )
}
export default function Ejercicio11() {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      
      <div style={{ backgroundColor: '#D1EAFF', padding: '15px', borderRadius: '8px',color:'black' }}> 
        <ConditionalRenderAdvanced isLoggedIn={true} userRole='admin'/>
      </div>

      <div style={{ backgroundColor: '#FFD1D1', padding: '15px', borderRadius: '8px',color:'black' }}> 
        <ConditionalRenderAdvanced isLoggedIn={false} userRole='admin'/>
      </div>

      <div style={{ backgroundColor: '#D1FFD1', padding: '15px', borderRadius: '8px',color:'black' }}> 
        <ConditionalRenderAdvanced isLoggedIn={true} userRole='user'/>
      </div>

    </div>
  );
}

