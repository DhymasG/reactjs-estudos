import React from "react";
import { useState } from "react";

export default () => {

    const tmp = {
        nome: '',
        apelido: '',
        cidade: '',
        email: ''
    }

    const [cliente, setCliente] = useState(tmp)

    return (
        <>
            <h3>Exercício 06</h3>
            <hr />
            <ul>
                <li>Nome: {cliente.nome}</li>
                <li>Apelido: {cliente.apelido}</li>
                <li>Cidade: {cliente.cidade}</li>
                <li>E-mail: {cliente.email}</li>
            </ul>
            <hr />
            <button onClick={() => {
                const c = {...cliente}
                c.nome = 'João'
                setCliente(c)
            }}>Nome</button>

            <button onClick={() => {
                const c = {...cliente}
                c.apelido = 'Jao'
                setCliente(c)
            }}>Apelido</button>

            <button onClick={() => {
                const c = {...cliente}
                c.cidade = 'Fortaleza'
                setCliente(c)
            }}>Cidade</button>

            <button onClick={() => {
                const c = {...cliente}
                c.email = 'joao@email.com'
                setCliente(c)
            }}>E-mail</button>
        </>
    )
}