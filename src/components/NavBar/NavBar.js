import React from 'react'

const NavBar = (props) => {
    console.log(props);
  return (
    <nav className='NavBar'>
        <h2>{props.name}</h2>
        <button>Boton1</button>
    </nav>
  )
}

export default NavBar