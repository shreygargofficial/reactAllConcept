import { FunctionComponent, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStateToolKit } from "../Slice/CombineSlice";
import {counterActions} from '../Slice/CounterSlice'

interface Props {
    
}
 
const ReduxExampleReduxToolKit: FunctionComponent<Props> = () => {
    const inputv=useRef<any>()
    const dispatch = useDispatch();
    const count = useSelector<RootStateToolKit>((state : RootStateToolKit)=> state.counter.value)
    return ( <div>
        Redux with Redux Toolkit {JSON.stringify(count)}
        <button onClick={()=>dispatch(counterActions.increment())}>+</button> <button onClick={()=>dispatch(counterActions.decrement())}>-</button>
        <input type={'number'} ref={inputv} / >
        <button onClick={()=>dispatch(counterActions.addByValue( +inputv.current.value))} >Assign</button>
    </div> );
}
 
export default ReduxExampleReduxToolKit;