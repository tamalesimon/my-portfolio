import React from 'react';

function PortfolioItem ({idea, itemSrc, title, description, live, link}) {
    return (
    <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative shadow-sm border-2 border-solid border-gray-500 rounded-md border-opacity-25">
            <img alt="gallery" class="rounded-md absolute inset-0 w-full h-full object-cover object-center" src={itemSrc} />
            <div class="px-8 py-10 relative z-10 rounded-md w-full border-4 border-gray-200 bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{idea}</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                <p class="leading-relaxed">{description}</p>
                <div className="flex flex-row justify-between">
                    <div></div>
                    <div className="flex-row flex mt-2">
                        <a href={live} rel="noreferrer"  target="_blank" className="ml-2 rounded-full cursor-pointer hover:text-blue-700">
                            <svg className="h-8 p-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </a>

                        <a href={link} rel="noreferrer"  target="_blank" className="ml-2 rounded-full hover:text-blue-700">
                            <svg className="h-8 p-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </a>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
    )
}

export default PortfolioItem;
