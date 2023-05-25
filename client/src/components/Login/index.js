import React, { useState } from 'react';
import {
    Form,
    Button,
    Col,
    Row,
} from 'react-bootstrap';
import axios from 'axios';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {
        axios.get('http://localhost:1337/api/resgisters')
            .then(response => {
                const users =response.data.data;
                const user = users.find(user => user.attributes.email === email && user.attributes.password === password);
                if (user) {
                    localStorage.setItem('userName', user.attributes.name);
                    localStorage.setItem('userId', user.id);
                    navigate('/')
                } else {
                    alert('Email or password is incorrect')
                    setError("Email or password is incorrect");
                }
            })
            .catch(error => console.log(error));
    };
    return (
        <Row className="login">
            <Col className='sub-login' sm='9' md={{ span: 4, offset: 4}}>
                <div >
                    <h2>Sign in</h2>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" onClick={handleLogin}>Login</Button>
                    </Form>
                    <div className='to-register'>
                        <span style={{ fontWeight: '500' }}>
                            Don't have an account?
                        </span>
                        <Link style={{ fontWeight: '500' }} to='/registration'>Sign Up</Link>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Login;