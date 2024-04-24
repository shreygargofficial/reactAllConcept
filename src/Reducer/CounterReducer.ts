import { ACTIONS } from "../Actions/ActionConstants";

export interface Action {
  type: string;
  payload?: any;
}
const INITIAL_STATE = {
  counter: 4,
};
export const CounterReducer = (state = INITIAL_STATE, action: Action) => {

  switch (action.type) {
    case ACTIONS.DECREMENT:
        console.log("Reducer",action.type,action.payload);
        
      return {
        ...state,
        counter: state.counter - action.payload,
      };

    case ACTIONS.INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    default:
      return state;
  }
};
