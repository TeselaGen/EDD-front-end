import React, {Component} from "react";
import Accordion from '../../../../../components/Accordion/index.js'
import Permissions from "./permissions/index";
import Attachments from "./attachements/index";
import Comments from "./comments/index";
import BasicInformation from "./information";
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
const values = {
  studyName: data.study.object_ref.name,
  studyDescription: data.study.object_ref.description,
  studyCollaborators: [data.study.contact_id]
};
class overview extends Component {
  render(){
    let elements = [
      { title:"Study Information",   
        content:< BasicInformation study={ data } initialValues={ values } history={ this.props.history } id={ data.study.id } />
      },
      { title:"Permissions",
        content:<Permissions />
      },
      { title:'Attachments',
        content:<Attachments id={data.study.id} />
      },
      { title:"Comments",
        content:<Comments id={data.study.id}/>
      }
    ]
    return (
      <div>
        <Accordion elements={elements} />
      </div>);
  }
}

export default overview;
