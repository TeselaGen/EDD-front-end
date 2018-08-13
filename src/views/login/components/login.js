import React from "react";
import { Login } from "teselagen-platform-ux";
import { SubmissionError } from "redux-form";
import _get from "lodash/get";

import "./style.css";

export default class TestModuleLogin extends React.Component {
  attemptLogin = data => {
    //comunication with server
    console.log('login...')
  };

  render() {
    return (
      <Login
        appName="TEST"
        logoURL={"url"}
        tgLogoURL="/teselagen-white-text.png"
        onSubmitLogin={this.attemptLogin}
        {...this.props}
      />
    );
  }
}
