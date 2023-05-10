import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./Single.scss"
import Chart from "../../components/Chart/Chart"
import Tables from "../../components/Tables/Tables"

const Single = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className='singlecontainer'>
                <Navbar />
                <div className='Bottom'>
                    <div className='title'>last transactions</div>
                    <Tables />
                </div>
                <div className='growthChart'>
                    <Chart aspect={3 / 1} />
                </div>
            </div>
        </div>
    )
}

export default Single
