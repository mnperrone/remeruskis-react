import { makeStyles } from "@material-ui/styles";
import { useState, useEffect } from "react";

const Counter = () => {

    //ACÁ DES ESTRUCTURO UN ARRAY :
    const [myState, setMyState] = useState( {count: 0})
    

    const decrement = () => {

        setMyState({...myState, count: myState.count - 1})
    }

    const increment = () => {
        setMyState({...myState, count: myState.count +1 })
    }

    const classes = useStyle();

    return (
        <div className={classes.countDiv}>
            <button onClick={decrement}> - </button>
            <p> {myState.count} </p>
            <button onClick={increment}> + </button>
        </div>
    ) 
    
    //Acá va otra forma de hacerlo, que no me funcionó :(

    /* const [count, setCount] = useState(0)

    useEffect( () =>{
        console.log('Se acaba de montar el componente');
    }, [])

    const decrement = () => {

        setCount(count - 1)
    }

    const increment = () => {
        setCount(count + 1)
    }

    const classes = useStyle();

    return (
        <div className={classes.countDiv}>
            <button onClick={decrement}> - </button>
            <p> {count} </p>
            <button onClick={increment}> + </button>
        </div>
    ) */
} 

const useStyle = makeStyles( (theme) =>({
    countDiv: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
} ))

export default Counter