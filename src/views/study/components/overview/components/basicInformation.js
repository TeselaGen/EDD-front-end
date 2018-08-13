import React, { Component } from "react";
import { compose } from "react-apollo";
import { FormGroup, TextArea, Button, Intent, Classes, Alert } from "@blueprintjs/core";


class basicInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      name: props.study.name,
      description: props.study.description,
      user: props.study.study.contact_id
    };
  }

  updateStudy = async () => {
    try {
      const {upsertEddObject, study} = this.props;
      const {user, name, description} = this.state;
      const data = {
        id: study.id,
        description: description,
        name: name,
        study: {
          object_ref_id: study.id,
          contact_id: user
        }
      // active: 1,
      // meta_store: "askjsda",
      // uuid: "1s"
      };
      await upsertEddObject(data).then(resp => {
        window.toastr.success("study updated");
      });
    } catch (err) {
      console.error("err:", err);
      window.toastr.error("Error updating the study");
    }
  };

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeUser(e) {
    this.setState({
      user: e.target.value
    });
  }

  onDeleteStudyState(state) {
    this.setState({
      onDelete: state
    });
  }

  onDeleteStudy() {
    const { deleteEddObject, history, id } = this.props;
    //deleting
  }

  render() {
    const { authUsers } = this.props;
    let userList = [];
    let users = {};
    if (authUsers && authUsers.length > 0) {
      authUsers.map(u => {
        userList.push({
          label: u.first_name + " " + u.last_name,
          value: u.id
        });
        return (users[u.id] = u.first_name + " " + u.last_name);
      });
    }
    return (
      <div className="col-md-12">
        <div className="col-md-5 col-md-offset-1">
          <FormGroup label="Study name:" labelFor="study-name-input" required={ true }>
            <input className="pt-input" id="text-name-input" value={ this.state.name } onChange={ this.onChangeName.bind(this) } />
          </FormGroup>
          <FormGroup label="Description:" labelFor="study-description-input" required={ true }>
            <TextArea id="text-description-input" value={ this.state.description } onChange={ this.onChangeDescription.bind(this) } />
          </FormGroup>
          <FormGroup label="Contact: " labelFor="text-input" required={ true }>
            <div className="pt-select">
              <select onChange={ this.onChangeUser.bind(this) } value={ this.state.user || '' }>
                { userList.map(user => (
                    <option key={ user.value } value={ user.value }>
                      { user.label }
                    </option>
                  )) }
              </select>
            </div>
          </FormGroup>
        </div>
        <div className="col-md-5">
          <Button icon="automatic-updates" onClick={ this.updateStudy.bind(this) } text="Update Information" intent={ Intent.SUCCESS } className={ Classes.MINIMAL } style={ { marginTop: "30px" } }
          />
          <br />
          <Button icon="delete" onClick={ this.onDeleteStudyState.bind(this, true) } text="Delete Study" intent={ Intent.DANGER } className={ Classes.MINIMAL } style={ { marginTop: "30px" } }
          />
          <Alert isOpen={ this.state.onDelete } onCancel={ this.onDeleteStudyState.bind(this, false) } intent={ Intent.DANGER } className={ Classes.MINIMAL } cancelButtonText="Cancel" confirmButtonText="Delete"
            iconName="alert" onConfirm={ this.onDeleteStudy.bind(this) }>
            <p>
              Are you sure you want to remove <b>{ this.props.study.name }</b>
            </p>
          </Alert>
        </div>
      </div>
      );
  }
}

export default compose(
)(basicInformation);
