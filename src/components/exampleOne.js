import React, {useState, Fragment} from "react";
import { useForm } from "react-hook-form";


const ExampleOne = () =>{

    // to validate the data of form 
    const {
        register, 
        handleSubmit
     } = useForm();


    //to take input of form
    const [data, setData] = useState({
        names      : '',
        lastName   : '',
        age        : 0,
        nationality: '',
        job        : ''

    });
    

    //Capture the form data, 
    const handleInputChange = (event) =>{
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    //to printin console the data get of the form
    const sendSubmit = (newData)=>{
        console.log(newData)
        setData({
            ...data,
            newData
        })

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
                        onChange    = {handleInputChange}
                        {...register("Name",{required:true, minLength:3})}
                    />
                </div>
                <div>
                    <input 
                        className   = "form-control my-2"
                        type        = "text"
                        placeholder = "Last Name"
                        name        = 'lastName'
                        onChange    = {handleInputChange}
                        {...register("Last Name",{required:true, minLength:3})}
                    />                    
                </div>
                <div>
                    <input 
                        className   = "form-control my-2"
                        type        = "number"
                        placeholder = "Age"
                        name        = 'age'
                        onChange    = {handleInputChange}
                        {...register("Age",{required:true})}
                    />                    
                </div>
                <div>
                    <input 
                        className   = "form-control my-2"
                        type        = "text"
                        placeholder = "Nationality"
                        name        = 'nationality'
                        onChange    = {handleInputChange}
                        {...register("Nationality",{required:true, minLength:4})}
                    />                    
                </div>
                <div>
                    <input 
                        className   = "form-control my-2"
                        type        = "text"
                        placeholder = "Job"
                        name        = 'job'
                        onChange    = {handleInputChange}
                        {...register("Job",{required:true})}
                    />                    
                </div>
                <div>
                    <button type = "submit" className = "btn btn-primary">SEND</button>
                </div>
            </form>
        </Fragment>
    );
}

export default ExampleOne;