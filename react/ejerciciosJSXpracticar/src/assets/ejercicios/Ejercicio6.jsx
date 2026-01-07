import React, { useState } from 'react';
function Ejercicio6() {
    const [mensaje, setMensaje] = useState('');

    const CustomButton = ({ backgroundColor, text, onClick }) => {
        const estilos = {
            backgroundColor: backgroundColor,
            color: 'white',
            padding: '10px 20px',
            margin: '5px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        };

        return (
            <button style={estilos} onClick={onClick}>
                {text}
            </button>
        );
    };

    const handleGuardar = () => {
        setMensaje('Has guardado el mensaje');
    };

    const handleCancelar = () => {
        setMensaje('Has cancelado el mensaje');
    };
    const handleLimpiar = ()=>{
        setMensaje('');
    }

    return (
        <div style={{ padding: '20px' }}>
            <CustomButton 
                backgroundColor="green" 
                text="Guardar" 
                onClick={handleGuardar} 
            />
            
            <CustomButton 
                backgroundColor="red" 
                text="Cancelar" 
                onClick={handleCancelar} 
            />
            <CustomButton 
                backgroundColor="blue" 
                text="Limpiar" 
                onClick={handleLimpiar} 
            />

            <p><strong>Estado:</strong> {mensaje}</p>
        </div>
    );
}

export default Ejercicio6;