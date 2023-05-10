import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./Slider.scss"

function Slider(props) {
    const [slider, setSlider] = useState(0)
    const data = [
        "https://th.bing.com/th/id/R.a01ca49460a1d9e8f5b4ad69cacc16b4?rik=P%2fPnV3SrI8Q%2fmA&riu=http%3a%2f%2fimgs.vietnamnet.vn%2fImages%2f2017%2f08%2f24%2f18%2f20170824180124-thoi-trang-nam-han-quoc-1.jpg&ehk=OYEF2MwiQF3FveU45YxxBtONGIMlpsC6Mt6fO7LoLzw%3d&risl=&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/OIP.d-iB3jikk8xANMCQVn6mtgHaJ4?pid=ImgDet&w=500&h=667&rs=1",
        "https://th.bing.com/th/id/R.e75fde1f1eea8b86fad6027bd8d80d66?rik=nJVsByI6QzDsRQ&pid=ImgRaw&r=0"
    ];
    const handleLeftSlider = () => {
        setSlider(slider === 0 ? 2 : 1)
        if (slider === 1) {
            setSlider(0)
        }
    }
    const handleRightSlider = () => {
        setSlider(slider === 0 ? 1 : 2)
        if (slider === 2) {
            setSlider(0)
        }
    }
    return (
        <div className='slider'>
            <div className='container'>
                <img src={data[slider]} alt='' />
            </div>
            <div className='icons'>
                <div className='icon' onClick={handleLeftSlider}>
                    <ArrowBackIcon />
                </div>
                <div className='icon' onClick={handleRightSlider}>
                    <ArrowForwardIcon />
                </div>
            </div>
        </div>
    );
}

export default Slider;