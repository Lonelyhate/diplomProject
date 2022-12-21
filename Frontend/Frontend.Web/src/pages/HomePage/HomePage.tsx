import React from 'react';
import HomeCategories from "./components/HomeCategories/HomeCategories";
import "./HomePage.scss"

const HomePage = () => {
    return (
        <div className={"home-page"}>
            <div className="home-page__container container">
                <HomeCategories/>
            </div>
        </div>
    );
};

export default HomePage;