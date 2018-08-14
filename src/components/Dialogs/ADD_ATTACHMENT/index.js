import React, { Component } from "react";
import { Dialog } from "@blueprintjs/core";
import { connect } from "react-redux";
import AddAttachment from "./componenets";

class addStudyDialog extends Component {
  render() {
    const { hideModal, upsertAttachment, history, refresh, id } = this.props;
    return (
      <Dialog
        icon="add"
        isOpen={true}
        onClose={hideModal}
        title="Add Attachment"
        style={{
          width: 650
        }}
      >
        <AddAttachment
          hideModal={hideModal}
          upsertAttachment={upsertAttachment}
          history={history}
          refresh={refresh}
          id={id}
        />
      </Dialog>
    );
  }
}

const mapDispatchToProps = {
  updateLab: function() {
    console.warn("Not yet implemented!");
  }
};

export default connect(
  null,
  mapDispatchToProps
)(addStudyDialog);
