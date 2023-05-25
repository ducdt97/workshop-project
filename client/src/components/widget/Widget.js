import React from 'react'
import "./Widget.scss"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PersonIcon from '@mui/icons-material/Person';
const Widget = () => {
    return (
        <div className='widget'>
            <div className='left'>new user</div>
            <div className='right'>
                <div className='percentage'>
                    <ArrowUpwardIcon />
                    <PersonIcon />
                    <div>
                        <span>100</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Widget
