import React, { Component } from "react";
import _ from "lodash";
import { DataTable } from "teselagen-react-components";
import { ButtonGroup, Intent, Button, Dialog } from "@blueprintjs/core";
import { LineContextMenu } from "./LineContextMenu";

const schema = {
  model: "line",
  fields: [
    {
      path: "object_ref.name",
      displayName: "Name"
    },
    {
      path: "object_ref.description",
      displayName: "Description"
    },
    {
      path: "strain",
      displayName: "Strain"
    },
    {
      path: "carbonSource",
      displayName: "Carbon Source(s)"
    },
    {
      path: "labeling",
      displayName: "Labeling"
    },
    {
      path: "object_ref.meta_store",
      displayName: "Metadata"
    }
  ]
}

export default class experimentDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      metadata: null
    };
  }

  showModal(show) {
    show({
      modalType: "ADD_LINE",
      modalProps: {
        study: this.props.study,
        refreshTable: this.refreshTable.bind(this)
      }
    });
  }

  /**
   * Refresh table after Edit or Delete a line
   * @param {*} props props from upper component
   */
  refreshTable() {
    this.props.tableParams.onRefresh();
  }

  renderShowMetadata(metadata) {
    return metadata ? (
      <Button
        text="Show Metadata"
        intent={Intent.PRIMARY}
        onClick={this.showMetadata.bind(this, metadata)}
      />
    ) : (
      <span>No metadata</span>
    );
  }

  async showMetadata(metadata) {
    const meta = hstoreToKeyValueArray(metadata);
    await this.setState({ metadata: meta });
    this.toggleDialog();
  }

  toggleDialog() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  renderMetadata(metadata) {
    const mdt = _.find(this.props.metadataTypes, {
      id: metadata.id.toString()
    });

    return (
      <tr key={metadata.id}>
        <td>{mdt.type_name}</td>
        <td>{metadata.value}</td>
      </tr>
    );
  }

  render() {
    const { tableParams, show } = this.props;
    return (
      <div>
        <div className="col-md-12 row">
          <div className="col-md-12">
            <div className="pt-inline">
              <span
                className="pt-icon-cloud-upload"
                style={{ fontSize: "30px", color: "#108ee9" }}
              />
              <span style={{ margin: 10 }}>
                Drag and drop an experiment description file below to add more
                lines
              </span>
              <a>(Example file)</a>
            </div>
          </div>
          <DataTable
            doNotShowEmptyRows
            formName='LineTable'
            withSort
            withSearch
            withPaging
            schema={schema}
            entities={[]}
            contextMenu={LineContextMenu.bind(this, this.props)}
            cellRenderer={{
              "object_ref.meta_store": this.renderShowMetadata.bind(this)
            }}
          >
            <Button
              icon="add"
              text="New line"
              intent={Intent.SUCCESS}
              onClick={this.showModal.bind(this, show)}
            />
            <i style={{ margin: 10 }}>
              (Right-click an item to see more options.)
            </i>
          </DataTable>
        </div>
        <div className="col-md-12 row" style={{ marginTop: "20px" }}>
          <div className="col-md-6" />
          <div className="col-md-2 col-md-offset-3">
            <ButtonGroup large={false}>
              <Button text="Generate Worklist" intent={Intent.PRIMARY} />&emsp;
              <Button text="Export Data" intent={Intent.PRIMARY} />
            </ButtonGroup>
          </div>
        </div>
        <Dialog
          icon="list-detail-view"
          isOpen={this.state.isOpen}
          onClose={this.toggleDialog.bind(this)}
          title="Item Metadata"
        >
          <div className="pt-dialog-body">
            <table class="pt-html-table pt-html-table-striped col-md-12">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {this.state.metadata
                  ? this.state.metadata.map(mdf => this.renderMetadata(mdf))
                  : null}
              </tbody>
            </table>
          </div>
          {/* <div className="pt-dialog-footer">
            <div className="pt-dialog-footer-actions">
              <Button intent={Intent.PRIMARY} onClick={this.toggleDialog.bind(this)} text="Close" />
            </div>
          </div> */}
        </Dialog>
      </div>
    );
  }
}

/* <ButtonGroup large={ false }>
<Button icon="edit" text="Edit" intent={ Intent.PRIMARY } className={ Classes.MINIMAL } />
<Button icon="duplicate" text="Clone" intent={ Intent.PRIMARY } className={ Classes.MINIMAL } />
<Button icon="group-objects" text="Group" intent={ Intent.PRIMARY } className={ Classes.MINIMAL } />
<Button icon="add" text="Add Assay" intent={ Intent.PRIMARY } className={ Classes.MINIMAL } />
<Button icon="delete" text="Delete" intent={ Intent.PRIMARY } className={ Classes.MINIMAL } />
</ButtonGroup>*/
