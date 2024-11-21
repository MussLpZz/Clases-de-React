
/* Hook 'UseState' es un hook que me permite
crar un estado 
1) Primero lo tenemos que importar
2) Nos retorna un array con 2 elements: El primero es el 
estado actual y el segundo la función que actualiza 
el estado
*/
import { useState } from "react";

const ItemCount = () => {
    const [contador, setContador] = useState(1);
    // Entre ('El valor inicial del estado en este caso '1'') = (1)
/* 3) Crear las funciones para incrementar y decrementar el contador */  

const stockStatic = 10;
const increment = () =>{
    if(contador < stockStatic ){
    setContador(contador + 1);
    }
}    
const decrement = () =>{
    if(contador > 1)
    setContador(contador - 1);
}

return (
    <div>
      <button onClick={increment}> + </button>
        <p> {contador} </p>
    <button onClick={decrement}> - </button>
    </div>
  )
}

/* {increment} y {decrement} van sin () porque si no se
ejecutarian al momento de renderizar el componente. Y solo
queremos que se ejecuten cuando el visitante de 'Click'
en los botones  */

export default ItemCount
