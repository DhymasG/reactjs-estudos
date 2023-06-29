import { useState } from "react"

export default () => {

    const [valor, setValor] = useState(0);

    function diminuir() {
        setValor(v => v - 1)
    }

    function aumentar() {
        setValor(v => v + 1)
    }

    return (
        <>
            <h2>UseState</h2>
            <p>Valor: {valor}</p>
            <button onClick={diminuir}>Diminuir</button><br />
            <button onClick={aumentar}>Aumentar</button>
        </>
    )
}