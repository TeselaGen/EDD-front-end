import React from "react";
import { DataTable } from "teselagen-react-components";
import {
  ButtonGroup,
  Button,
  Intent,
  Classes
} from "@blueprintjs/core";

const schema = {
  fields: [
    { path: "name", displayName: "Assay Name" },
    { path: "line", displayName: "Line" },
    { path: "measurement", displayName: "Measurement" },
    { path: "units", displayName: "Units" },
    { path: "count", displayName: "Count" },
    { path: "measuringTimes", displayName: "Measuring Times (range 0 to 17)" }
  ]
};

const entities = [
  {
    name: "arrcA",
    line: "arrcA",
    measurement: "Acetate",
    units: "g/L",
    count: "(7)",
    measuringTimes: ""
  },
  {
    name: "BW1",
    line: "BW1",
    measurement: "Optical Density",
    units: "RPKM",
    count: "(7)",
    measuringTimes: ""
  }
];
const overview = props => {
  return <div className="col-md-12 row">
    <DataTable isSimple entities={entities} schema={schema} formName="overViewTable" withPaging withCheckboxes>
        <div className="pt-select pt-minimal">
          <select>
            <option defaultValue>View options</option>
            <option value="1">One</option>
          </select>
        </div>
      </DataTable>
      <div className="col-md-12 row" style={{ marginTop: "20px" }}>
        <div className="col-md-3">
          <Button icon="eye-off" text="Hide Filter Section" intent={Intent.PRIMARY} className={Classes.MINIMAL} />
        </div>
        <div className="col-md-4 col-md-offset-3">
          <ButtonGroup large={false}>
            <Button icon="edit" text="Edit Measurements" intent={Intent.PRIMARY} className={Classes.MINIMAL} />
            <Button icon="add" text="Add Measurements" intent={Intent.PRIMARY} className={Classes.MINIMAL} />
            <Button icon="delete" text="Delete" intent={Intent.PRIMARY} className={Classes.MINIMAL} style={{ marginRight: "40px" }} />
            <Button text="Export Data" intent={Intent.PRIMARY} />
          </ButtonGroup>
        </div>
      </div>
    </div>;
};
export default overview;
