import React from "react";
import { Button, Intent, Classes } from "@blueprintjs/core";
import { DataTable, withQuery } from "teselagen-react-components";
import { compose } from "react-apollo";
import { connect } from "react-redux";
import actionCreators from "../../../../../redux/actions";
import axios from "axios";
import { last } from "lodash";

const schema = {
  fields: [
    { path: "filename", displayName: "File Name" },
    { path: "description", displayName: "Description" },
    { path: "file_size", displayName: "File size" },
    { path: "file", displayName: "Download" }
  ]
};

const mapDispatchToProps = {
  show: actionCreators.ui.modal.show
};

const attachments = props => {
 
  const downloadFile = async (path, record) => {
    //download file
  };

  return (
    <div className="col-md-11 col-md-offset-1">
      <DataTable
        isSimple
        entities={[]}
        schema={schema}
        withPaging
        withCheckboxes
        cellRenderer={{
          file: (value, record) => {
            return (
              <Button
                icon="download"
                text="Download File"
                intent={Intent.SUCCESS}
                className={Classes.MINIMAL}
                onClick={e => downloadFile(value, record)}
              />
            );
          }
        }}
      >
        <Button
          icon="add"
          text="Add Attachment"
          formName="attachmentList"
          intent={Intent.PRIMARY}
          className={Classes.MINIMAL}
          onClick={() => {
            props.show({
              modalType: "ADD_ATTACHMENT",
              modalProps: {
                refresh: props.refetchAttachments,
                id: props.id
              }
            });
          }}
        />
      </DataTable>
    </div>
  );
};

export default compose(
  connect(null, mapDispatchToProps)
)(attachments);
