import overview from './components';
import { compose } from "react-apollo";
import actionCreators from "../../../../redux/actions";

const mapDispatchToProps = {
  show: actionCreators.ui.modal.show
};

export default compose(
)(overview);
