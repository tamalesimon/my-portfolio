import React from 'react';

class Header extends React.Component  {

    constructor(props) {
        super(props);
        
            this.state = {
                isOpen: false
            };
        
    } 
    toggleNavMenu = () => {
        this.setState({isOpen: !this.state.isOpen});
    }
    render () {

        let menuIcons;

        if (this.state.isOpen) {
            menuIcons = (           
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                     
            );
        } else {
            menuIcons = (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />                
            );
        }
    
    return (
        <div className="container mx-auto">
            <div className="flex flex-col justify-center md:items-center mt-4 md:flex md:flex-row md:justify-between md:mt-4">
                <div className="flex-row flex justify-between items-center mr-2">
                <div className="ml-2 sm:hidden">
                    <button className=" ease-in select-none"
                        onClick={this.toggleNavMenu}
                        type="button"
                    >
                        <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black">
                            {menuIcons}
                        </svg>
                    </button>
                </div>
                <div className="ml-4 px-4 py-3 border-gray-800 rounded-md border-solid border-2 cursor-pointer ">
                    <h1 className="site-title text-gray-800 text-base font-medium">Simon Peter Tamale</h1>
                </div>
                </div>
                

                <div></div>
                <div className={`sm:flex justify-center text-base nav-bar md:flex md:flex-row ml-2 pr-4 md:items-center ${this.state.isOpen ? `block text-xl` : `hidden`}`}>
                    <a className="ml-1 block font-medium text-gray-800 hover:bg-gray-200 py-3 px-4 rounded-md items-center hover:text-gray-800" href="http://">About</a>
                    <a className="ml-1 block font-medium text-gray-800  hover:bg-gray-200 py-3 px-4 rounded-md items-center hover:text-gray-800" href="http://">Portfolio</a>
                    <a className="ml-1 block font-medium text-gray-800  hover:bg-gray-200 py-3 px-4 rounded-md items-center hover:text-gray-800" href="https://drive.google.com/file/d/12gPEqizesMG3QG9aBCmPWPXfWRhshciG/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                </div>

            </div>
            <div className="px-5">
                <h1 className="header-title flex justify-center">I’m Simon Peter Tamale, <span className="underline">a Front-end developer</span> based in Uganda, Kampala. I  Specialize in creating awesome experiences on <span className="underline">web & mobile devices</span>.
                </h1>
                <h2 className="header-title2">I specialize in JavaScript and I have professional experience working with React. I also have experience working with Angular. I am a capable team player and always eager to learn something new.</h2>
                <div className=" flex flex-row items-center mt-8 text-lg">
                    <div><svg className="h-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#0072FF">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg></div>
                    <div className="ml-2 small-text">Currently available for freelance or full-time work.</div>
                </div>
            </div>

        </div>
    )
    }
}

export default Header;
