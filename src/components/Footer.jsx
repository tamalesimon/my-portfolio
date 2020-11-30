import React from 'react'

function Footer() {
    return (
        <div className="footer-container ">
            <div className="container mx-auto">
            <div className=" md:flex-row md:flex md:pb-24">
                <section className="md:w-1/2 px-4">
                    <h1 id="ABOUT" className="footer-title">About me</h1>
                    <p className="footer-content">My name is Simon Peter Tamale, I am a front-end developer based in Kampala, Uganda. I specialize in creating interactive experiences and functional interfaces using JavaScript for web and mobile devices.<br/><br/>

                    Versatile developer with real-world experience designing, developing, and implementing complex technical solutions for the web.<br/><br/>

                    A capable team player and always eager to learn something new.</p>
                </section>
                <section className="md:w-1/2 md:ml-16 ml-4 mt-10 md:mt-0 pr-4">
                    <h1 className="footer-title">Let's talk</h1>
                    <div className="email mb-8">
                        <a className="hover:text-blue-600" href="mailto:tamalesp@gmail.com">tamalesp@gmail.com</a>
                    </div>
                    <div className=" align-baselineflex-row flex p-4 rounded-lg bg-gray-900 mb-4 cursor-pointer transition duration-500 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110 hover:bg-opacity-25">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#919192" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                    </svg>
                     <span className="ml-2 social-media font-bold">Checkout my resume on LinkedIn</span>
                    </div>
                    
                    <div className=" align-baselineflex-row flex p-4 rounded-lg bg-gray-900 transition cursor-pointer duration-500 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110 hover:bg-opacity-25">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#919192" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                     <span className="ml-2 social-media font-bold">Checkout my repos on GitHub</span>
                    </div>

                </section>
            </div>
            <div className="footer-content container mx-auto mt-10 md:mt-8 ml-4 text-sm">
                Simon Peter Tamale &#169; 2020
            </div>
            </div>            
        </div>
    )
}

export default Footer;
