import * as React from 'react';
import './App.scss';
import { Container, Row, Col } from 'react-bootstrap';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './routes';

class App extends React.Component<{}> {

    render() {
        return (
            <div>
                <Header />

                <div className="container-fluid pl-0">
                    <div className="row">
                        <Col md={1}></Col>

                        <Col md={10}>
                            <Router />
                        </Col>

                        <Col md={1}></Col>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }

}

export default App;