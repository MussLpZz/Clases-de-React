import './navBar.css'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
  return (
    <header className='nav-bar'> 

      <h1>Marolio online xd</h1>
        <nav>
          <ul className='nav-bar-ul'>
              <li>Lacteos</li>
              <li>Bebidas</li>
              <li>Almacen</li>
          </ul>
        </nav>
        <CartWidget />
    </header>
  )
}

export default NavBar
