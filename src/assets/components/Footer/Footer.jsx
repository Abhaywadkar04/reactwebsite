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
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
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
                                    About
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
                        <Link to="#" className="text-gray-400 hover:text-white">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 2C6.48 2 2 6.48 2 12c0 4.95 3.65 9.05 8.39 9.8.61.11.83-.27.83-.6 0-.3-.01-1.12-.01-2.2-3.06.56-3.71-1.47-3.71-1.47-.5-1.26-1.22-1.6-1.22-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.19 3.2.91.1-.7.38-1.19.69-1.46-2.42-.27-4.96-1.21-4.96-5.39 0-1.19.43-2.17 1.13-2.94-.11-.27-.49-1.39.11-2.9 0 0 .92-.29 3.02 1.13.88-.24 1.82-.36 2.75-.36.93 0 1.87.12 2.75.36 2.1-1.42 3.02-1.13 3.02-1.13.6 1.51.22 2.63.11 2.9.71.77 1.13 1.75 1.13 2.94 0 4.19-2.55 5.12-4.98 5.39.39.34.74 1.01.74 2.04 0 1.47-.01 2.65-.01 3.01 0 .33.22.72.84.6A10.013 10.013 0 0 0 22 12c0-5.52-4.48-10-10-10z"
                                />
                            </svg>
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-white">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 2C6.48 2 2 6.48 2 12c0 4.95 3.65 9.05 8.39 9.8.61.11.83-.27.83-.6 0-.3-.01-1.12-.01-2.2-3.06.56-3.71-1.47-3.71-1.47-.5-1.26-1.22-1.6-1.22-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.19 3.2.91.1-.7.38-1.19.69-1.46-2.42-.27-4.96-1.21-4.96-5.39 0-1.19.43-2.17 1.13-2.94-.11-.27-.49-1.39.11-2.9 0 0 .92-.29 3.02 1.13.88-.24 1.82-.36 2.75-.36.93 0 1.87.12 2.75.36 2.1-1.42 3.02-1.13 3.02-1.13.6 1.51.22 2.63.11 2.9.71.77 1.13 1.75 1.13 2.94 0 4.19-2.55 5.12-4.98 5.39.39.34.74 1.01.74 2.04 0 1.47-.01 2.65-.01 3.01 0 .33.22.72.84.6A10.013 10.013 0 0 0 22 12c0-5.52-4.48-10-10-10z"
                                />
                            </svg>
                            <span className="sr-only">Discord</span>
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-white">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 2C6.48 2 2 6.48 2 12c0 4.95 3.65 9.05 8.39 9.8.61.11.83-.27.83-.6 0-.3-.01-1.12-.01-2.2-3.06.56-3.71-1.47-3.71-1.47-.5-1.26-1.22-1.6-1.22-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.19 3.2.91.1-.7.38-1.19.69-1.46-2.42-.27-4.96-1.21-4.96-5.39 0-1.19.43-2.17 1.13-2.94-.11-.27-.49-1.39.11-2.9 0 0 .92-.29 3.02 1.13.88-.24 1.82-.36 2.75-.36.93 0 1.87.12 2.75.36 2.1-1.42 3.02-1.13 3.02-1.13.6 1.51.22 2.63.11 2.9.71.77 1.13 1.75 1.13 2.94 0 4.19-2.55 5.12-4.98 5.39.39.34.74 1.01.74 2.04 0 1.47-.01 2.65-.01 3.01 0 .33.22.72.84.6A10.013 10.013 0 0 0 22 12c0-5.52-4.48-10-10-10z"
                                />
                            </svg>
                            <span className="sr-only">Twitter</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
