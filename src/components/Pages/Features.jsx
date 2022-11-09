import React from 'react';
import { FaAward, FaCameraRetro, FaRev } from "react-icons/fa";


const Features = () => {
    return (
        <div>
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div className='text-center'>
                    <p className="inline-block px-5 py-2 mb-4 text-sm font-semibold tracking-wider text-deep-purple-accent-400 uppercase rounded-full bg-gray-300">
                        Why Choose Us?
                    </p>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">Adding</span>
                        </span>{' '}
                        the memories of every moment
                    </h2>
                </div>
                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">

                            <div className=" space-y-12">
                                <div className="flex shadow-xl rounded-lg py-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                            <FaAward />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-xl font-semibold leading-6 ">Professional </h4>
                                        <p className="mt-2 text-gray-600">We are vastly professionally mannered and we have a bunch of professionally skilled team</p>
                                    </div>
                                </div>
                                <div className="flex shadow-xl rounded-lg py-2">
                                    <div className="flex-shrink-0 ">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md">
                                            <FaCameraRetro />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-xl font-semibold leading-6 ">Experienced Photographer </h4>
                                        <p className="mt-2 text-gray-600">A young enthusiastic team with a bunch of talents and experience. They are able to work 24/7 for the seek a perfect project done on time.</p>
                                    </div>
                                </div>
                                <div className="flex shadow-xl rounded-lg py-2">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                            <FaRev />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-xl font-semibold leading-6 ">Support 24/7 </h4>
                                        <p className="mt-2 text-gray-600">We have technical support team. They are ready to serve you 24/7.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img src="https://preview.moxcreative.com/amerta/wp-content/uploads/sites/5/2022/02/successful-photographer.jpg" alt="" className="mx-auto rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;