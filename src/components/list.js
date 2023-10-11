import React, {Fragment, useState} from "react";

const List = ()=>{
    //creamos una lista con el setlistnumber
    const [listNumber, setListNumber] = useState([2,34,234,234])
    //Creamos una constante llamada numero para ir sumando de 1 en 1 
    const [number, setNumber] = useState(1)


    //creamos una funcion para agregar elementos a la lista
    const agregarElemento = ()=>{
        console.log('this is a test')
        //agregamos la variable number para sumar de 1 en 1 cuando se presione el botón agregar
        setNumber(number+1)
        
        setListNumber([
            ...listNumber,
            number
        ])
    }
    return(
        <Fragment>
            {/* <h1>{listNumber}</h1> */}
            {/* usamos siempre las llaves cuando vamos a usar código de js */}
            <button onClick={agregarElemento}>Agregar</button>
            {
                //realizar el recorrio de un map
                listNumber.map((item, index) => 
                    <p> key = {index}, value = {item}</p>
                )
            }
        </Fragment>
    );
}

export default List;