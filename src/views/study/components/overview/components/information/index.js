import React, { Component } from "react";
import { compose } from "react-apollo";
import { reduxForm } from "redux-form";
import {
  InputField,
  TextareaField,
  ReactSelectField
} from "teselagen-react-components";

class information extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col-md-10 col-md-offset-1">
        <form>
          <InputField name={"studyName"} inlineLabel label="Study Name" />
          <TextareaField
            name={"studyDescription"}
            inlineLabel
            label="Description"
          />
          <ReactSelectField
            name="studyCollaborators"
            inlineLabel
            label="Collaborators"
            options={[
              {
                label: "Rodrigo Pavez",
                value: { name: "Rodrigo Pavez", id: "123" }
              },
              { label: "Ximena Morales", value: "Ximena Morales" },
              { label: "Kyle Craft", value: "Kyle Craft" },
              { label: "Sam Denicola", value: "Sam Denicola" },
              { label: "Tom Ogasawara", value: "Tom Ogasawara" }
            ]}
          />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "study", // <------ same form name
  destroyOnUnmount: true, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount,
})(information);
