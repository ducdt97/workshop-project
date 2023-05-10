import React from 'react'
import "./Home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/Featured/Featured'
import Chart from '../../components/Chart/Chart'
import Tables from '../../components/Tables/Tables'

const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className='homecontainer'>
                <Navbar className="navar" />
                <br />
                home container
                <div className='widgets'>
                    <Widget />
                    <Widget />
                    <Widget />
                </div>
                <div className='charts'>
                    <Featured />
                    <Chart />
                </div>
                <div className='listContainer'>
                    <div className='listtitle'>
                        listtitle
                    </div>
                    <Tables />
                </div>
            </div>
        </div>
    )
}

export default Home
