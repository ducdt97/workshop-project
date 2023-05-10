import React from 'react';
import "./Navbar.scss"
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Navbar() {
    return (
        <div className='navbars'>
            <div className='wrapper'>
                <div className='left'>
                    <div className='item'>
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className='item'>
                        <Link className='links' to="/Category">women</Link>
                    </div>
                    <div className='item'>
                        <Link className='links' to="/Products">men</Link>
                    </div>
                </div>
                <div className='center'>
                    <Link className='links' to="/">WORDSHOP</Link>
                </div>
                <div className='right'>
                    <div className='item'>
                        <Link className='links' to="/">Home-Pages</Link>
                    </div>
                    <div className='item'>
                        <Link className='links' to="/">About</Link>
                    </div>
                    <div className='item'>
                        <Link className='links' to="/">Contact</Link>
                    </div>
                    <div className='item'>
                        <Link className='links' to="/">Stor</Link>
                    </div>
                    <div className='icon'>
                        <SearchIcon />
                        <div>
                            <Link to="/Register">{<PersonOutlineIcon />}</Link>
                        </div>

                        <FavoriteBorderIcon />
                        <div className='carticon'>
                            <ShoppingCartIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;