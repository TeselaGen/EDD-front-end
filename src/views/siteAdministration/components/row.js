import React, { Component } from "react";
import { Button, Intent, Classes } from "@blueprintjs/core";
import { compose } from "react-apollo";
import { connect } from "react-redux";
import actionCreators from "../../../redux/actions";

class row extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { content, show } = this.props;
    return (
      <div>
        {content.map((element, index) => (
          <tr className="row" key={index}>
            {element.message}
            <Button
              className={Classes.MINIMAL}
              style={{ position: "absolute", right: "0" }}
              icon="add"
              text="Add"
              intent={Intent.SUCCESS}
              onClick={() => {
                show({
                  modalType: element.type,
                  modalProps: {
                   
                  }
                });
              }}
            />
          </tr>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = {
  show: actionCreators.ui.modal.show
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  )
)(row);
