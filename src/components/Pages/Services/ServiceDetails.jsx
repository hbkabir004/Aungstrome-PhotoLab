import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';
import AllReviews from '../Reviews/AllReviews';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { service_id, title, img, price, description } = service;
    return (
        <div>
            <PhotoProvider
                speed={() => 800}
                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
            >
                <div className='text-center mt-10'>
                    <p className="inline-block px-5 py-2 text-sm font-semibold tracking-wider text-deep-purple-accent-400 uppercase rounded-full bg-gray-300 mb-10">
                        Service Details
                    </p>
                </div>
                <div className='flex justify-center align-middle mb-10'>
                    <div
                        aria-label="View Item"
                        className="w-1/4 inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                    >
                        <div className="flex flex-col h-full">
                            <PhotoView src={img}>
                                <img
                                    src={img}
                                    style={{ objectFit: 'cover' }}
                                    className="object-cover w-full h-48"
                                    alt=""
                                />
                            </PhotoView>


                            <div className="flex-grow border border-t-0 rounded-b">
                                <div className="p-5">
                                    <h6 className="mb-2 font-semibold text-2xl leading-5 hover:text-deep-purple-accent-400">
                                        {title}
                                    </h6>
                                    <p className="text-sm text-gray-900">
                                        {description}
                                    </p>

                                    <p className="text-xl text-deep-purple-accent-400 font-semibold mt-2">Price: ${price}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PhotoProvider>

            {/* <ReviewForm></ReviewForm> */}
            <AllReviews></AllReviews>

        </div>


    );
};

export default ServiceDetails;