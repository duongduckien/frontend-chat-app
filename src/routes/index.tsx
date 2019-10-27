import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

// Utilities
import Storage from '../utilities/storage';

// Components
import EnterName from '../components/EnterName';
import Conversations from '../components/Conversations';
import ConversationDetail from '../components/ConversationDetail';

import PrivateRoute from './private.route';

class Router extends React.Component<{}> {

    constructor(props) {
        super(props);
    }

    isAuthenticated(): boolean {
        // return Storage.getItem('currentuser') ? true : false;
        return true;
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route path="/" exact component={EnterName} />
                    <PrivateRoute authed={this.isAuthenticated()} path='/conversations' component={Conversations} />
                    <PrivateRoute authed={this.isAuthenticated()} path="/conversation/:id" exact component={ConversationDetail} />
                </Switch>
            </main>
        );
    }

}

export default Router;
