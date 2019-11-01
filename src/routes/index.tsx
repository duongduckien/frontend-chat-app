import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Utilities
import Storage from '../utilities/storage';

// Components
import EnterName from '../components/EnterName';
import Conversations from '../components/Conversations';
import ConversationDetail from '../components/ConversationDetail';

// Routes
import PrivateRoute from './private.route';

const Router: React.FC<{}> = () => {

    const isAuthenticated = (): boolean => {
        return Storage.getItem('userinfo') ? true : false;
    };

    return (
        <main>
            <Switch>
                <Route path='/' exact render={() => isAuthenticated() === true 
                    ? <Redirect to={{ pathname: '/conversations' }} /> 
                    : <EnterName />} />
                <PrivateRoute authed={isAuthenticated()} path='/conversations' component={Conversations} />
                <PrivateRoute authed={isAuthenticated()} path='/conversation/:id' exact component={ConversationDetail} />
            </Switch>
        </main>
    );
    
};

export default Router;
