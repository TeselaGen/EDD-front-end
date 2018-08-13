import React from "react";
import { reduxForm } from "redux-form";
import { Button, Classes, Intent } from "@blueprintjs/core";
import { SelectField, RadioGroupField, InputField } from "teselagen-react-components";


const resolve = props => {

  const { handleSubmit } = props;
  return <form onSubmit={handleSubmit}>
      <div className="tg-flex">
        <div className="pt-dialog-body">
          <h3 className="form-component-title" style={{marginTop: "10px", marginBottom: "10px"}}>
            Help EDD understand your file
          </h3>
          <SelectField inlineLabel options={["hey", "you", "guys"]} name={"lineName"} label="Line Name" />
          <SelectField inlineLabel options={["hey", "you", "guys"]} name={"totalArea"} label="Total Area" />
          <hr />
          <h3 className="form-component-title"style={{marginTop: "10px", marginBottom: "10px"}}>
            Match the file to your study
          </h3>
          <h5><b>Line Names</b></h5>
          <p style={{marginBottom : "3px"}}>Identifiers in the file didn't match line names in your study. Please help EDD match the file to the study</p>
          <SelectField inlineLabel options={["hey", "you", "guys"]} name={"lineName"} label="Line Name" />
          <SelectField inlineLabel options={["hey", "you", "guys"]} name={"totalArea"} label="Total Area" />
          <hr />
          <h3 className="form-component-title" style={{marginTop: "10px", marginBottom: "10px"}}>
            Assays
          </h3>
           <RadioGroupField
            name={"assays"}
            label={"Your study already contains 'Targeted Proteomics' assays with values measured at Oh. Where do you want data from your file to go?"}
            options={[
              {
                label: "In a existing assay",
                value: "existing_assay"
              },
              {
                label: "Replace existing 50 values at Oh",
                value: "replace"
              },
              {
                label: "Create a new assay at Oh",
                value: "create"
              },
              {
                label: "In a new assay",
                value: "new_assay"
              }
            ]}
          />
          <hr />
          <h3 className="form-component-title"style={{marginTop: "10px", marginBottom: "10px"}}>
            Standardize your data
          </h3>
          <h5><b>Protein Name</b></h5>
          <p style={{marginBottom : "10px"}}>The following proteins weren't found in EDD, and didn't match the pattern for a UniProt accession ID.
          Please provide a valid Uniprot identifier for each protein, or imit the unidentified protein from this import. You can avoid this step next time
          by using Uniprot ID's in your file.</p>
          <InputField
            name={"IDL_ECOLI"}
            inlineLabel
            label="IDL Ecoli"
          />
          <InputField
            name={"TRFE_HUMAN"}
            inlineLabel
            label="TRFE Human"
          />
          <hr />
          <h3 className="form-component-title"style={{marginTop: "10px", marginBottom: "10px"}}>
            Complete the picture
          </h3>
          <p style={{marginBottom : "10px"}}>Provide other required values that weren't found in your life</p>
          <InputField
            name={"measurement_time"}
            inlineLabel
            label="Measurement time"
          />
          <InputField
            name={"units"}
            inlineLabel
            label="Units"
          />
          <Button style={{ float: "right" }} icon="arrow-right" text="Next Page" className={Classes.MINIMAL} type="submit" intent={Intent.PRIMARY} />
        </div>
      </div>
    </form>;
};

export default reduxForm({
  form: "importData", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount,
  getFormState: ({ form }) => form
})(resolve);
