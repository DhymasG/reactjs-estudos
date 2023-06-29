import React from "react";

import Article from "./components/Article";

export default function App() {

    let artigos = [
        { id: 1, titulo: "Um", subtitulo: 'Sub Um' },
        { id: 2, titulo: "Dois", subtitulo: 'Sub Dois' },
        { id: 3, titulo: "Três", subtitulo: 'Sub Três' },
        { id: 4, titulo: "Quatro", subtitulo: 'Sub Quatro' },
        { id: 5, titulo: "Cinco", subtitulo: 'Sub Cinco' }
    ]

    let conteudo = artigos.map(art => <Article key={art.id} titulo={art.titulo} subtitulo={art.subtitulo} />)

    return (
        <>
            <h1>App!</h1>
            {conteudo}
        </>
    )
}