import React, { Component } from "react";
import { compose } from "react-apollo";
import { TextArea, Intent, Button, Classes, Tag } from "@blueprintjs/core";

import "./comments.css";

class comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  createCommnet = async () => {
    // adding new comment
  };

  renderComments() {
    const { comments } = this.props;
    if (comments) {
      return comments.map(c => (
        <li className="clearfix" key={c.id}>
          <div>
            <span className="message-data-time">{c.createdAt}</span> &nbsp;
            &nbsp;
            <span className="message-data-name">
              <span className="pt-icon-caret-right" />
              Test User
            </span>{" "}
            <i className="fa fa-circle me" />
          </div>
          <div className="message other-message float-right">{c.body}</div>
        </li>
      ));
    }
  }

  render() {
    return (
      <form>
        <ul className="chat">{this.renderComments()}</ul>
        <TextArea
          fill
          intent={Intent.PRIMARY}
          onChange={e => this.setState({ text: e.target.value })}
          value={this.state.text}
          placeholder="write a new comment"
        />
        <div className="pt-dialog-footer-actions">
          <Button
            icon="add"
            text="Add Comment"
            intent={Intent.PRIMARY}
            style={{ float: "right", marginTop: '15px', }}
            onClick={() => this.createCommnet()}
          />
        </div>
      </form>
    );
  }
}

export default compose()(comments);
