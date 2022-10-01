import { HANDLE_CHANGE } from "./actions";
const reducer = (state, action) => {
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }
  return {
    ...state,
  };
};
export default reducer;
