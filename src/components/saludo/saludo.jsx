import React, { useState } from 'react';

function Saludo(props) {
    const [mostrarSaludo, setMostrarSaludo] = useState(false);

    const mostrarMensaje = () => {
        setMostrarSaludo(true);
    };

    return (
        <div>
            {!mostrarSaludo ? (
                <button onClick={mostrarMensaje}>Mostrar Saludo</button>
            ) : (
                <div>
                    <h1>Hola, {props.nombre}! Cómo estás chupapija?</h1>
                </div>
            )}
        </div>
    );
}

export default Saludo;
