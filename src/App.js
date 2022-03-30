import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Button from './components/Button/Button';
import ClassCounter from './components/ClassCounter/ClassCounter';
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; 

const App = () => {
  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`);
  }

  const title = 'Ecommerce'

  const myFunction = () => {
    console.log('hice click en el boton');
  }

  return (
    <div className="App">

      <NavBar/>

      <ItemListContainer greeting={'Hola coders'} />
        <button onClick={() => setShow(!show)}>{show ? 'Desmontar contador' : 'Montar contador'}</button>
        { show ? <Counter initial={0} stock={10} onAdd={handleOnAdd}/> : null }
    </div>
    
  );
}

export default App;


