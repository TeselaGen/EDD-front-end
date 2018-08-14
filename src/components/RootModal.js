import React from "react";
import { connect } from "react-redux";

// These are regular React components we will write soon
import actions from "../redux/actions";

// import DemoReactComponentMoldal from './someRoute'
import newStudy from './Dialogs/NEW_STUDY'
import addAttachment from './Dialogs/ADD_ATTACHMENT'
const MODAL_COMPONENTS = {
  //DEMO_MODAL : DemoReactComponentModal
  NEW_STUDY: newStudy,
  ADD_ATTACHMENT: addAttachment
};

const RootModal = ({
  modalType,
  modalProps,
  hideModal: reduxHideModal,
  ...rest
}) => {
  if (!modalType) {
    return null;
  }
  // to get rid of passing event through
  const hideModal = () => reduxHideModal();
  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...{ hideModal, ...modalProps, ...rest }} />;
};

export default connect(state => state.ui.modal, {
  hideModal: actions.ui.modal.hide
})(RootModal);
