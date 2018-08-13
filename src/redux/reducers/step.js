import actions from "../actions";
import { handleActions } from "redux-actions";

const initialState = {
  page: 0
};

export default handleActions(
  {
    [actions.step.setpage]: function(state, action) {
      return {
        page: action.payload
      };
    }
  },
  initialState
);
