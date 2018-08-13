import actions from "../../actions";
import { handleActions } from "redux-actions";

const initialState = {
    modalType: null,
    modalProps: {}
};

export default handleActions(
    {
        [actions.ui.modal.show]: function (state, action) {
            return {
                modalType: action.payload.modalType,
                modalProps: action.payload.modalProps
            };
        },
        [actions.ui.modal.hide]: function (/*state, action*/) {
            return initialState;
        }
    },
    initialState
);
