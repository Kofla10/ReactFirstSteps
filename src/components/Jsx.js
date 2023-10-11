import React, { Fragment } from "react";

const Jsx = () => {
    // const saludo = 'Hi, how are you';
    const temepratura = 21;
    return (
        <Fragment>
            <h2>Frio o Calor?</h2>
            <h4>
                {
                    //usamos los operadores ternarios para realiar una validación
                    temepratura > 20 ? 'Calor' : 'Frio' 
                }
            </h4>
        </Fragment>
    )
}

export default Jsx;