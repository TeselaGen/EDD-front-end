import React, { Component } from "react";
import { compose } from "react-apollo";
import { reduxForm } from "redux-form";
import {
  InputField,
  TextareaField,
  ReactSelectField
} from "teselagen-react-components";
import { Button, Intent, Classes } from "@blueprintjs/core";

const users = [{ id: "1", name: "Test User" }, { id: "0", name: "Admin" }];

class permissions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        {users.map(user => (
          <ReactSelectField
            key={user.id}
            name={user.id + "Permission"}
            inlineLabel
            label={user.name}
            options={[
              { label: "Root Access", value: "root" },
              { label: "View Access", value: "view" },
              { label: "Write Access", value: "write" }
            ]}
          />
        ))}
        <Button
          icon="cog"
          text="Configure Permissions"
          intent={Intent.PRIMARY}
          className={Classes.MINIMAL}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "study", // <------ same form name
  destroyOnUnmount: true, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount,
})(permissions);
