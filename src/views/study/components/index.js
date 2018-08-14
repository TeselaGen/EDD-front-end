import React, { Component } from "react";
import Overview from "./overview";
import Experiment from "./experiment";
import Data from "./data";
import Helmet from "react-helmet";
import "./index.css";
import { Tabs, Tab, Button, Classes, Intent } from "@blueprintjs/core";

const study = {
  object_ref_id: "6",
  slug: null,
  contact_id: "1",
  object_ref: {
    id: "6",
    description: "description test",
    name: "study 1",
    created: {
      id: "1",
      mod_by: {
        id: "1",
        username: "test"
      },
      mod_time: "2018-08-10T15:35:47.489Z"
    }
  }
};

class studyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderTabs = () => {
    let list = [
      {
        key: "overview",
        id: "overview",
        title: "Overview"
      },
      {
        key: "experiment",
        id: "experiment",
        title: "Experiment"
      },
      {
        key: "data",
        id: "data",
        title: "Data"
      }
    ];

    return list.map(({ id, title }) => (
      <Tab key={title} id={id} title={title} panel={this.renderPanel(id)} />
    ));
  };

  renderPanel = id => (
    <div className="tool-library-info">{this.renderContent(id)}</div>
  );

  renderContent(key) {
    const { history } = this.props;
    switch (key) {
      case "data": {
        return <Data />;
      }
      case "experiment": {
        return <Experiment study={study} />;
      }
      default: {
        return (
          <Overview study={study} history={history} />
        );
      }
    }
  }

  changeTab(e) {
    if (e !== this.state.selectedTab) {
      this.props.history.replace(e);
    }
  }

  render() {
    const { history, match: { params } } = this.props;
    return (
      <div>
        <Helmet title={'My Study'} />
        <div className="header" style={{ marginTop: "20px" }}>
          <h2>{'My Study'}</h2>
        </div>          
        <Button style={{ float: "right" }} icon="import" onClick={()=> history.push('/study/6/import-data')} text="Import Data" className={Classes.MINIMAL} intent={Intent.PRIMARY} />
        <div className="tool-library-container">
          <div className="tool-library">
            <Tabs
              id="toolsLibrary"
              vertical
              onChange={this.changeTab.bind(this)}
              selectedTab={params.tab}
              selectedTabId={params.tab}
            >
              {this.renderTabs()}
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default studyPage;
