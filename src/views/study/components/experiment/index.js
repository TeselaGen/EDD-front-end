import experimentDescription from "./components";
import { compose } from "react-apollo";
import { connect } from "react-redux";
import actionCreators from "../../../../redux/actions";
import {
  withQuery,
  withTableParams,
  withUpsert,
  withDelete
} from "teselagen-react-components";


const schema = {
  model: "line",
  fields: [
    {
      path: "object_ref.name",
      displayName: "Name"
    },
    {
      path: "object_ref.description",
      displayName: "Description"
    },
    {
      path: "strain",
      displayName: "Strain"
    },
    {
      path: "carbonSource",
      displayName: "Carbon Source(s)"
    },
    {
      path: "labeling",
      displayName: "Labeling"
    },
    {
      path: "object_ref.meta_store",
      displayName: "Metadata"
    }
    /* {
      path: "shakingSpeed",
      displayName: "Shaking Speed"
    }, {
      path: "startingOD",
      displayName: "Starting OD"
    }, {
      path: "cultureVolume",
      displayName: "Culture Volume"
    }, {
      path: "flaskVolume",
      displayName: "Flask Volume"
    }, {
      path: "growthTemperature",
      displayName: "Growth Temperature"
    },
    {
      path: "media",
      displayName: "Media"
    }*/
  ]
};

const mapDispatchToProps = {
  show: actionCreators.ui.modal.show
};

export default compose(
  connect(null, mapDispatchToProps)
)(experimentDescription);
