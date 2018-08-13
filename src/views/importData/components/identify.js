import React from "react";
import { reduxForm } from "redux-form";
import { Intent, Button, Classes } from "@blueprintjs/core";
import { RadioGroupField, ReactSelectField } from "teselagen-react-components";

const identify = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="tg-flex">
        <div className="pt-dialog-body">
          <RadioGroupField
            name={"category"}
            label={"What category of data do you have?"}
            options={[
              {
                label: "Proteomics",
                value: "proteomics"
              },
              {
                label: "Metabolomics",
                value: "metabolomics"
              },
              {
                label: "Transcriptomics",
                value: "tanscriptomics"
              },
              { label: "OD600", value: "OD600" },
              { label: "Other", value: "other" }
            ]}
          />
          <ReactSelectField
            name="protocol"
            label="What protocol did you use?"
            options={[
              {
                label: "JBEI Shotgun Proteomics",
                value: "JBEI_SHOTGUN_PROTEOMICS"
              },
              {
                label: "JBEI Targeted Proteomics",
                value: "JBEI_TARGETED_PROTEOMICS"
              },
              {
                label: "PNNL Global Proteomics",
                value: "PNNL_GLOBAL_PROTEOMICS"
              }
            ]}
          />
          <RadioGroupField
            name={"fileFormat"}
            label={"What is your file format?"}
            options={[
              { label: "Standard Import", value: "STANDARD_IMPORT" },
              { label: "Skyline", value: "SKYLINE" },
              { label: "Custom Spreadsheet", value: "CUSTOM" }
            ]}
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
};

const validate = values => {
  const errors = {}
  if (!values.category) {
    errors.category = 'Required'
  }
  if (!values.protocol) {
    errors.protocol = 'Required'
  }
  if(!values.fileFormat){
    errors.fileFormat = "Required"
  }
  return errors
}

export default reduxForm({
  form: "importData", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(identify);
