import React from 'react';

const ServiceCard = ({ photoService }) => {
    const { service_id, title, img, price, description } = photoService;
    return (

        <div
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
            <div className="flex flex-col h-full">
                <img
                    src={img}
                    className="object-cover w-full h-48"
                    alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                    <div className="p-5">
                        <h6 className="mb-2 font-semibold text-2xl leading-5">
                            {title}
                        </h6>
                        <p className="text-sm text-gray-900">
                            {description}
                        </p>
                        <p className="text-xl text-gray-900">Price: ${price}</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ServiceCard;