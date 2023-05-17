import React from 'react'
import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='top'>
                <Link to="/" className='logo'>WorkShop</Link>
            </div>

            <div className='center'>
                <ul>
                    <p className='title'>MAIN</p>
                    <Link to="/" className='link'>
                        <li>
                            <DashboardIcon className='icon' />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title"> List</p>
                    <Link to="/Users" className='link'>
                        <li>
                            <PersonIcon className='icon' />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/Products" className='link'>
                        <li>
                            <StoreIcon className='icon' />
                            <span>Products</span>
                        </li>
                    </Link>
                    <Link to="/Order" className='link'>
                        <li>
                            <CreditCardIcon className='icon' />
                            <span>Orders</span>
                        </li>
                    </Link>
                    <li>
                        <SettingsIcon className='icon' />
                        <span className='link'>Setting</span>
                    </li>
                    <p className="title"> USER</p>
                    <li>
                        <AccountBoxIcon className='icon' />
                        <span className='link'>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className='icon' />
                        <span className='link'>Logout</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'>
                <div className='coloroption'></div>
                <div className='coloroption'></div>

            </div>
        </div>
    )
}

export default Sidebar
