import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-400 to-blue-600 shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="h-10"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center space-x-4">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div className="hidden lg:flex lg:w-auto">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    exact
                                    className="block py-2 px-3 text-gray-700 border-b-2 border-transparent hover:text-gray-900 lg:hover:bg-transparent lg:border-0 lg:p-0"
                                    activeClassName="text-gray-900 border-blue-500"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className="block py-2 px-3 text-gray-700 border-b-2 border-transparent hover:text-gray-900 lg:hover:bg-transparent lg:border-0 lg:p-0"
                                    activeClassName="text-gray-900 border-blue-500"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className="block py-2 px-3 text-gray-700 border-b-2 border-transparent hover:text-gray-900 lg:hover:bg-transparent lg:border-0 lg:p-0"
                                    activeClassName="text-gray-900 border-blue-500"
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className="block py-2 px-3 text-gray-700 border-b-2 border-transparent hover:text-gray-900 lg:hover:bg-transparent lg:border-0 lg:p-0"
                                    activeClassName="text-gray-900 border-blue-500"
                                >
                                    GitHub
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
