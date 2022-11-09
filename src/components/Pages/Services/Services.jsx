import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`https://photolab.vercel.app/services`)
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(error => console.log(error))
  }, [])
  return (
    <div>
      <div className='text-center mt-20'>
        <p className="inline-block px-5 py-2 text-sm font-semibold tracking-wider text-deep-purple-accent-400 uppercase rounded-full bg-gray-300">
          Services
        </p>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Our</span>
            </span>{' '}
            Service Area
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            We believe in cent percent customer satisfaction. Quality services is a must for us. We provide a bunch of services at this moment. Check it out to hire us.
          </p>
        </div>

        <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
          {
            services.map(service => <ServiceCard
              key={service.service_id}
              photoService={service}
            ></ServiceCard>)
          }
        </div>


        <div className="text-center">
          <Link
            to="/allservices"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            See All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;