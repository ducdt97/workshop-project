import React, { useEffect, useState } from 'react'
import "./Edit.scss"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';

const Edit = () => {
  const http = ("http://localhost:1337")
  const { id } = useParams();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [avatar, setAvatar] = useState("")
  const [hinhanh, setHinhanh] = useState("")

  // const [formData, setFormData] = useState({
  //   title: '',
  //   description: '',
  //   // img: '',
  //   price: ''
  // });

  useEffect(() => {
    // Fetch the product data based on the ID
    axios.get(`${http}/api/accounts/${id}?populate=*`)
      .then(response => {
        const register = response.data.data;
        // setFormData({
        setName(register.attributes.name)
        setAvatar(register.attributes?.Avatar?.data[0]?.attributes?.url)
        setEmail(register.attributes.email,)
        // img: product.img,
        setPassword(register.attributes.password)
        // });
        // console.log(formData)
      })

      .catch(error => {
        console.error(error);
      });
  }, [id]);
  console.log(avatar)

  const handleSubmit = async () => {
    try {
      console.log(id)
      const response = await fetch(`http://localhost:1337/api/Admins/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: {
            name: name,
            email: email,
            password: password,
          }
        })
      });
      console.log('Product updated successfully');

      if (response.ok) {
        console.log('Product updated successfully');
        // Perform any additional actions upon successful update
      } else {
        throw new Error('Failed to update product');
      }
    } catch (error) {
      console.error(error);
      // Handle the error appropriately
    }
  };
  // 
  const hanldAvatar = (e) => {
    const imager = (e.target.files[0])
    const object = URL.createObjectURL(imager)
    setHinhanh(object)
  }
  console.log(avatar)

  return (
    <div className='addusers'>
      <div className='top'>
        <h1>Update Users</h1>
      </div>
      <div className='bottom'>
        <div className='left'> <img src={hinhanh ? hinhanh : "http://localhost:1337" + avatar} />
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
            <button className='buttonadd' onClick={handleSubmit}>update</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Edit
