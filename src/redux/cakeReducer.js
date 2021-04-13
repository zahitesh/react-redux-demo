import { BUY_CAKE } from "./cakeTypes";

const initialCake = {
  numOfCake: 10
};

export const cakeReducer = (state = initialCake, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - action.payload
      };
    default:
      return state;
  }
};
