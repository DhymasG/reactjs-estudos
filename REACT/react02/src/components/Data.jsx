export default function Data(){

    let nome = 'Joao'
    let cliente = {
        nome: 'João Junior',
        email: 'joaoj@email.com'
    }

    let a = 250;
    let b = 550;

    function add(a,b){
        return a + b
    }

    return(
        <>
            <p>Nome do Cliente: {cliente.nome}</p>
            <p>E-mail do Cliente: {cliente.email}</p>
            <p>A Soma de {a} + {b} = {add(a,b)}</p>
        </>
    )
}