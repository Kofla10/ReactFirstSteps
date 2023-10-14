import React, {Fragment} from "react";

const Comentario = ({sujeto}) => {
    
    return (
        <Fragment>
            <h1>Comentario</h1>
            <hr />
            <div className="media">
                <img src={sujeto.img} alt=""  />
                <div className="media-body">
                    <h5 className="mt-0"> {sujeto.nombre} </h5>
                    {sujeto.description}

                </div>
            </div>

        </Fragment>
    )
}

export default Comentario;