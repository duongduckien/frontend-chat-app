import * as React from 'react';
import { Table, Col } from 'react-bootstrap';
import i18n from '../../utilities/i18n';
import './styles.scss';

// Components
import InputText from '../common/InputText';

interface IProps {
    actions: {
        conversations: any;
    };
}

interface IState {
    disableCreate: boolean;
    conversationName: string;
}

export class Conversations extends React.Component<IProps, IState> {

    state = {
        disableCreate: true,
        conversationName: '',
    };

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.conversations.getConversations();
    }

    setConversationName(value: string) {
        this.setState({ conversationName: value }, () => {
            if (this.state.conversationName.trim() !== '' && this.state.conversationName.length > 3) {
                this.setState({ disableCreate: false });
            } else {
                this.setState({ disableCreate: true });
            }
        });
    }

    render() {
        return (
            <div className="container-conversations">
                <p>{i18n.t('CONVERSATIONS_TITLE')}</p>

                <Col md={{ span: 6, offset: 3 }}>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>{i18n.t('NO')}</th>
                                <th>{i18n.t('NAME')}</th>
                                <th>{i18n.t('ACTIONS')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Room 1</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                    >{i18n.t('GO')}</button>

                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                    >{i18n.t('REMOVE')}</button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>

                <div>
                    <div className="create-con-item">
                        <InputText
                            placeholder={i18n.t('CREATE_CONVERSATION_PLACEHOLDER')}
                            onChange={(event) => this.setConversationName(event.target.value)}
                        />
                    </div>
                    
                    <div className="create-con-item">
                        <button
                            type="button"
                            className="btn btn-success"
                            disabled={this.state.disableCreate}
                        >{i18n.t('CREATE')}</button>
                    </div>
                </div>
            </div>
        );
    }

}
