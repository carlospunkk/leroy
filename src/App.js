

import { useState } from 'react';
import Banner from './componentes/banner/Banner';
import Formulario from './componentes/formulario';
import Time from './componentes/time';
import Rodape from './componentes/rodape';

function App() {
           // valor , mudança
  const [colaboradores,setColaboradores] = useState([])

  const novocolaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores,colaborador])
  }
  //objeto 
  const times = [
  {
    nome:'Cerâmica',
    corPrimaria:'#BF4E30',
    corSecundaria:'#C6CCB2',
  },
  {
    nome:'Cozinhas',
    corPrimaria:'#7F00FF',
    corSecundaria:'#7093DB',
  }, 
  {
    nome:'Decoração',
    corPrimaria:'#236B8E',
    corSecundaria:'#70DBDB',
  }, 
  {
    nome:'Encanamentos',
    corPrimaria:'#5F9F9F',
    corSecundaria:'#C0D9D9',
  }, 
  {
    nome:'Elétrica',
    corPrimaria:'#78FECF',
    corSecundaria:'#093824',
  }, 
  {
    nome:'Ferragens',
    corPrimaria:'#545454',
    corSecundaria:'#E6E8FA',
  }, 
  {
    nome:'Ferramentas',
    corPrimaria:'#251101',
    corSecundaria:'#470024',
  }, 
  {
    nome:'Iluminação',
    corPrimaria:'#E47833',
    corSecundaria:'#B87333',
  }, 
  {
    nome:'Jardim',
    corPrimaria:'#5B1865',
    corSecundaria:'#2C5784',
  }, 
  {
    nome:'Laminados',
    corPrimaria:'#C3EB78',
    corSecundaria:'#B6174B',
  }, 
  {
    nome:'Madeiras',
    corPrimaria:'#6F4242',
    corSecundaria:'#BC8F8F',
  }, 
  {
    nome:'Materiais',
    corPrimaria:'#E6C229',
    corSecundaria:'#F17105',
  }, 
  {
    nome:'Organização',
    corPrimaria:'#8E236B',
    corSecundaria:'#FF6EC7',
  }, 
  {
    nome:'Pinturas',
    corPrimaria:'#6A605C',
    corSecundaria:'#9B5094',
  }, 
  {
    nome:'Sanitários',
    corPrimaria:'#238E68',
    corSecundaria:'#70DB93',
  }, 
]
  return (
  <div className='App'>
    
     <Banner/>
     <Formulario  setores = {times.map(item => item.nome)} ColaboradorCadastrado={colaborador => novocolaborador(colaborador)}/>    
     {times.map(time => <Time 
     key={time.nome} 
     nomeTime={time.nome} 
     corPrimaria={time.corPrimaria} 
     corSecundaria={time.corSecundaria}
     colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
     
     /> )}
     <Rodape></Rodape>

</div>
  );
 
 
}

export default App;
