/**
 * Created by deepaksisodiya on 06/11/16.
 */


let initialState = {
  counter: 0,
};

let CounterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      state = {
        ...state,
        counter: state.counter + 1,
      };
      break;
    case 'DECREMENT':
      state = {
        ...state,
        counter: state.counter - 1,
      };
      break;
  }
  return state;
};

export default CounterReducer;