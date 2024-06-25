import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white border-t border-gray-800">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="mb-8 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/video-gamer-ninja-animated-logo-design-template-4b4ca82b1cfa782289646e3bafe73e3e.mp4?ts=1657058202"
                                className="h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold text-gray-400 uppercase mb-4">Explore</h2>
                        <ul className="text-gray-400">
                            <li className="mb-2">
                                <Link to="/" className="hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/about" className="hover:text-white">
                                    news
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold text-gray-400 uppercase mb-4">Connect</h2>
                        <ul className="text-gray-400">
                            <li className="mb-2">
                                <a
                                    href="https://www.linkedin.com/in/your-profile/"
                                    className="hover:text-white"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/your-profile/"
                                    className="hover:text-white"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold text-gray-400 uppercase mb-4">Legal</h2>
                        <ul className="text-gray-400">
                            <li className="mb-2">
                                <Link to="#" className="hover:text-white">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-white">
                                    Terms &amp; Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-8 border-gray-800" />
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Abhaywadkar. All Rights Reserved.
                    </span>
                    <div className="flex space-x-4">
                        <Link to="https://github.com/abhay-123" className="text-gray-400 hover:text-white">
                            <svg aria-hidden="true" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link to="https://www.linkedin.com/in/abhay-123/" className="text-gray-400 hover:text-white">
                            <svg aria-hidden="true" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link to="https://twitter.com/abhay_123" className="text-gray-400 hover:text-white">
                            <svg aria-hidden="true" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                            <span className="sr-only">Twitter</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
