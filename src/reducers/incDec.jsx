const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      let inc = state - 1;
      if (inc <= 0) {
        inc = 0;
      }
      return inc;
    default:
      return state;
  }
};

export default changeTheNumber;
