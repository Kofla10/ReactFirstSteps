import React, {Fragment, useState} from "react";

const Form = () => {

    //creamos la variable data, que sea de tipo objeto, inicializamos los valores vacios
    const [data, setData] = useState({
        // relacionamos los nombres de los campos del formulario con estos nombres, si se llaman igual
        name: '', 
        lastName: ''
    });

    const handelInputChange = (event)=>{
        //el event.target.value esta llenando cada vez que el usuario ingrese un valor o modifique un valor del input
        // console.log(event.target.value)
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }

    const sendData = (event) => {
        //para evitar el procesamiento automatico de los formulario, usamos en prevent        
        // event.prevetDefault();
        console.log(data.name + ' ' + data.lastName);
    }

    return(
        <Fragment>
            <h1>Form</h1>
            <form className="row" onSubmit={sendData}>
                <div className="col-md-3">
                    <input placeholder="Name"
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={handelInputChange}
                    />
                </div>
                <div className="col-md-3">
                    <input placeholder="lastName" 
                    className="form-control"
                    type="text"
                    name="lastName"
                    onChange={handelInputChange}
                    />
                </div>
                <div className="col-md-3 mt-2">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
            <h3>The name is: {data.name}, the Last Name is: {data.lastName}</h3>
        </Fragment>
    );
}

export default Form;