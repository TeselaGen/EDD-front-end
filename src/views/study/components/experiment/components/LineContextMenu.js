import React from "react";
import _ from "lodash";
import { MenuItem, MenuDivider } from "@blueprintjs/core";

/**
 * Render Context Menu for Lines DataTable
 * @param {*} props
 * @param {*} object from row selected
 */
export const LineContextMenu = (props, { selectedRecords }) => {
  const plural = selectedRecords.length > 1;

  const args = {
    items: selectedRecords,
    plural,
    props
  };

  const menuItems = [
    {
      item: (
        <MenuItem
          icon="edit"
          key="editLine"
          onClick={editLine.bind(this, args)}
          text={"Edit Line"}
        />
      ),
      showInPlural: false
    },
    {
      item: (
        <MenuItem
          icon="duplicate"
          key="cloneLine"
          onClick={cloneLine.bind(this, args)}
          text={`Clone ${plural ? "Lines" : "Line"}`}
        />
      ),
      showInPlural: true
    },
    {
      item: (
        <MenuItem
          icon="add"
          key="addAssay"
          onClick={addAssay.bind(this, args)}
          text={"Add Assay"}
        />
      ),
      showInPlural: false
    },
    {
      item: (
        <MenuItem
          icon="delete"
          key="deleteLine"
          onClick={deleteLine.bind(this, args)}
          text={`Delete ${plural ? "Lines" : "Line"}`}
        />
      ),
      showInPlural: true
    }
  ];

  const menu = [<MenuDivider key="title" title="Line" />];

  for (const menuItem of menuItems) {
    if (plural) {
      if (plural === menuItem.showInPlural) {
        menu.push(menuItem.item);
      }
      continue;
    }
    menu.push(menuItem.item);
  }

  return menu;
};

/**
 * Function to edit a line
 * @param {*} {items , props} item: line to edit, props: props from upper component
 */
const editLine = ({ items, props }) => {
  const { show } = props;
  const initialValues = {
    id: 1,
    name: "My Line",
    description: "Description for a line",
    isControl: true,
    contact: 1,
    experimenter: 1,
    metadataFields: 1
  };
  show({
    modalType: "ADD_LINE",
    modalProps: {
      study: props.study,
      refreshTable: refreshTable.bind(this, props),
      initialValues
    }
  });
};

const cloneLine = async ({ items, props }) => {
    //clonning line
};

const cloneObject = (target, original) => {
  //clonning object
};

const addAssay = async ({ items, props }) => {

  show({
    modalType: "ADD_ASSAY",
    modalProps: {
      line: item
    }
  });
};

/**
 * Function to delete lines
 * @param {*} {items , props} items: lines to edit, props: props from upper component
 */
const deleteLine = async ({ items, plural, props }) => {
  // deleting line
};

/**
 * Refresh table after Edit or Delete a line
 * @param {*} props props from upper component
 */
const refreshTable = props => {
  props.tableParams.onRefresh();
};
