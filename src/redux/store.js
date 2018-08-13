import { applyMiddleware, compose, createStore } from "redux";
// thunk is used by open-vector-editor
import thunk from "redux-thunk";
import rootReducer from "./reducers";
const composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            actionsBlacklist: [],
            name: "lims app"
        })) ||
    compose;
let store;

store = createStore(
    rootReducer,
    undefined, //we don't have an initial state, so this is undefined
    composeEnhancers(applyMiddleware(thunk))
);

window.teGlobalStore = store;

export default store;
