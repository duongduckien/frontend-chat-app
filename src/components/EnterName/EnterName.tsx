import * as React from 'react';
import i18n from '../../utilities/i18n';
import './styles.scss';

// Components
import InputText from '../common/InputText';

interface IProps {
    actions: {
        users: any;
    };
}

interface IState {
    username: string;
    disableSubmit: boolean;
}

export class EnterName extends React.Component<IProps, IState> {

    state = {
        username: '',
        disableSubmit: true,
    };

    constructor(props: any) {
        super(props);
    }

    submit() {
        if (this.state.username.trim() !== '') {
            const data = {
                name: this.state.username,
            };
            this.props.actions.users.submitUsername(data);
        }
    }

    setUsername(value: string) {
        this.setState({ username: value }, () => {
            if (this.state.username.trim() !== '' && this.state.username.length > 3) {
                this.setState({ disableSubmit: false });
            } else {
                this.setState({ disableSubmit: true });
            }
        });
    }

    render() {
        return (
            <div className="container-entername">
                <div className="container-items">
                    <InputText
                        placeholder={i18n.t('ENTER_NAME_PLACEHOLDER')}
                        onChange={(event) => this.setUsername(event.target.value)}
                    />
                </div>

                <div className="container-items">
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.submit()}
                        disabled={this.state.disableSubmit}
                    >{i18n.t('SUBMIT')}</button>
                </div>
            </div>
        );
    }

}
