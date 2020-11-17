import React from 'react';

import download from '../assets/download.png';

function Header() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-row justify-between mt-4">
                <div>
                    <download/>
                    <img className=" bg-blue-200 p-2 object-cover animate-pulse object-top rounded-full" src="https://drive.google.com/file/d/1HttBJnC9B6IkJKI8UPnbPk_wZr5cgGz_/view?usp=sharing" alt=""/>
                </div>
                <div className="flex flex-row items-center">
                    <a href="http://">About</a>
                    <a className="ml-4 hover:text-blue-500" href="http://">Portfolio</a>
                    <a className="ml-4  hover:text-blue-500" href="http://">Resume</a>
                </div>
            </div>
            <h1 className="header-title">I’m Simon Peter Tamale, <span className="underline">a Front-end developer</span> based in Uganda, Kampala. I Specialize in creating awesome experiences on <span className="underline">desktop, web & mobile devices</span>.
            </h1>
            <h2 className="header-title2">I specialize in JavaScript and I have professional experience working with React. I also have experience working with Angular and Vue. A capable team player and always eager to learn something new.</h2>
            <div className=" flex flex-row items-center mt-8 text-lg">                        
                <div><svg className="h-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#0072FF">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg></div>
                <div className="ml-2 small-text">Currently available for freelance or full-time work</div>
            </div>
        </div>
    )
}

export default Header