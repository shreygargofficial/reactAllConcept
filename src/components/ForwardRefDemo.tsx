import { FunctionComponent ,forwardRef, useEffect, RefObject} from "react";

interface Props {
    ref:any,
    name:string
}
 
const ForwardRefDemo: FunctionComponent<Props> = forwardRef((props,ref:any) => {
    useEffect(()=>{
        ref.current.value ='shrey'
    },[])
    return ( <input type={'text'} ref={ref} />);
}) 
 
export default ForwardRefDemo;