import React from "react";
import { FunctionComponent } from "react";
import { connect } from "react-redux";
import {
  CounterDecrementAction,
  CounterIncrementAction,
} from "../Actions/counter";
import {RootState} from  '../Reducer/CombineReducer'
interface Props {
    counter:Number,
    IncrementDispatch: Function,
    DecrementDispatch:Function
}
type State = {};

// const ReduxExample: FunctionComponent<Props> = () => {
//   const dispatch = useDispatch();
//   const counterReducer = useSelector((state :RootState ) => state.counterReducer.counter);
//   const Increment = () => {
//     console.log("Increment");
//     dispatch(CounterIncrementAction());
//   };
//   const Decrement = () => {
//     console.log("Decrement");
//     dispatch(CounterDecrementAction());
//   };

//   return (
//     <div>
//       {counterReducer}
//       <button onClick={Increment}>+</button>
//       <button onClick={Decrement}>-</button>
//     </div>
//   );
// };

// export default ReduxExample;

const ReduxExample: FunctionComponent<Props> = ({ 
    counter,
    IncrementDispatch,
    DecrementDispatch}) => {
  const Increment = () => {
    console.log("Increment");
    IncrementDispatch();
  };
  const Decrement = () => {
    console.log("Decrement");
    DecrementDispatch();
  };

  return (
    <div>
      {JSON.stringify(counter)}
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </div>
  );
};

// export class ReduxExampleClass extends React.Component<Props, State>{
//      Increment =()=>{
//         console.log("Increment",this.props.IncrementDispatch);

//         this.props.IncrementDispatch()
//     }
//      Decrement =()=>{
//         console.log("Decrement");
//         this.props.DecrementDispatch()
//     }
//   render() {
//     return (
//         <div>
//         {JSON.stringify(this.props.counter)}
//         <button onClick={this.Increment}>+</button>
//         <button onClick={this.Decrement}>-</button>
//       </div>
//     );
//   };
// };

 const mapStateToProps = (state:RootState, ownProps:any) => {
    return {
        counter: state.counterReducer.counter
    }
}
 const mapDispatchToProps = (dispatch:any, ownProps:any) => {
    return {
        IncrementDispatch: () => {
            dispatch(CounterIncrementAction())
        },
        DecrementDispatch: () => {
            dispatch(CounterDecrementAction())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxExample);
