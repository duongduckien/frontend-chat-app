import * as React from 'react';
import i18n from '../../utilities/i18n';
import './styles.scss';

// Utilities
import Storage from '../../utilities/storage';

export class Header extends React.Component<{}> {

    clearStorage() {
        Storage.clear();
    }

    render() {
        return (
            <div>
                <header>
                    <h3>{i18n.t('TITLE')}</h3>
                    <button
                        onClick={() => this.clearStorage()}
                    >Clear storage</button>
                </header>
            </div>
        );
    }

}
