import React, { useState } from 'react'
import "./Widget.scss"
import { useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Inventory2Icon from '@mui/icons-material/Inventory2';
const Widget = ({ type }) => {
    const [amountuser, setAmountUser] = useState(0)
    const [amountOrder, setAmounOrder] = useState(0)
    const [amountproduct, setAmounProduct] = useState(0)
    let data;
    const diff = 20

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Gọi API lần 1
                const response1 = await fetch('http://localhost:1337/api/accounts');
                const data1 = await response1.json();

                // Lấy dữ liệu từ response1 và gọi API lần 2
                const response2 = await fetch(`http://localhost:1337/api/orders`);
                const data2 = await response2.json();


                const response3 = await fetch(`http://localhost:1337/api/products`)
                const data3 = await response3.json()
                // Lưu dữ liệu từ response vào state
                setAmountUser(data1)
                setAmounOrder(data2);
                setAmounProduct(data3)
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    console.log(amountproduct)

    switch (type) {
        case "user":
            data = {
                title: "USER",
                amount: amountuser?.data?.length,
                isMoney: false,
                link: "See all users",
                icon: <PersonIcon className='icon' />,
            };
            break;
        case "order":
            data = {
                title: "ORDER",
                amount: amountOrder?.data?.length,
                isMoney: false,
                link: "view all order",
                icon: <ShoppingBasketIcon className='icon' />,
            };
            break;
        case "product":
            data = {
                title: "PRODUCT",
                amount: amountproduct?.data?.length,
                isMoney: false,
                link: "view net Product",
                icon: <Inventory2Icon className='icon' />,
            };
            break;
        default:
            break;
    }
    console.log(data.title)
    return (
        <div className='widget'>
            <div className='left'>
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.isMoney && "$"}{data.amount} </span>
                <span className='link'>{data.link}</span>
            </div>
            <div className='right'>
                <div className='percentage positive'>
                    <ArrowUpwardIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget
