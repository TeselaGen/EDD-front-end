import React, { Component } from "react";
import PropTypes from "prop-types";
import Step from "./step";
import "./style.css";
import Identify from "./identify";
import Upload from "./upload";
import Resolve from "./resolve";
import { get } from "lodash";
import { connect } from "react-redux";
import { reduxForm, formValueSelector } from "redux-form";
import actions from "../../../redux/actions";
const steps = [
  {
    title: "Identify",
    Component: <h2>Identify body</h2>
  },
  {
    title: "Upload",
    Component: <h2>upload body</h2>
  },
  {
    title: "Resolve",
    Component: <h2>resolve body</h2>
  },
  {
    title: "Inspect",
    Component: <h2>inspect body</h2>
  },
  {
    title: "Import",
    Component: <h2>import body</h2>
  }
];

class StepForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderStepNav() {
    const { submitting, setpage, page } = this.props;
    return steps.reduce((acc, step, i) => {
      acc.push(
        <Step
          key={i}
          title={step.title}
          complete={page > i}
          active={page === i}
          disabled={page < i || submitting}
          setActive={() => {
            setpage(i);
          }}
          step={i}
        />
      );
      if (i < steps.length - 1)
        acc.push(
          <div key={`step-separator-${i}`} className="step-separator" />
        );
      return acc;
    }, []);
  }

  render() {
    const { onSubmit, category, protocol, file, page, setpage } = this.props;
    return (
      <div className="tg-step-form-container">
        <div className="tg-step-form-title-and-nav-container">
          <div className="tg-step-form-nav">{this.renderStepNav()}</div>
        </div>
        <hr />
        <ul className="pt-breadcrumbs">
          {page > 0 ? (
            <li>
              <span className="pt-breadcrumbs pt-disabled">
                <b>Category: </b> {category}
              </span>
            </li>
          ) : (
            ""
          )}
          {page > 0 ? (
            <li>
              <span className="pt-breadcrumbs pt-disabled">
                <b>Protocol: </b> {protocol}
              </span>
            </li>
          ) : (
            ""
          )}
          {page > 1 && file ? (
            <li>
              <span className="pt-breadcrumbs">
                <b>File:</b> {get(file[0], "name")}
              </span>
            </li>
          ) : (
            ""
          )}
        </ul>
        {page === 0 && <Identify onSubmit={() => setpage(1)} />}
        {page === 1 && <Upload onSubmit={() => setpage(2)} />}
        {page === 2 && <Resolve onSubmit={() => setpage(3)} />}
      </div>
    );
  }
}

StepForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  setpage: actions.step.setpage
};

StepForm = reduxForm({
  form: "importData" // a unique identifier for this form
})(StepForm);

// Decorate with connect to read form values
const selector = formValueSelector("importData"); // <-- same as form name
StepForm = connect(state => {
  const { category, protocol, file } = selector(
    state,
    "category",
    "protocol",
    "file"
  );
  const page = state.step.page;
  return {
    category,
    protocol,
    file,
    page
  };
}, mapDispatchToProps)(StepForm);

export default StepForm;
