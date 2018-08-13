import React, { Component } from "react";
import { get } from "lodash";
import { Loading } from "teselagen-react-components";
import { FocusStyleManager } from "@blueprintjs/core";
import { withRouter } from "react-router-dom";
import AppHeader from './components/Header/AppHeader'
//import AppBody from "./AppBody";
import RootModal from "./components/RootModal";
import AppBody from "./AppBody";

FocusStyleManager.onlyShowFocusOnTabs();

const user = {
    id: "1",
    loginName:"test@teselagen.com",
    user: { id: "1", avatarFileId: null, firstName: "Test", lastName: "User", username: "Test User",},
    userId:"1",
    __typename:"userLogin"
}

class AppContentManager extends Component {
   
    render() {
        if (this.props.data && this.props.data.error) {
            // let error = this.props.data.error
        }
        const { history } = this.props;
        const currentUser = {user} // = fetching current user from data base
        let loading = false; // loading while fetching data
        const logout = {} // function to log out  
        return (
            <React.Fragment>
                <RootModal currentUser={currentUser} history={history} />
                <MainContent
                    currentUser={currentUser}
                    loading={loading}
                    logout={this.logout}
                    refetchCurrentUser={()=>{ console.log('call the function to refetch the user') }}
                />
            </React.Fragment>
        );
    }
}

export default AppContentManager;



function MainContent(props) {
    const { currentUser, loading, logout, refetchCurrentUser } = props;
    const loggedIn = !!get(currentUser, "user.id");

    if (loading) {
        return <Loading />;
    } else {
        return (
            <React.Fragment>
                {loggedIn && (
                    <AppHeader
                        loggedIn={loggedIn}
                        currentUser={currentUser}
                        logout={logout}
                    />
                )}
                <AppBody
                    currentUser={currentUser}
                    loggedIn={loggedIn}
                    refetchCurrentUser={refetchCurrentUser}
                />
            </React.Fragment>
        );
    }
}


