const INITIAL_STATE = { courseUnit: [] };

export default function courseReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_DATA": {
      return { ...state, courseUnit: action.payload };
    }
    default:
      return state;
  }
}
