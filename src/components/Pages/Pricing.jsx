
const Pricing = () => {
    return (
        <div class="relative w-full h-full">
            <div class="absolute hidden w-full bg-gray-50 lg:block h-96" />
            <div class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-5 py-2 mb-4 text-sm font-semibold tracking-wider text-deep-purple-accent-400 uppercase rounded-full bg-gray-300">
                            Our Pricing
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">Transparent</span>
                        </span>{' '}
                        pricing. Pay as you grow.
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Affordable Wedding Photography Prices with Video Starts Here. Check your wedding date availability and instantly receive a <span className="font-semibold">$300 coupon</span>
                    </p>
                </div>
                <div class="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">
                    <div>
                        <div class="p-8 bg-gray-900 rounded">
                            <div class="mb-4 text-center">
                                <p class="text-xl font-medium tracking-wide text-white">
                                    Starter Plan
                                </p>
                                <div class="flex items-center justify-center">
                                    <p class="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                                        $39
                                    </p>
                                    <p class="text-lg text-gray-500">/ Day</p>
                                </div>
                            </div>
                            <ul class="mb-8 space-y-2">
                                <li class="flex items-center">
                                    <div class="mr-3">
                                        <svg
                                            class="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p class="font-medium text-gray-300">A Certified Photographer for <span className="font-semibold ">2 Hours</span></p>
                                </li>
                                <li class="flex items-center">
                                    <div class="mr-3">
                                        <svg
                                            class="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p class="font-medium text-gray-300">Video Coverage for <span className="font-semibold ">2 Hours</span></p>
                                </li>
                                <li class="flex items-center">
                                    <div class="mr-3">
                                        <svg
                                            class="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p class="font-medium text-gray-300">30 Page, Wedding Photo Album</p>
                                </li>
                                <li class="flex items-center">
                                    <div class="mr-3">
                                        <svg
                                            class="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p class="font-medium text-gray-300">Private Online Photo Gallery</p>
                                </li>
                            </ul>
                            <button
                                type="submit"
                                class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Get Now
                            </button>
                        </div>
                        <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
                        <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
                        <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
                    </div>
                    <div>
                        <div class="p-8 bg-gray-900 rounded">
                            <div class="mb-4 text-center">
                                <p class="text-xl font-medium tracking-wide text-white">
                                    Pro Plan
                                </p>
                                <div class="flex items-center justify-center">
                                    <p class="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                                        $59
                                    </p>
                                    <p class="text-lg text-gray-500">/ Day</p>
                                </div>
                            </div>
                            <ul class="mb-8 space-y-2">
                                <li class="flex items-center">
                                    <div class="mr-3">
                                        <svg
                                            class="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p class="font-medium text-gray-300">A Certified Photographer for <span className="font-semibold ">4 Hours</span></p>
                                </li>
                                <li class="flex items-center">
                                    <div class="mr-3">
                                        <svg
                                            class="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p class="font-medium text-gray-300">Video Coverage for <span className="font-semibold ">4 Hours</span></p>
                                </li>
                                <li class="flex items-center">
                                    <div class="mr-3">
                                        <svg
                                            class="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p class="font-medium text-gray-300">Unlimited Photos & Video Captured</p>
                                </li>
                                <li class="flex items-center">
                                    <div class="mr-3">
                                        <svg
                                            class="w-4 h-4 text-teal-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p class="font-medium text-gray-300">A 5 Minute Edited HD Highlight Film</p>
                                </li>
                            </ul>
                            <button
                                type="submit"
                                class="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Get Now
                            </button>
                        </div>
                        <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
                        <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
                        <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;