import React from 'react'

import "./Single.scss"
import Chart from "../../components/Chart/Chart"
import Tables from "../../components/Tables/Tables"

const Single = () => {
    return (
        <div className='single'>
            <div className='singlecontainer'>
                {/* <div className='Bottom'>
                    <div className='title'>last transactions</div>
                    
                </div> */}
                <Tables />
                <div className='growthChart'>
                    <Chart aspect={3 / 1} />
                </div>
            </div>
        </div>
    )
}

export default Single
