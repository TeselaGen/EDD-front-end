import { injectPlatformActions } from "teselagen-platform-ux";
let { createActions } = require("redux-actions");

const identity = payload => payload;
const actionCreators = createActions({
  // // function form; payload creator defined inline
  //   ACTION_ONE: (key, value) => ({ [key]: value }),

  //   // array form
  //   ACTION_TWO: [
  //     (first) => [first],             // payload
  //     (first, second) => ({ second }) // meta
  //   ],

  //this could be how we could get flowtypes working with this
  // update: function (payload: boolean) {
  //   return {
  //     payload,
  //     type: 'DB/MATERIALS/UPDATE'
  //   }
  // }

  STEP: {
    SETPAGE: identity
  },
  UI: {
    MODAL: {
      SHOW: identity,
      HIDE: identity
    }
  }
});

export default injectPlatformActions(actionCreators);
