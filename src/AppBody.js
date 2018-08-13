import React from "react";
import { map } from "lodash";
import { Switch } from "react-router-dom";
import classNames from "classnames";
import EnhancedRoute from "./EnhancedRoute";
import NoResourceFound from "./views/NoResourceFound";

import { privateRoutes, publicRoutes } from "./routes/appRoutes";


export default function AppBody(props) {
    const { loggedIn, currentUser, refetchCurrentUser } = props;

    return (
        <div
            id="app-body"
            className={classNames({
                // need the second condition for routes like password-reset
                // which can be reached even when logged in
                "logged-out": !loggedIn || publicRoutes[window.location.pathname]
            })}
        >
            <Switch>
                {map(publicRoutes, (component, path) => (
                    <EnhancedRoute
                        key={path}
                        currentUser={currentUser}
                        fullWidth
                        exact
                        loggedIn={loggedIn}
                        refetchUser={refetchCurrentUser}
                        path={path}
                        component={component}
                    />
                ))}

                {map(privateRoutes, (component, path) => (
                    <EnhancedRoute
                        key={path}
                        privateRoute
                        exact
                        loggedIn={loggedIn}
                        currentUser={currentUser}
                        path={path}
                        component={component}
                    />
                ))}
                <EnhancedRoute component={NoResourceFound} path="/not-found" />
                <EnhancedRoute component={NoResourceFound} />
            </Switch>
        </div>
    );
}
