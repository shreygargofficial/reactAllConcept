import React, { FunctionComponent, useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { myContext } from "./Context/ContextProvider";
import SnackBar from "./MiniComponents/Snackbar";
import { PureComponent } from "./PureComponent";
import ReduxExample from "./ReduxExample";
import ReduxExampleReduxToolKit from "./ReduxExampleReduxToolKit";
import ReturnJsx from "./ReturnJsx";
import Test from "./Test";
interface Props {
    
}


const RootComponent: FunctionComponent<Props> = () => {
   const [btnClicked,setButtonClicked] = useState<any>(null);
   const myC  = useContext(myContext)
   const clickHandle = ()=>{
    setButtonClicked(Math.random())
   }
    return (  
        <>
            <ReturnJsx name={"shrey"}/> 
            <PureComponent myVal={2}/> 
            <Link to={'/lazy'}>
                Click to LazyLoad LazyLoadComponent
            </Link>
            {/* <ReduxExample/> */}
            <SnackBar timeout={3000}/>
            <div onClick={()=>myC?.setAge()}> {myC?.age}</div >
            <ReduxExampleReduxToolKit/>
            <button onClick={clickHandle}></button>
            <iframe width="966" height="543" src="https://www.youtube.com/embed/G1vRm3O4aEM" title="Ind Pak ka bhaichara | Babar kiska Beta hai  🇮🇳 Neeraj Silver से खुश नहीं | Arshad Nadeem Gold Medal"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7041.759044658889!2d-82.413854!3d28.058703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c7bec3c6ffd3%3A0xb1f4741e5c51906a!2sUniversity%20of%20South%20Florida!5e0!3m2!1sen!2sin!4v1723221628205!5m2!1sen!2sin" width="600" height="450"  ></iframe>
            <Test/>
            <PureComponent myVal={2}/> 
        </>
    );
}
 
export default RootComponent;