import React, { FunctionComponent, useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { myContext } from "./Context/ContextProvider";
import SnackBar from "./MiniComponents/Snackbar";
import { PureComponent } from "./PureComponent";
import ReduxExample from "./ReduxExample";
import ReduxExampleReduxToolKit from "./ReduxExampleReduxToolKit";
import ReturnJsx from "./ReturnJsx";
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

            
        </>
    );
}
 
export default RootComponent;