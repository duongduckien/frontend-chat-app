import * as React from 'react';
import i18n from '../../utilities/i18n';
import './styles.scss';

export class Header extends React.Component<{}> {

    render() {
        return (
            <div>
                <header>
                    <h3>{i18n.t('TITLE')}</h3>
                </header>
            </div>
        );
    }

}
