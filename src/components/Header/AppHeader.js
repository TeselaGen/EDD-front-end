import React, { Component } from "react";
import { PlatformHeader } from "teselagen-platform-ux";
import "./style.css";

const topMenu = [
  { name: "Dashboard", navTo: "/dashboard", icon: "layers" },
  { name: "Studies", navTo: "/studies", icon: "layers" },
  // { name: "Assays Requests", navTo: "/assaysreq", icon: "layers" },
  // { name: "Pending Results", navTo: "/pendingsres", icon: "layers" }
];

const userExtra = [
  // { divider: 'Extra section', tooltip: 'Some fancy stuff' },
  // { text: 'Some custom item', icon: 'duplicate', shortcut: '^M' },
  // { text: 'Some other one', icon: 'build', shortcut: '^H' },
];

// const searchSettings = {
//   models: ['study'],
//   timeField: 'updatedAt',
//   client
// };

class TestModuleHeader extends Component {
  // handleInteraction = state => {
  //   this.props.toggleTaskManager(state);
  // };

  render() {
    const { logout, currentUser, loggedIn } = this.props;

    return (
      <PlatformHeader
        {...{ currentUser, logout, loggedIn }}
        className="compact-navx"
        appName="EDD"
        menuItems={topMenu}
        userExtraItems={userExtra}
        onSearch={null}
      />
    );
  }
}

export default TestModuleHeader;
