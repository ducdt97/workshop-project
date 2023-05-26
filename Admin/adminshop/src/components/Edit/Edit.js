import React, { useEffect, useState } from 'react'
import "./Edit.scss"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';

const Edit = () => {
  const http = ("http://localhost:1337")
  const { id } = useParams();
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const [imgageProduct, setImage] = useState("")
  const [hinhanh, setHinhanh] = useState("")
  // const [formData, setFormData] = useState({
  //   title: '',
  //   description: '',
  //   // img: '',
  //   price: ''
  // });

  useEffect(() => {
    // Fetch the product data based on the ID
    axios.get(`${http}/api/products/${id}?populate=*`)
      .then(response => {
        const product = response.data.data;
        console.log(product)
        // setFormData({
        setTitle(product.attributes.title)
        setImage(product.attributes?.img?.data[0]?.attributes?.url)
        setDescription(product.attributes.description,)
        setPrice(product.attributes.price)

      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  // const handleInputChange = (e) => {
  //   // const { name, value } = e.target;
  //   // setFormData((prevFormData) => ({
  //   //   ...prevFormData,
  //   //   [name]: value,
  //   // }));
  //   setTitle(e.target.title)
  //   setDescription(e.target.description)
  //   setPrice(e.target.price)
  // };
  console.log(imgageProduct, ">>>>test")


  const handleSubmit = async () => {
    try {
      console.log(id)
      const response = await fetch(`http://localhost:1337/api/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: {
            title: title,
            description: description,
            price: price,
          }
        })
      });

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
  const hanldAvatar = (e) => {
    const imager = (e.target.files[0])
    const object = URL.createObjectURL(imager)
    setHinhanh(object)
  }

  return (
    <div className='addusers'>
      <div className='top'>
        <h1>update Product</h1>
      </div>
      <div className='bottom'>
        <div className='left'> <img src={hinhanh ? hinhanh : "http://localhost:1337" + imgageProduct} />
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
              <label>User title</label>
              <input type='text' value={title} onChange={e => { setTitle(e.target.value) }} />
            </div>
            <div className='forminput'>
              <label>description </label> <br></br>
              <textarea type='textarea' value={description} onChange={e => { setDescription(e.target.value) }} />
            </div>
            <div className='forminput'>
              <label>price </label>
              <input type='number' value={price} onChange={e => { setPrice(e.target.value) }} />
            </div>
            <button className='buttonadd' onClick={handleSubmit}>UPDATE</button>
          </div>
        </div>
      </div>
    </div >
  );
};


export default Edit
