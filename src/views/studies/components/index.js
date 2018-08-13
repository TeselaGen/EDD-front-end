import React, { Component } from "react";
import { Button, Intent } from "@blueprintjs/core";
import { DataTable } from "teselagen-react-components";
import "../style.css";
import { StudyContextMenu } from "./StudyContextMenu";

export default class StudiesPage extends Component {
  showModal(show) {
    show({
      modalType: "NEW_STUDY",
      modalProps: {
        refreshTable: this.refreshTable.bind(this)
      }
    });
  }

  refreshTable() {
    this.props.tableParams.onRefresh();
  }

  openStudy(study) {
    const { history } = this.props;
    history.push(`/study/${study.object_ref_id}/overview`);
  }

  render() {
    const { show, tableParams } = this.props;
    return (
      <div className="container">
        <div className="col-md-12">
          <div className="row">
            <h1>Studies Page</h1>
          </div>
        </div>
        <DataTable
          doNotShowEmptyRows
          withSort
          isSingleSelect
          withSearch
          withPaging
          onDoubleClick={this.openStudy.bind(this)}
          {...tableParams}
          contextMenu={StudyContextMenu.bind(this, this.props)}
        >
          <Button
            icon="add"
            text="New study"
            intent={Intent.SUCCESS}
            onClick={this.showModal.bind(this, show)}
          />
          <i style={{ margin: 10 }}>
            (Right-click an item to see more options.)
          </i>
        </DataTable>
      </div>
    );
  }
}
