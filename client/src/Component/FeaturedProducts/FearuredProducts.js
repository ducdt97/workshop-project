import React from 'react';
import "./FearuredProducts.scss"
import Card from '../Card/Card';



function FearuredProducts({ type }) {
    const data = [{
        id: 1,
        img: "https://th.bing.com/th/id/R.a01ca49460a1d9e8f5b4ad69cacc16b4?rik=P%2fPnV3SrI8Q%2fmA&riu=http%3a%2f%2fimgs.vietnamnet.vn%2fImages%2f2017%2f08%2f24%2f18%2f20170824180124-thoi-trang-nam-han-quoc-1.jpg&ehk=OYEF2MwiQF3FveU45YxxBtONGIMlpsC6Mt6fO7LoLzw%3d&risl=&pid=ImgRaw&r=0",
        gia: "12$",
        giamgia: "11$"

    },
    {
        id: 1,
        img: "https://th.bing.com/th/id/OIP.d-iB3jikk8xANMCQVn6mtgHaJ4?pid=ImgDet&w=500&h=667&rs=1",
        gia: "12$",
        giamgia: "11$"
    },
    {
        id: 1,
        img: "https://th.bing.com/th/id/R.e75fde1f1eea8b86fad6027bd8d80d66?rik=nJVsByI6QzDsRQ&pid=ImgRaw&r=0",
        gia: "12$",
        giamgia: "11$"
    }

    ];
    return (
        <div classNameNameName='fearuredProducts'>
            <div className='top'>
                <h1>{type}Category</h1>
            </div>
            <div className='bottom'>
                {data.map((item) => (
                    <Card item={item} key={item.id} />))}
            </div>
        </div>
    );
}

export default FearuredProducts;