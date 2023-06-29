import React from 'react'

import './App.css'

// components
import Button from './components/Button'
import Table from './components/Table'
import Image from './components/views/Image'
import Data from './components/Data'

function App() {
    return (
        <>
            <h3>Teste de Componentes React</h3>
            <h4 className='cor-texto'>Outro texto</h4>
            <Table />
            <Button />
            <Image />
            <Data />
        </>
    )
}

export default App

