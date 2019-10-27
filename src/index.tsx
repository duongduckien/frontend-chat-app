import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './utilities/i18n';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Redux
import { Provider } from 'react-redux';
import store from './configureStore';

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </I18nextProvider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
