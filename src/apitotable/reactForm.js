import React, { useState } from 'react';

export const ReactForm =(apidata)=>{
    //form state
    const [formData , setFormData] = useState({name:""});
    console.log(apidata);
    
    //submit fun
    const handleSubmit =(event)=>{
        event.preventDefault();
        alert(formData.name)

    }

    //onchange fun
    const handleChange =(event)=>{

        const{name, value} = event.target;
        setFormData((preFormData)=>({...preFormData, [name]: value}));
    }

    //form
    return(

        <form onSubmit={handleSubmit}>

            <input type="text" name="name" id ="name" onChange={handleChange} value={formData.name} />
            <button type="submit">submit</button>
        </form>
    )
}

export default ReactForm;