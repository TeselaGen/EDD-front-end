import { tg_modalState } from "teselagen-react-components";
import { combineReducers } from "redux";
import ui from "./ui";
import step from "./step";
import { reducer as formReducer } from "redux-form";
import { platformReducer } from "teselagen-platform-ux";


export default combineReducers({
  ui,
  step,
  form: formReducer,
  tg_modalState,
  platform: platformReducer
});
