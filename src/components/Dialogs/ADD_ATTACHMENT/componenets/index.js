import React, { Component } from "react";
import DialogFooter from "../../dialogFooter";
import { reduxForm } from "redux-form";
import { compose } from "react-apollo";
import {
  FileUploadField,
  InputField,
  TextareaField
} from "teselagen-react-components";

class addStudyDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sendData = async values => {
    //send
  };

  render() {
    const { submitting, hideModal, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.sendData)}>
        <div className="tg-flex">
          <div className="pt-dialog-body">
            <InputField name="name" label="Name" />
            <TextareaField name="description" label="Description" />
            <FileUploadField
              label="Attach file"
              name={"uploadfield"}
              fileLimit={1}
            />
          </div>
        </div>
        <DialogFooter hideModal={hideModal} loading={submitting} />
      </form>
    );
  }
}

export default compose(
  reduxForm({
    form: "study"
  })
)(addStudyDialog);
