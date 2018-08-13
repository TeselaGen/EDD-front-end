import React from "react";
import { Tabs, Tab } from "@blueprintjs/core";

const tab = props => {
  return (
    <Tabs
      className="pt-vertical"
      selectedTabId={props.selectedTab}
      onChange={props.changeTab}
    >
      <Tab id="overview" title="Overview" />
      <Tab id="experiment" title="Experiment Description" />
      <Tab id="data" title="Data" />
    </Tabs>
  );
};
export default tab;
