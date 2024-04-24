import React, { FunctionComponent, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { myContext } from "./Context/ContextProvider";
import SnackBar from "./MiniComponents/Snackbar";
import { PureComponent } from "./PureComponent";
import ReduxExample from "./ReduxExample";
import ReturnJsx from "./ReturnJsx";
interface Props {
    
}


const RootComponent: FunctionComponent<Props> = () => {
   const myC  = useContext(myContext)
    return (  
        <>
            <ReturnJsx/> 
            <PureComponent myVal={2}/> 
            <Link to={'/lazy'}>
                Click to LazyLoad LazyLoadComponent
            </Link>
            <ReduxExample/>
            <SnackBar timeout={3000}/>
            <div onClick={()=>myC?.setAge()}> {myC?.age}</div >

            
        </>
    );
}
 
export default RootComponent;