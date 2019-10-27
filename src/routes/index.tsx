import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import EnterName from '../components/EnterName';
import Conversations from '../components/Conversations';
import ConversationDetail from '../components/ConversationDetail';

class Router extends React.Component<{}> {

    render() {
        return (
            <main>
                <Switch>
                    <Route path="/" exact component={EnterName} />
                    <Route path="/conversations" exact component={Conversations} />
                    <Route path="/conversation/:id" exact component={ConversationDetail} />
                </Switch>
            </main>
        );
    }

}

export default Router;
