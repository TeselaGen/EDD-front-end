import overview from './components';
import { compose } from "react-apollo";
import { reduxForm } from 'redux-form'
import actionCreators from "../../../../redux/actions";

const mapDispatchToProps = {
  show: actionCreators.ui.modal.show
};

export default compose(
  reduxForm({
    form: "study", // <------ same form name
    destroyOnUnmount: true, // <------ preserve form data
    forceUnregisterOnUnmount: true // <------ unregister fields on unmount,
  })
)(overview);
