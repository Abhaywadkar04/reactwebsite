import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-6 md:px-12 xl:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Welcome to Our Game World
                        </h2>
                        <p className="mt-6 text-lg">
                            Dive into a world of adventure and excitement where every corner
                            holds new challenges and surprises.
                        </p>
                        <p className="mt-4 text-lg">
                            Join our community of passionate gamers and explore immersive
                            landscapes, conquer epic quests, and forge friendships that last
                            a lifetime.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Game illustration"
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 md:px-12 xl:px-6 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos,
                            nihil distinctio? Aut, asperiores deserunt quisquam animi odit voluptatibus
                            natus quae laudantium est ex veritatis maxime ad debitis inventore, cumque
                            quas?
                        </p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Meet the Team</h3>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos,
                            nihil distinctio? Aut, asperiores deserunt quisquam animi odit voluptatibus
                            natus quae laudantium est ex veritatis maxime ad debitis inventore, cumque
                            quas?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
