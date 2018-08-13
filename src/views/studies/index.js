import studiesPage from "./components";
import { compose } from "react-apollo";
import { withTableParams } from "teselagen-react-components";
import { connect } from "react-redux";
import actionCreators from "../../redux/actions";

const mapDispatchToProps = {
  show: actionCreators.ui.modal.show
};

const schema = {
  model: "study",
  fields: [
    {
      path: "object_ref.name",
      displayName: "Study name"
    },
    {
      path: "object_ref.description",
      displayName: "Description"
    },
    {
      path: "object_ref.created.mod_by.username",
      displayName: "Owner"
    },
    {
      path: "object_ref.created.mod_time",
      displayName: "Created"
    }
  ]
};

const entities = [
  {
    contact_id: "1",
    object_ref:{
      created:{
        id:"1",
        mod_by:{
          id:"1",
          username:"Admin"
        }
      },
      description:"this is my first study",
      id:"6",
      name:"My first Study"
    },
    object_ref_id:"6",
    slug:null,
    __typename:"study"
  },
  {
    contact_id: "2",
    object_ref: {
      created: {
        id: "2",
        mod_by: {
          id: "2",
          username: "Felipe"
        }
      },
      description: "this is another study",
      id: "1",
      name: "My favorite Study"
    },
    object_ref_id: "1",
    slug: null,
    __typename: "study"
  }
]

export default compose(
  withTableParams({
    formName: "StudiesList",
    schema,
    entities,
    defaults: {
      sort: ["name"]
    }
  }),
  connect(null, mapDispatchToProps)
)(studiesPage);
