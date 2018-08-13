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
      selectedTab: null,
      study: null,
      history: null,
      tabs: null
    };
  }

  componentWillMount() {
    this.setState({
      selectedTab: this.props.match.params.tab || "overview",
      study: study.object_ref,
      history: this.props.history
    });
  }

  componentDidMount() {
    let tabs = this.renderTabs();
    this.setState({
      tabs
    });
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
    switch (key) {
      case "data": {
        return <Data />;
      }
      case "experiment": {
        return <Experiment study={this.state.study} />;
      }
      default: {
        return (
          <Overview study={this.state.study} history={this.state.history} />
        );
      }
    }
  }

  changeTab(e) {
    if (e !== this.state.selectedTab) {
      this.props.history.replace(e);
      this.setState({
        selectedTab: e
      });
    }
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <Helmet title={'My Study'} />
        <div className="header" style={{ marginTop: "20px" }}>
          <h2>{'My Study'}</h2>
          {/* <i style={ { left: "0", right: "0", margin: "auto", color: "#111111" } }>{ this.props.eddObject.description }</i> */}
        </div>          
        <Button style={{ float: "right" }} icon="import" onClick={()=> history.push('/study/6/import-data')} text="Import Data" className={Classes.MINIMAL} intent={Intent.PRIMARY} />
        <div className="tool-library-container">
          <div className="tool-library">
            <Tabs
              id="toolsLibrary"
              vertical
              onChange={this.changeTab.bind(this)}
              selectedTab={this.state.selectedTab}
              selectedTabId={this.state.selectedTab}
            >
              {this.state.tabs}
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default studyPage;
