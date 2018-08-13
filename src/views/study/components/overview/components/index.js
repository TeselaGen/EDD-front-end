import React, {Component} from "react";
import Accordion from "../../accordion";
import Permissions from "./permissions";
import Attachments from "./attachments";
import Comments from "./comments";
import BasicInformation from "./basicInformation";
const data = {
  study : {
    "object_ref_id": "6",
    "slug": null,
    "contact_id": "1",
    "object_ref": {
      "id": "6",
      "description": "description test",
      "name": "study 1",
      "created": {
        "id": "1",
        "mod_by": {
          "id": "1",
          "username": "test"
        },
        "mod_time": "2018-08-10T15:35:47.489Z"
      }
    }
  }
}

class overview extends Component {
  render(){
    return (
      <div>
        <Accordion title="Study Information" content={<BasicInformation study={data} history={this.props.history} id={data.study.id} />} />
        <Accordion title="Permissions" content={<Permissions />} />
        <Accordion title="Attachments" content={<Attachments id={data.study.id} />} />
        <Accordion title="Comments" content={<Comments id={data.study.id} />} />
      </div>);
  }
}

export default overview;
