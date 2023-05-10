import React, { useState } from 'react';
import "./Register.scss"

function Register() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    /*const handleButtonLogin = () => {
        if (confirmPassword === password) {
            setMangUser({
                email: email,
                name: name,
                password: password,
            })
        } else {
            alert("vui long nhap lai")
            setPassword("")
            setConfirmPassword("")
        }

    }
    console.log(manguser)*/

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Gửi dữ liệu lên Strapi
            const response = await fetch('http://localhost:1337/api/dangkis', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    data: {
                        email: email,
                        name: name,
                        password: password,
                    }
                })
            });

            const data = await response.json();
            // Xử lý dữ liệu đăng kí thành công hoặc lỗi từ Strapi
            if (response.ok) {
                // Đăng kí thành công
                alert('Đăng kí thành công', data);
            } else {
                // Đăng kí thất bại
                alert('Đăng kí thất bại', data);
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="signup-form">
            <h2>Sign Up</h2>
            <form >
                <div className="form-group">
                    <label>Email:</label>
                    <input type='email' placeholder='vui lòng điền email' required onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Name:</label>
                    <input placeholder='vui lòng điền tên' required onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={confirmPassword} required onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <div onClick={handleSubmit}>Login</div>

            </form>
        </div>
    );
}


export default Register;