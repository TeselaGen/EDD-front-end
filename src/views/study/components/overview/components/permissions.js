import React from "react";
import { FormGroup, Button, Intent, Classes } from "@blueprintjs/core";

const permissions = props => {
  return <div className="col-md-6 col-md-offset-1">
      <FormGroup label="Test User" required={true} inline>
        <div className="pt-select">
          <select>
            <option defaultValue>Choose level</option>
            <option value="1">One</option>
          </select>
        </div>
      </FormGroup>
      <Button icon="cog" text="Configure Permissions" intent={Intent.PRIMARY} className={Classes.MINIMAL} />
    </div>;
};
export default permissions;
