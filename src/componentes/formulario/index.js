

import { useState } from 'react';
import Botao from '../botao';
import Campotexto from '../campotexto';
import ListaSuspensa from '../listasuspensa';
import './Formulario.css'

const Formulario = (props)=>{
 
// valor , mudança 
const [nome,setNome] = useState('')
const [cargo,setCargo] = useState('')
const [imagem,setImagem] = useState('')
const [time,setTime] = useState('')

const aoSalvar = (evento)=>{
  evento.preventDefault()
  props.ColaboradorCadastrado({
    nome,
    cargo,
    imagem,
    time
  })
  // esvaziando campos apos cadastro
  setNome('')
  setCargo('')
  setImagem('')
  setTime('')
}

return(
    <section className='Formulario'>
        <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
          <Campotexto 
            obrigatorio ={true} 
            label="Nome" 
            placeholder="Digite seu nome"
            valor={nome}
            valorAlterado = {valor => setNome(valor)} // alterando o valor 
            />
          <Campotexto 
            obrigatorio={true} 
            label="Cargo" 
            placeholder="Digite seu Cargo"
            valor={cargo}                            // valor o que vai ser mudado
            valorAlterado={valor => setCargo(valor)} // setValor mudança
            />
          <Campotexto 
            label="Imagem" 
            placeholder="Digite o endereço da imagem"
            valor={imagem}
            valorAlterado={valor => setImagem(valor)}
            />
          <ListaSuspensa 
            obrigatorio ={true} 
            label = "Setores" 
            itens={props.setores}
            valor={time}
            valorAlterado={valor => setTime(valor)}
            
            />
            
          <Botao> Criar Card </Botao>
        </form>
    </section>
)

}
export default Formulario;