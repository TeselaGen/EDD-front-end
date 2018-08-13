import React, { Component } from "react";
import { ButtonGroup, Button } from "@blueprintjs/core";
import Table from "./table";
import Charts from './charts';
export default class overview extends Component {
  constructor(props) {
    super(props)
    this.state = {
       tab : 'table'
    };
  }

  renderContent(){
    switch (this.state.tab) {
      case "table":
        return <Table />;
      case "bar":
        return <Charts graph="bar" />
      case "line":
        return <Charts graph="line" />;
      default:
        break;
    }
  }
  render() {
    return (
      <div>
        <div className="col-md-12 row" style={{ marginBottom: "30px" }}>
          <ButtonGroup minimal={true} large={false}>
            <Button icon="timeline-line-chart" onClick={()=>this.setState({tab: 'line'})}>Line Graph</Button>
            <Button icon="timeline-bar-chart" onClick={()=>this.setState({tab: 'bar'})}>Bar Graph</Button>
            <Button icon="th" onClick={()=>this.setState({tab: 'table'})}>Table</Button>
          </ButtonGroup>
        </div>
        {this.renderContent()}
      </div>
    );
  }
}
