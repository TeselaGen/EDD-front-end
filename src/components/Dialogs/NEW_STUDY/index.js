import React, { Component } from "react";
import DialogFooter from '../dialogFooter';
import { Dialog } from "@blueprintjs/core";
import { reduxForm } from "redux-form";
import {
    InputField,
    SelectField,
    TextareaField
} from "teselagen-react-components";

class addStudyDialog extends Component {
    sendData = async values => {
        try {
           
        } catch (err) {
            console.error("err:", err);
            window.toastr.error("Error creating new study");
        }
    };

    render() {
        const { submitting, hideModal, handleSubmit, initialValues } = this.props;

        return (
            <Dialog
                icon={initialValues ? "edit" : "add"}
                isOpen={true}
                onClose={hideModal}
                title={initialValues ? "Edit Study" : "Add Study"}
            >
                <form onSubmit={handleSubmit(this.sendData)}>
                    <div className="tg-flex">
                        <div className="pt-dialog-body">
                            <InputField name="name" label="Name" />
                            <TextareaField name="description" label="Description" />
                            <SelectField
                                name="contact"
                                label="Contact"
                                placeholder="Select a contact"
                                options={[{ value: "1", label: "admin" }]}
                            />
                        </div>
                    </div>
                    <DialogFooter hideModal={hideModal} loading={submitting} />
                </form>
            </Dialog>
        );
    }
}



export default reduxForm({
    form: "addNewStudy"
})(addStudyDialog);
