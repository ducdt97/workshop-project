
import React from 'react';
import FearuredProducts from '../../Component/FeaturedProducts/FearuredProducts';
import "./Home.scss"


function Home() {
    return (
        <div className="home">
            <FearuredProducts type="feaarute" />
            <FearuredProducts type="training" />

        </div>
    );
}

export default Home;