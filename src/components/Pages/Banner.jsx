import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=" bg-white relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                    className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src="https://img.freepik.com/premium-photo/woman-s-hand-picking-lavender-lavender-field-with-purple-flowers-basket-lifestyle_242111-20491.jpg?w=1380"
                    alt=""
                />
            </div>
            <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-deep-purple-accent-400 uppercase rounded-full bg-gray-300">
                        Brand new
                    </p>
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        Make Your Wedding
                        <br className="hidden md:block" />
                        A Wonderful{' '}
                        <span className="inline-block text-deep-purple-accent-400">
                            Story.
                        </span>
                    </h2>
                    <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg dark:text-black">
                        We are a photo editing company that provides editing services for professional wedding photographers, and that means we work with a lot of amazing pro wedding photographers. And we’ve been following wedding photographers and influencers very closely for years!
                    </p>
                    <div className="flex items-center">
                        <Link
                            to="/allservices"
                            className="inline-flex text-white items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded shadow-md  bg-deep-purple-accent-400 hover:bg-gray-400 focus:shadow-outline focus:outline-none"
                        >
                            Get started
                        </Link>
                        <Link
                            to="/blog"
                            aria-label=""
                            className="inline-flex items-center font-semibold text-deep-purple-accent-400 transition-colors duration-200 hover:text-gray-400"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;