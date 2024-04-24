import { FunctionComponent, useEffect, useState } from "react";

interface Props {
    timeout:number
}
 
const SnackBar: FunctionComponent<Props> = ({timeout}) => {
    const [close,setClose] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setClose(true)
        },timeout)
    },[])
    return (
         <div className={close? "closeSnackbar":"snackBar"}>
            Failed Request
            <span className="closeIcon" onClick={()=>setClose(true)}>X</span>
         </div> 
    );
}
 
export default SnackBar;