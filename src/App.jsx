import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import Vista from './components/Vista/Vista';
import Mensaje from './components/Mensaje/Mensaje';
// JSX Sintaxis de JS

// Los componentes tienen 3 caracteristicas fundamentales:
// 1) Renderiza 1 solo elemento
// 2) Pueden recibir propiedades
// 3) Pueden tener un estado

// ¿Qué es elestado?
// Es un objeto que contiene información de un componente 
// que puede cambiar durante la ejecución de la app
/* Usamos 'Hooks', que son funciones de React que me permiten
mantener y trabajar con ese estado */

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting= 'Hola Mundillo'/>
      <ItemCount/>
      <Vista/>
      <Mensaje/>
    </>
  );
}

export default App;
