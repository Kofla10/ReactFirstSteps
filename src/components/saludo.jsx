import React, {Fragment} from "react";

const Saludo = (props)=>{
    return (
        <Fragment>
            <h2>Hi {props.namePerson}, the age is: {props.age}</h2>
        </Fragment>
    )
}

export default Saludo;