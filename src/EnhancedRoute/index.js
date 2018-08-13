import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

export class EnhancedRoute extends Component {
  renderEnhancedComponent = props => {
    const {
      component: Component,
      loggedIn,
      privateRoute,
      path,
      componentProps,
      currentUser,
      location,
      ...rest
    } = this.props;
    if (loggedIn || !privateRoute) {
      return (
        <Component
          {...{
            ...componentProps,
            loggedIn,
            currentUser,
            ...props,
            ...rest
          }}
        />
      );
    } else {
      return (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      );
    }
  };

  renderComponent = props => {
    const { fullWidth } = this.props;
    if (fullWidth) {
      return this.renderEnhancedComponent(props);
    } else {
      return (
        <div className={"app-content"}>
          {this.renderEnhancedComponent(props)}
        </div>
      );
    }
  };

  render() {
    let {
      component: Component, // needs to be pulled off
      privateRoute,
      path,
      currentUser,
      ...rest
    } = this.props;
    return <Route path={path} {...rest} render={this.renderComponent} />;
  }
}

export default EnhancedRoute;
