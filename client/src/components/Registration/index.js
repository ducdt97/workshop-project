import React, { useState } from 'react';
import {
    Col,
    Row,
    Button,
    FormGroup,
    Input,
} from 'reactstrap';
import { useNavigate } from "react-router-dom"
import { message } from 'antd';
import './style.css';

function Registration() {
    const history = useNavigate();
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const handleSubmit = async (e) => {
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
            <Col className='sub-register' sm='12' md={{ size: 4, offset: 4 }}>
                <div>
                    <h2>Sign Up</h2>
                    <FormGroup row>
                        <Input type='text' placeholder='Please enter your name' required onChange={(e) => setName(e.target.value)} />
                    </FormGroup>
                    <FormGroup row>
                        <Input type='email' placeholder='Please enter your email' required onChange={(e) => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup row>
                        <Input type="password" name="password" value={password} placeholder='Please enter password' required onChange={(e) => setPassword(e.target.value)} />
                        {passwordError && <div className="error">{passwordError}</div>}
                    </FormGroup>
                    <FormGroup row>
                        <Input type="password" name="confirmPassword" value={confirmPassword} placeholder='Please reenter your password' required onChange={(e) => setConfirmPassword(e.target.value)} />
                    </FormGroup>
                    <Button color='primary' onClick={handleSubmit}>Login</Button>
                </div>
            </Col>
        </Row>
    );
}

export default Registration;