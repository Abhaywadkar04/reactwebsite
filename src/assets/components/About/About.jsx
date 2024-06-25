import React from 'react';

export default function About() {
    return (
        <div className="bg-gray-900 text-white py-16 lg:py-24">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between animate-fade-in">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-4 text-gray-300 font-sans">
                        Hidden Stories Emerging in Gaming
                        </h2>
                        <p className="text-lg lg:text-xl mb-6 text-gray-500 font-mono">
                            Dive into a world of adventure and excitement where every corner
                            holds new challenges and surprises.
                        </p>
                        <p className="text-lg lg:text-xl mb-8 text-gray-400 font-fantasy">
                            Join our community of passionate gamers and explore immersive
                            landscapes, conquer epic quests, and forge friendships that last
                            a lifetime.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <img src="https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=1200"
                            alt="Game illustration"
                            className="w-full rounded-lg shadow-2xl animate-fade-in-up"/>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 lg:px-8 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        <img src="https://images.pexels.com/photos/1579240/pexels-photo-1579240.jpeg?auto=compress&cs=tinysrgb&w=1200"
                            alt="Feature illustration"
                            className="w-full rounded-lg shadow-2xl"/>
                        <h3 className="text-2xl font-semibold mt-4 mb-4">Our Mission</h3>
                        <p className="text-lg mb-6">
                        The highly anticipated "Shadow of the Erdtree" expansion for Elden Ring has been released, inviting players to explore new areas and face challenging foes in the mysterious Land of Shadow​
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Learn More
                        </button>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        <img src="https://images.pexels.com/photos/1462725/pexels-photo-1462725.jpeg?auto=compress&cs=tinysrgb&w=1200"
                            alt="Game illustration"
                            className="w-full rounded-lg shadow-2xl"/>
                        <h3 className="text-2xl font-semibold mt-4 mb-4">Summer Game Fest 2024</h3>
                        <p className="text-lg mb-6">
                        The Summer Game Fest, hosted by Geoff Keighley, is set to run from June 7-10 in Los Angeles, featuring a variety of livestreamed showcases from major game developers and publishers​ (pcgamer)​.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Learn More
                        </button>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        <img src="https://images.pexels.com/photos/7241580/pexels-photo-7241580.jpeg?auto=compress&cs=tinysrgb&w=1200"
                            alt="Game illustration"
                            className="w-full rounded-lg shadow-2xl"/>
                        <h3 className="text-2xl font-semibold mt-4 mb-4">Gameworld News</h3>
                        <p className="text-lg mb-6">
                        Destiny 2's latest expansion, "The Final Shape," takes players inside the enigmatic Traveler to confront the series' ultimate antagonist, featuring new exotic weapons and narrative twists​ (pcgamer)​.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

