import React, {Fragment, useState} from "react";
import { useForm } from "react-hook-form"


const FormHook = ()=>{

    const { 
        register,
        formState:{errors},
        handleSubmit 
    } = useForm()
  const onSubmit = (data, e) => {
    e.target.reset(); //para realizar la limpieza de los inputs
    console.log(data)
  }
    
    return (
        <Fragment>
            <h1>Form Hooks</h1>
            <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
                
                <input
                    name="name"
                    placeholder="Name"
                    className="form-control my-2"
                    type="text"
                    {...register("name", { required: true, maxLength: 20 })}
                />
                <span className="text-dange text-small d-block mb-2">
                    {errors.name && <p>sdfsdfsd</p>}
                </span>
                
                <button type="submit" className="btn btn-primary">SEND</button>
                
            </form>
        </Fragment>
    );
}

export default FormHook;