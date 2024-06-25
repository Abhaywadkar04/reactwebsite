import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your custom CSS file for styles and animations

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 animated-text p-5">
                Welcome to Gaming Revolution
            </h1>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg animated-card">
                    <img
                        src="https://videos.pexels.com/video-files/3946068/3946068-uhd_2732_1440_25fps.mp4"
                        alt="Gaming Keyboard"
                        className="w-full h-auto rounded-lg shadow-lg mb-4 animated-img"
                    />
                    <h2 className="text-2xl font-bold text-gray-200 animated-text flex items-center justify-center">
                        Experience the Ultimate Gaming Experience
                    </h2>
                    <p className="text-gray-400 mt-4 flex items-center justify-center">
                        Discover the latest gaming peripherals to take your gaming experience to the next level.
                    </p>
                </div>
                
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg animated-card" style={{ transform: 'scale(1)' }} onMouseEnter={() => { document.querySelector('.Home-card:hover').style.transform = 'scale(1.05)' }} onMouseLeave={() => { document.querySelector('.Home-card:hover').style.transform = 'scale(1)' }}>
                    <img
                        src="https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Gaming Keyboard"
                        className="w-full h-auto rounded-lg shadow-lg mb-4 animated-img Home-img"
                    />
                    <h2 className="text-2xl font-bold text-gray-200 animated-text">
                        Experience the Ultimate Gaming Experience
                    </h2>
                    <p className="text-gray-400 mt-4">
                        Discover the latest gaming peripherals to take your gaming experience to the next level.
                    </p>
                </div>

                <div className="p-6 bg-gray-800 rounded-lg shadow-lg animated-card" style={{ transform: 'scale(1)' }} onMouseEnter={() => { document.querySelector('.Home-card:hover').style.transform = 'scale(1.05)' }} onMouseLeave={() => { document.querySelector('.Home-card:hover').style.transform = 'scale(1)' }}>
                    <img
                        src="https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Gaming Console"
                        className="w-full h-auto rounded-lg shadow-lg mb-4 animated-img Home-img"
                    />
                    <h2 className="text-2xl font-bold text-gray-200 animated-text">
                        Get Ready for Action
                    </h2>
                    <p className="text-gray-400 mt-4">
                        Explore the latest gaming consoles and accessories to get the most out of your gaming experience.
                    </p>
                </div>

                <div className="p-6 bg-gray-800 rounded-lg shadow-lg animated-card" style={{ transform: 'scale(1)' }} onMouseEnter={() => { document.querySelector('.Home-card:hover').style.transform = 'scale(1.05)' }} onMouseLeave={() => { document.querySelector('.Home-card:hover').style.transform = 'scale(1)' }}>
                    <img
                        src="https://images.pexels.com/photos/3945690/pexels-photo-3945690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Gaming Headset"
                        className="w-full h-auto rounded-lg shadow-lg mb-4 animated-img Home-img"
                    />
                    <h2 className="text-2xl font-bold text-gray-200 animated-text">
                        Connect and Play
                    </h2>
                    <p className="text-gray-400 mt-4">
                        Experience immersive gaming with the latest gaming headsets. Stay connected with your teammates.
                    </p>
                </div>
                

                

                
            </div>
            <div className="mt-16"></div>
            <aside className="relative overflow-hidden text-white rounded-lg sm:mx-16 mx-2 sm:py-16 bg-gradient-to-r from-gray-800 to-black">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center size-13">
                        <img src="https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1200"/>
                    </div>
                    <div className="max-w-xl sm:mt-10 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl animated-text">
                            Get Ready to Play
                            <span className="hidden sm:block text-4xl">Ultimate Gaming Experience</span>
                        </h2>

                        <Link
                            className="inline-flex items-center px-6 py-3 font-medium bg-red-600 rounded-lg hover:opacity-75 animated-button"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="30"
                                height="30"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                className="mr-2"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download Now
                        </Link>
                    </div>
                </div>
            </aside>

            
        </div>
    );
}
