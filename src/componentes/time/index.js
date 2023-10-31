import Colaborador from '../colaborador'
import './Time.css'

const Time = (props) =>{
    
    const css = {backgroundColor:props.corSecundaria}
    const corborda = {borderColor:props.corPrimaria} 
    
    return(

        (props.colaboradores.length > 0)  ? <section className='time' style={css}>
            <h3 style={corborda}>{props.nomeTime}</h3>

            <div className='colaboradores'>
              {props.colaboradores.map(colaborador => <Colaborador 
            corDeFundo={props.corPrimaria}
             key={colaborador.nome}
              nome={colaborador.nome} 
              cargo={colaborador.cargo} 
              imagem={colaborador.imagem}/>)}
            </div>
        </section>
         : ''
         // operador ternario para verificar condicional ?
    )
}
export default Time;