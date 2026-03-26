
const frutas = [
    {id: 1, nome: 'Uva'},
    {id: 2, nome: 'Morango'},
    {id: 3, nome: 'Tangerina'}
]

export default function FrutaMap({titulo}){
    const listaFruta = frutas.map((fruta) =>{
         return <li key={fruta.id}>
            <h3>{fruta.nome}</h3>
        </li>
    })
    
    return(
        <>
        <h1>{titulo}</h1>
        <ul>
            {listaFruta}
        </ul>
        </>
    )
}