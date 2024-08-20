
import React from "react";
import { useForm } from "react-hook-form";
function HookFormExample() {
    console.log("Component rendered"); // Check if the component is rendering
   const {register,handleSubmit,formState:{errors,isValid,isDirty,isSubmitted}} =  useForm({
       mode: "all",
        defaultValues:{
            fname:"",
            lname:"",
            age:23
        },
        
    })
  return (
    <form onSubmit={handleSubmit((data)=>console.log("fello",data))}>
      <label htmlFor="fname">First name:</label>
      <br />
      <input type="text" id="fname" {...register("fname",{required:true,validate:{
            maxL : (val)=>val=="shreya",maxLL: (val)=>val.length>=6
      }})}/>
      {errors.fname&&<p className="err">This is required field{errors.fname.type}</p>}
      <br />
      <label htmlFor="lname">Last name:</label>
      <br />
      <input type="text" id="lname"  {...register("lname")}/>
      <br />
      <br />
      <input type="number" {...register("age")}/>
      <button className={isValid? "valid" : "nonValid"} disabled={!isValid} type="submit">Submit</button>

    </form>
  );
}

export default HookFormExample;
