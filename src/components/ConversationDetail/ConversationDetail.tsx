import * as React from 'react';
import { Table, Col, Image } from 'react-bootstrap';
import i18n from '../../utilities/i18n';
import './styles.scss';

// Components
import Messages from '../common/Messages';

export class ConversationDetail extends React.Component<{}, {}> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="container-con-detail">
                <p className="page-title">Conversation Detail</p>

                <div className="container-fluid table-detail">
                    <div className="row">
                        <Col md={4} className="nopadding title col-users">
                            <p>Users</p>
                        </Col>

                        <Col md={8} className="nopadding title">
                            <p>Messages</p>
                        </Col>

                        <Col md={4} className="nopadding col-users list-users">
                            <ul>
                                <li>
                                    <Image src={require('../../assets/images/no-user.jpg')} roundedCircle />
                                    <span>Me</span>
                                </li>
                                <li>
                                    <Image src={require('../../assets/images/no-user.jpg')} roundedCircle />
                                    <span>John Wast</span>
                                </li>
                                <li>
                                    <Image src={require('../../assets/images/no-user.jpg')} roundedCircle />
                                    <span>Linda May</span>
                                </li>
                                <li>
                                    <Image src={require('../../assets/images/no-user.jpg')} roundedCircle />
                                    <span>Vicent Tan</span>
                                </li>
                            </ul>
                        </Col>

                        <Col md={8} className="nopadding col-msg">
                            <Messages />

                            <div className="chat-input">
                                <div className="chat-input-items left">
                                    <input placeholder={i18n.t('ENTER_MSG')} />
                                </div>

                                <div className="chat-input-items right">
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                    >{i18n.t('SEND')}</button>
                                </div>
                            </div>
                        </Col>
                    </div>
                </div>
            </div>
        );
    }

}
