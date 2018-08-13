import React, { Component } from "react";
import { FormGroup, Collapse } from "@blueprintjs/core";
export default class accordion extends Component {
  constructor(props) {
    super(props)
    this.state = {
       isOpen: false
    };
  }

  render() {
    return <div className="col-md-12">
        <FormGroup label={<span onClick={() => {
                this.setState({ isOpen: !this.state.isOpen });
              }} className={!this.state.isOpen ? "pt-icon-caret-right noselect" : "pt-icon-caret-down noselect"} style={{ cursor: "pointer" }}>
              {this.props.title}
            </span>} required={true} inline>
          <div style={{ border: "1px solid #ccc", width: "880px", marginTop: "20px", position: "absolute", right: 0 }} />
        </FormGroup>
        <Collapse isOpen={this.state.isOpen}>{this.props.content}</Collapse>
      </div>;
  }
}
