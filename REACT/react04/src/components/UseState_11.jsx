import React, { useState } from "react";
import './UseState_11.css';

export default () => {
    
    const [state, setState] = useState(true)
    const class1 = 'classUm'
    const class2 = 'classDois'
    
    return(
        <>
            <h3>Conditional Rendering - Change CSS class</h3>
            <button onClick={() => setState(!state)}>Alterar Parágrafo</button>
            <p className={`paragrafo ${state ? class1 : class2}`}>Texto que irá ter seu aspecto alterado!</p>
        </>
    )
}