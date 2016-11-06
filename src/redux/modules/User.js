/**
 * Created by deepaksisodiya on 06/11/16.
 */


const initialState = {
  name:'Deepak',
  age:25,
};

let UserReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_NAME':
      state = {
        ...state,
        name: action.payload,
      };
      break;
    case 'SET_AGE':
      state = {
        ...state,
        age: action.payload,
      };
      break;
  }
  return state;
};

export default UserReducer;