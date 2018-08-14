import React, { Component } from "react";
import { compose } from "react-apollo";
import { reduxForm } from "redux-form";
import {
  InputField,
  TextareaField,
  ReactSelectField
} from "teselagen-react-components";
import { Intent, Button, Classes } from "@blueprintjs/core";

class information extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
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
          multi
          options={[
            { label: "Rodrigo Pavez", value: "1" },
            { label: "Ximena Morales", value: "Ximena Morales" },
            { label: "Kyle Craft", value: "Kyle Craft" },
            { label: "Sam Denicola", value: "Sam Denicola" },
            { label: "Tom Ogasawara", value: "Tom Ogasawara" }
          ]}
        />
        <div className="pt-dialog-footer-actions">
          <Button
            icon="save"
            text="Save"
            intent={Intent.SUCCESS}
            style={{ float: "right", marginBottom: "15px" }}
            onClick={() => {
              console.log("saving data");
            }}
          />
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "study", // <------ same form name
  destroyOnUnmount: true, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount,
})(information);
