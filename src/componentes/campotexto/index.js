
import { useState } from 'react'
import './Campotexto.css'

const Campotexto = (props) => {

  const valorDigitado = (evento) =>{
    props.valorAlterado(evento.target.value) // (evento.target.value) pega o valor da onde esta sendo digitado
  }
    return(
      <div className='campo-texto'>
        <label>{props.label}</label>
        <input value={props.valor} onChange = {valorDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
      </div>
    )
}
export default Campotexto;

