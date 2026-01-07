import React from 'react'

function UserList({users}){
    return (
        <ol>
            {users.map((user,index)=>(
                <>
                    <li key={index}><a>{user} (índice: {index})</a></li>
                </>
            ))}
        </ol>
    )
}
export default function Ejercicio10() {
    const usuarios = ['Carolina','Mario','Daniel','Alejandro','Pablo','Harry','Maria'];
  return (
    <div>
        <UserList users={usuarios}/>
    </div>
  )
}

