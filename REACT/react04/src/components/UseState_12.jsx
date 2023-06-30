import React, { useState } from "react";
import CompA from './UseState_12a'
import CompB from './UseState_12b'

export default () => {

    const [state, setState] = useState(true)

    return (
        <>
            <h3>Conditional Rendering - Alternate between components</h3>
            <button onClick={() => setState(!state)}>Alternar entre componentes</button>
            {state ? <CompA /> : <CompB />}
        </>
    )
}