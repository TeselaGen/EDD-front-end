import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { Button, Classes, Intent } from "@blueprintjs/core";
import { FileUploadField } from "teselagen-react-components";

class upload extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="tg-flex">
          <div className="pt-dialog-body">
            <FileUploadField
              label="Upload component"
              name={"file"}
              fileLimit={1}
            />
            <Button
              style={{ float: "right" }}
              icon="arrow-right"
              text="Next Page"
              className={Classes.MINIMAL}
              onClick={this.rotateLeft}
              type="submit"
              intent={Intent.PRIMARY}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm(
  {
    form: "importData", // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true // <------ unregister fields on unmount
  })(upload);
