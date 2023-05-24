import React from 'react'
import "./Widget.scss"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
const Widget = ({ type }) => {
    let data;
    const amount = 100
    const diff = 20


    switch (type) {
        case "user":
            data = {
                title: "USER",
                isMoney: false,
                link: "See all users",
                icon: <PersonIcon className='icon' />,
            };
            break;
        case "order":
            data = {
                title: "ORDER",
                isMoney: false,
                link: "view all order",
                icon: <ShoppingBasketIcon className='icon' />,
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: false,
                link: "view net earnings",
                icon: <PaymentRoundedIcon className='icon' />,
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
                <span className='counter'>{data.isMoney && "$"}{amount} </span>
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
