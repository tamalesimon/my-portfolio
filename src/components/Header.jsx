import React from 'react'

function Header() {
    return (
        <div className="container mx-auto">
            <h1 className="header-title">I’m Tamale Simon Peter Kafeero, <span className="underline">a Frontend developer</span> based in Uganda, Kampala. Specialized in creating awesome experiences on <span className="underline">desktop, web & mobile devices</span>.
            </h1>
            <h2 className="header-title2"> I specialize in designing meaningful and intuitives interfaces for mobile and web devices,
            I previously worked as a freelance developer and I am now looking for my next adventure.</h2>
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
