import React from 'react'
import "./featured.scss"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Featured = () => {
    return (
        <div className='featured'>
            <div className='top'>
                <h1 className='title'>Total Revenue</h1>
            </div>
            <div className='bottom'>
                <div className='featuredchart'>
                    <CircularProgressbar value={70} text='70%' strokeWidth={5} />
                </div>
                <p className='title'> Total sales made today</p>
                <p className='amount'> $420</p>
                <p className='decs'> Percent </p>
            </div>
        </div>
    )
}

export default Featured
