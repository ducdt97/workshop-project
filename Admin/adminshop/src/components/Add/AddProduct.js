import React, { useState } from 'react'
import "./AddProduct.scss"
import AddIcon from '@mui/icons-material/Add';
import { createSelector } from '@reduxjs/toolkit';

export const selectCartProducts = createSelector(
    state => state.product.products,
    products => products,
);

const AddProduct = () => {
    const http = ("http://localhost:1337")
    const [imgproduct, setImgproduct] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")



    const hanldAvatar = (e) => {
        setImgproduct(e.target.files[0])

    }

    const hanldAdd = async (e) => {
        e.preventDefault();
        try {
            // Gửi dữ liệu lên Strapi
            const response = await fetch(http + "/api/products?populate=*",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify({
                        data: {
                            title: title,
                            description: description,
                            img: imgproduct,
                            price: price,
                        }
                    })
                });

            const data = await response.json();
            // Xử lý dữ liệu đăng kí thành công hoặc lỗi từ Strapi
            if (response.ok && data !== null) {
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
                <h1>Add New Products</h1>
            </div>
            <div className='bottom'>
                <div className='left'> <img alt="" src={imgproduct ? URL.createObjectURL(imgproduct) :
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
                            <label> product</label>
                            <input type='text' value={title} onChange={e => { setTitle(e.target.value) }} />
                        </div>
                        <div className='forminput'>
                            <label>description </label>
                            <input type='text' value={description} onChange={e => { setDescription(e.target.value) }} />
                        </div>
                        <div className='forminput'>
                            <label>price </label>
                            <input type='text' value={price} onChange={e => { setPrice(e.target.value) }} />
                        </div>
                        <button className='buttonadd' onClick={hanldAdd}>add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
