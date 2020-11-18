import React from 'react';
import netflix from '../assets/Netflix-Clone.png';
import freeAccessContent from '../assets/React App.png';
import nsita from '../assets/Nsita.png';
import shopui from '../assets/Shop.png';
import weathergads from '../assets/weathergads.png';
import pictures from '../assets/Picture Search.png';
//import mainContent from './mainContent';


function Main() {
    return (
    <section class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col w-full mb-20">
                <h1 class="second-title sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Portfolio</h1>
                
            </div>
            <div class="flex flex-wrap -m-4">
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                    <div class="flex relative shadow-sm border-2 border-solid border-gray-500 rounded-md border-opacity-25">
                        <img alt="gallery" class="rounded-md absolute inset-0 w-full h-full object-cover object-center" src={netflix}/>
                        <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 opacity-0 hover:opacity-100">
                            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">entertainment</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Netflix clone project</h1>
                            <p class="leading-relaxed">This netflix Ui clone built with ReactJs and css. Using the movie database TMDB api for movie data.</p>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                    <div class="flex relative shadow-sm border-2 border-solid border-gray-500 rounded-md border-opacity-25">
                        <img alt="gallery" class="rounded-md absolute inset-0 w-full h-full object-cover object-center" src={weathergads}/>
                        <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 opacity-0 hover:opacity-100">
                            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">PWA</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Weather App</h1>
                            <p class="leading-relaxed">This was built with Vanila JavaScript, tailwindcss, css then using open weather Api for the weather data.</p>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                    <div class="flex relative shadow-sm border-2 border-solid border-gray-500 rounded-md border-opacity-25">
                        <img alt="gallery" class="rounded-md absolute inset-0 w-full h-full object-cover object-center" src={nsita}/>
                        <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 opacity-0 hover:opacity-100">
                            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Online Store</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">nsita</h1>
                            <p class="leading-relaxed">Built with React, React-redux for state management, firebase and custom email authentication, then stripe for payments.</p>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                    <div class="flex relative shadow-sm border-2 border-solid border-gray-500 rounded-md border-opacity-25">
                        <img alt="gallery" class="rounded-md absolute inset-0 w-full h-full object-cover object-center" src={freeAccessContent}/>
                        <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 opacity-0 hover:opacity-100">
                            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Education</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Free-Access-Education</h1>
                            <p class="leading-relaxed">This is a personal project still in production, implementing both the frontend(react) and backend(Mern).</p>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                    <div class="flex relative shadow-sm border-2 border-solid border-gray-500 rounded-md border-opacity-25">
                        <img alt="gallery" class=" rounded-md absolute inset-0 w-full h-full object-cover object-center" src={shopui}/>
                        <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 opacity-0 hover:opacity-100">
                            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Online store</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Just another ui store</h1>
                            <p class="leading-relaxed">This is a personal project implementing both the fronend(react) and backened with the mern stack.</p>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                    <div class="flex relative shadow-sm border-2 border-solid border-gray-500 rounded-md border-opacity-25">
                        <img alt="gallery" class="rounded-md absolute inset-0 w-full h-full object-cover object-center" src={pictures}/>
                        <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 opacity-0 hover:opacity-100">
                            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">search</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Picture Search Online</h1>
                            <p class="leading-relaxed">Picture search calls its data from unsplash api, this was built with reactjs, scss, tailwindcss, semanticui</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Main;
