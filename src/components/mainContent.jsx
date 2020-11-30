import React from 'react'
import PortfolioItem from './portfolioItem';

import netflix from '../assets/Netflix-Clone.png';
import freeAccessContent from '../assets/React App.png';
import nsita from '../assets/Nsita.png';
import shopui from '../assets/Shop.png';
import weathergads from '../assets/weathergads.png';
import pictures from '../assets/Picture Search.png'; 

function MainContent() {
    return (
        
<section class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col w-full mb-20">
                <h1 id="PORTFOLIO" class="second-title sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Portfolio</h1>                
            </div>
            <div class="flex flex-wrap -m-4">
                <PortfolioItem 
                itemSrc={netflix} 
                idea="entertainment" 
                title="Netflix clone project"
                description="This netflix Ui clone built with ReactJs and css. Using the movie database TMDB api for movie data."
                live="https://netflix-clone-project.herokuapp.com/"
                link="https://github.com/tamalesimon/netflix-clone-project" />

                <PortfolioItem 
                itemSrc={weathergads} 
                idea="pwa" 
                title="Weather App"
                description="This was built with Vanila JavaScript, tailwindcss, css then using open weather Api for the weather data."
                live="https://weathergads.web.app/"
                link="https://github.com/tamalesimon/GADs/tree/master/my-weather"  />

                <PortfolioItem 
                itemSrc={freeAccessContent} 
                idea="education" 
                title="Free-Access-Education"
                description="This is a personal project still in production, implementing both the frontend(react) and backend(Mern)."
                live="https://free-access-education.herokuapp.com/"
                link="https://github.com/tamalesimon/free-access-education"  />

                <PortfolioItem 
                itemSrc={nsita} 
                idea="online store" 
                title="Nsita"
                description="Built with React, React-redux for state management, firebase and custom email authentication, then stripe for payments."
                live="https://nsita-live.herokuapp.com/"
                link="https://github.com/tamalesimon/nsita"  />
                
                <PortfolioItem 
                itemSrc={pictures} 
                idea="search engine" 
                title="Picture Search Online"
                description="Picture search calls its data from unsplash api, this was built with reactjs, scss, tailwindcss, semanticui"
                live="https://picture-search-online.herokuapp.com/"
                link="https://github.com/tamalesimon/react-picture-app"  />
                
                <PortfolioItem 
                itemSrc={shopui} 
                idea="online store" 
                title="Just another online store UI"
                description="This is a personal project implementing both the front-end(react) and backened with the mern stack."
                live="https://just-another-shop-ui.herokuapp.com/"
                link="https://github.com/tamalesimon/shop"  />
                

            </div>
        </div>
</section>
    )
}

export default MainContent;
