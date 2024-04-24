import { ACTIONS } from "./ActionConstants"

// export const CounterIncrementAction =()=>{
//     return async(dispatch: any)=>{
//         let myData = await fetch("https://dummyjson.com/products/", {
//             method: "get",
//           });
//           console.log("without json", myData);
//           let data = await myData.json();
//         dispatch({
//             type: ACTIONS.INCREMENT,
//             payload : data
//         });
//     }  
// }

export const CounterIncrementAction =()=>{
   
    return {
     type: ACTIONS.INCREMENT,
     payload: 2,
    }
       
}


export const CounterDecrementAction =()=>{
    return {
        type: ACTIONS.DECREMENT,
        payload : 3
    }
}