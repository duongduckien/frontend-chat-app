import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Col, Image } from 'react-bootstrap';
import i18n from '../../utilities/i18n';
import './styles.scss';

// Components
import Messages from '../common/Messages';

export class ConversationDetail extends React.Component<{}, {}> {

    constructor(props: any) {
        super(props);
    }

    leaveRoom() {
        return <Redirect to='/conversations' />;
    }

    render() {
        return (
            <div className="container-con-detail">
                <p className="page-title">{i18n.t('CONVERSATION_DETAIL')}</p>

                <div className="container-fluid table-detail">
                    <div className="row">
                        <Col md={4} className="nopadding title col-users">
                            <p>{i18n.t('USERS')}</p>
                        </Col>

                        <Col md={8} className="nopadding title">
                            <p>{i18n.t('MESSAGES')}</p>
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

                <div className="btn-leave">
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.leaveRoom()}
                    >{i18n.t('LEAVE_ROOM')}</button>
                </div>
            </div>
        );
    }

}
