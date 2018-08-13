import React from 'react';
import { MenuItem, MenuDivider } from "@blueprintjs/core";

/**
 * Render Context Menu for Studys DataTable
 * @param {*} props
 * @param {*} object from row selected
 */
export const StudyContextMenu = (props, {selectedRecords}) => {
  const plural = selectedRecords.length > 1;

  const args = {
    items: selectedRecords,
    plural,
    props
  };

  const menuItems = [
    {
      item: <MenuItem icon="edit" key="editStudy" onClick={ editStudy.bind(this, args) } text={ "Edit Study" } />,
      showInPlural: false
    },
    {
      item: <MenuItem icon="delete" key="deleteStudy" onClick={ deleteStudy.bind(this, args) } text={ `Delete ${plural ? 'Studies' : 'Study'}` } />,
      showInPlural: true
    }
  ];

  const menu = [<MenuDivider key="title" title="Study" />];

  for (const menuItem of menuItems) {
    if (plural) {
      if (plural === menuItem.showInPlural) {
        menu.push(menuItem.item);
      }
      continue;
    }
    menu.push(menuItem.item);
  }

  return (menu);
}

/**
 * Function to edit a study
 * @param {*} {items , props} item: study to edit, props: props from upper component
 */
const editStudy = ({items, props}) => {
  const {show} = props;
  const item = items[0];

  const initialValues = {
    id: item.object_ref_id,
    name: item.object_ref.name,
    description: item.object_ref.description,
    contact: item.contact_id
  }

  show({
    modalType: "NEW_STUDY",
    modalProps: {
      study: props.study,
      initialValues
    }
  });
}

/**
 * Function to delete studies
 * @param {*} {items , props} items: studies to edit, props: props from upper component
 */
const deleteStudy = async ({items, plural, props}) => {
  const args = {
    plural,
    model: props.tableParams.schema.model
  };
  //deleting
}

/**
 * Refresh table after Edit or Delete a study
 * @param {*} props props from upper component
 */
const refreshTable = (props) => {
  props.tableParams.onRefresh();
}
