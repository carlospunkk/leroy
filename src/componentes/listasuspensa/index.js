import './Listasuspensa.css'

const ListaSuspensa = (props)=>{

    return(
        <div className='Lista-Suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.valorAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)} {/*aqui diz para cada item da minha lista quero uma nova option*/}
            </select>
        </div>
    )
}
export default ListaSuspensa;
