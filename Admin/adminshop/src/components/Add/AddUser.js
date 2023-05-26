import React, { useState } from 'react'
import "./AddUser.scss"
import AddIcon from '@mui/icons-material/Add';





const AddUser = () => {
    const [Avatar, setAvatar] = useState()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const hanldAvatar = (e) => {
        setAvatar(e.target.files[0])

    }

    // const hanldAddUser = (e) => {
    //     setName(e.target.value)
    //     setEmail(e.target.value)
    //     setPassword(e.target.value)
    // }11
    // const hanldAdd = () => {
    //     setAddUser([{
    //         name: name,
    //         Avatar: "https://th.bing.com/th/id/R.af879c885f85336fb759d86fc5398612?rik=BjZzbIBnNlktNA&pid=ImgRaw&r=0" || URL.createObjectURL(Avatar),
    //         email: email,
    //         password: password,
    //     }])

    // }

    const hanldAdd = async (e) => {
        e.preventDefault();
        try {
            // Gửi dữ liệu lên Strapi
            const response = await fetch('http://localhost:1337/api/admins?populate=*', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    data: {
                        email: email,
                        name: name,
                        Avatar: Avatar,
                        password: password,
                    }
                })
            });
            console.log(Avatar);
            const data = await response.json();
            // Xử lý dữ liệu đăng kí thành công hoặc lỗi từ Strapi
            if (response.ok) {
                // Đăng kí thành công
                alert('thêm thành công', data);
            } else {
                // Đăng kí thất bại
                alert('thêm thất bại', data);
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className='addusers'>
            <div className='top'>
                <h1>Add New Users</h1>
            </div>
            <div className='bottom'>
                <div className='left'> <img src={Avatar ? URL.createObjectURL(Avatar) :
                    "https://th.bing.com/th/id/R.af879c885f85336fb759d86fc5398612?rik=BjZzbIBnNlktNA&pid=ImgRaw&r=0"} />
                    <div className='forminput' >
                        <label htmlFor="file">
                            <AddIcon className='icon' />
                        </label>
                        <input type='file' id="file" onChange={hanldAvatar} style={{ display: 'none' }} />
                    </div>
                </div>
                <div className='right'>
                    <div className='form'>

                        <div className='forminput'>
                            <label>User Name</label>
                            <input type='text' value={name} onChange={e => { setName(e.target.value) }} />
                        </div>
                        <div className='forminput'>
                            <label>Email </label>
                            <input type='email' value={email} onChange={e => { setEmail(e.target.value) }} />
                        </div>
                        <div className='forminput'>
                            <label>Password </label>
                            <input type='password' value={password} onChange={e => { setPassword(e.target.value) }} />
                        </div>
                        <button className='buttonadd' onClick={hanldAdd}>add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser
