import React, { useState } from 'react';
import {
    Form,
    Button,
    Col,
    Row,
} from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import { message } from 'antd';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Registration() {
    const history = useNavigate();
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const handleSubmit = async (e)=> {
        e.preventDefault();
        const emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailFormat.test(email)) {
            message.error("Please enter a valid email address.")
            return;
        }
        if (password.length < 8) {
            message.error('Password must be more than 8 characters')
            return;
        }
        if (password !== confirmPassword) {
            message.error("Password does not match")
            return;
        }
        try {
            const response = await fetch('http://localhost:1337/api/accounts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: {
                        name: name,
                        email: email,
                        password: password,
                        confirmPassword: confirmPassword,
                    }
                })
            });

            const data = await response.json();

            if (response.ok) {
                history('/login')
                // Đăng ký thành công

                console.log('Sign Up Success!', data);
            } else {
                if (data.email) {
                    message.error('Registration failed. Email is already in use.')
                } else {
                    message.error('Registration failed. Please register again')
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Row className="register"  >
            <Col className='sub-register'  sm='12' md={{ span: 4, offset: 4 }}>
                <div>
                    <h2>Sign Up</h2>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Control type='text' placeholder='Please enter your name' required onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type='email' placeholder='Please enter your email' required onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password"name="password" value={password} placeholder='Please enter password' required onChange={(e) => setPassword(e.target.value)} />
                            {passwordError && <div className="error">{passwordError}</div>}
                        </Form.Group>
                        <Form.Group controlId="formBasicConfirmPassword">
                            <Form.Control type="password" name="confirmPassword" value={confirmPassword} placeholder='Please reenter your password' required onChange={(e) => setConfirmPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant='primary' onClick={handleSubmit}>Sign Up</Button>
                    </Form>
                </div>
            </Col>
        </Row>
    );
}

export default Registration;