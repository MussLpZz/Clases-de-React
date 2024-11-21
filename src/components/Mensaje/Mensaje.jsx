import { useState } from "react"


const Mensaje = () => {
const [message, setMessage] = useState(false);
const handleMessage = () =>{
    setMessage(!message)
}

    return (
    <div>
      <button onClick={handleMessage}> {message ? 'Ocultar' : 'Mostrar'}</button>
    {message && <h2>'Pasamos El Primer HOOK UseState Prro'</h2>}
    </div>
  )
}

export default Mensaje
