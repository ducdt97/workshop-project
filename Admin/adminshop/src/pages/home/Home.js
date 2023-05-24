import React from 'react'
import "./Home.scss"
import Widget from '../../components/widget/Widget'
import Featured from '../../components/Featured/Featured'
import Chart from '../../components/Chart/Chart'
import Tables from '../../components/Tables/Tables'

const Home = () => {
    return (
        <div className='home'>
            <div className='homecontainer'>
                <br />
                <span className='title'> Dashboard </span>
                <div className='widgets'>
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />

                </div>
                <div className='charts'>
                    <Featured />
                    <Chart />
                </div>
                {/* <div className='listContainer'>
                    <div className='listtitle'>
                        listtitle
                    </div>
                    
                </div> */}
                <Tables />
            </div>
        </div>
    )
}

export default Home
