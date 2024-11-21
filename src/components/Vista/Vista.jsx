import './vista.css'
import { useState } from 'react';

const Vista = () => {
const [modeDark, setModeDark] = useState(false);
    const changeMode = () =>{
        setModeDark(!modeDark);
    }
    const estilo = modeDark ? 'oscuro' : 'claro';

  return (
    <div className= {estilo}>
      <button onClick={changeMode}> {modeDark ? 'Claro' : 'Oscuro'} </button>
      <h2> Componente Vista</h2>
      <p>Lorem ipsum dolor sit amet consectetur 
        dipisicing elit.Ad autem voluptatibus 
        inventore temporibus accusamus? Dolore 
        nihil excepturi magnam est at, voluptatem 
        cumque ipsam, ratione nemo repudiandae eum 
        officia recusandae ab!</p>
    </div>
  )
}

export default Vista
