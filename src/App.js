import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Button from './components/Button/Button';
import ClassCounter from './components/ClassCounter/ClassCounter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  const title = 'Ecommerce'

  const myFunction = () => {
    console.log('hice click en el boton');
  }

  return (

    <div className="App">
      {/* <ItemListContainer greeting={'Hola gente'} />
      { true ? 'true' : 'false'} */}
      {/* <NavBar name={title}>
        'Este es otro titulo'
      </NavBar>  */}
      <NavBar></NavBar>
     
      
      {/* <ClassCounter /> */}
      {/* <Button func={myFunction} label='Mi boton' /> */}
      
    </div>
  );
}

export default App;


