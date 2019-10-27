import * as React from 'react';
import './styles.scss';

export class Messages extends React.Component<{}, {}> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="container-msg">
                <div className="chat">
                    <div className="mine messages">
                        <div className="username">
                            <p>Me</p>
                        </div>

                        <div className="message">
                            Dude
                        </div>
                    </div>

                    <div className="yours messages">
                        <div className="username">
                            <p>John Wast</p>
                        </div>

                        <div className="message">
                            Hey!
                        </div>
                    </div>

                    <div className="yours messages">
                        <div className="username">
                            <p>Linda May</p>
                        </div>

                        <div className="message">
                            You there?
                        </div>
                    </div>

                    <div className="yours messages">
                        <div className="username">
                            <p>Vicent Tan</p>
                        </div>

                        <div className="message">
                            Hello, how's it going?
                        </div>
                    </div>

                    <div className="mine messages">
                        <div className="username">
                            <p>Me</p>
                        </div>

                        <div className="message">
                            Great thanks!
                        </div>
                    </div>

                    <div className="mine messages">
                        <div className="username">
                            <p>Me</p>
                        </div>

                        <div className="message">
                            How about you?
                        </div>
                    </div>

                    <div className="mine messages">
                        <div className="username">
                            <p>Me</p>
                        </div>

                        <div className="message">
                            Dude
                        </div>
                    </div>

                    <div className="yours messages">
                        <div className="username">
                            <p>John Wast</p>
                        </div>

                        <div className="message">
                            Hey!
                        </div>
                    </div>

                    <div className="yours messages">
                        <div className="username">
                            <p>Linda May</p>
                        </div>

                        <div className="message">
                            You there?
                        </div>
                    </div>

                    <div className="yours messages">
                        <div className="username">
                            <p>Vicent Tan</p>
                        </div>

                        <div className="message">
                            Hello, how's it going?
                        </div>
                    </div>

                    <div className="mine messages">
                        <div className="username">
                            <p>Me</p>
                        </div>

                        <div className="message">
                            Great thanks!
                        </div>
                    </div>

                    <div className="mine messages">
                        <div className="username">
                            <p>Me</p>
                        </div>

                        <div className="message">
                            How about you?
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
