import React, {useState, Fragment} from "react";

const {
   
}

const ExampleUno = () =>{
    const [data, setData] = useState({
        names      : '',
        lastName   : '',
        age        : 0,
        nationality: '',
        job        : ''

    });
    const sendSubmit = ()=>{

    }

    return (
        <Fragment>
            <h1 className = "h1">Explame One</h1>
            <hr/>
            <form className = "form-control" onSubmit = {handleSubmit(sendSubmit)}>
                <div>
                    <input 
                        className   = "form-control my-2"
                        type        = "text"
                        placeholder = "Name"
                        name        = "names"
                    />
                </div>
                <div>
                    <input 
                        className   = "form-control my-2"
                        type        = "text"
                        placeholder = "Last Name"
                        name        = 'lastName'
                    />                    
                </div>
                <div>
                    <input 
                        className   = "form-control my-2"
                        type        = "number"
                        placeholder = "Age"
                        name        = 'age'
                    />                    
                </div>
                <div>
                    <input 
                        className   = "form-control my-2"
                        type        = "text"
                        placeholder = "Nationality"
                        name        = 'nationality'
                    />                    
                </div>
                <div>
                    <input 
                        className   = "form-control my-2"
                        type        = "text"
                        placeholder = "Job"
                        name        = 'job'
                    />                    
                </div>
                <div>
                    <button type = "submit" className = "btn btn-primary">SEND</button>
                </div>
            </form>
        </Fragment>
    );
}

export default ExampleUno;