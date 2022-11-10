import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from './ReviewCard';

const AllReviews = () => {
  const selectedReviews = useLoaderData();
  const { service_id } = selectedReviews;
  const [updatedReview, setUpdatedReview] = useState();

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://photolab.vercel.app/reviews/${service_id}`)
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <div className='text-center mt-10'>
        <p className="inline-block px-5 py-2 text-sm font-semibold tracking-wider text-deep-purple-accent-400 uppercase rounded-full bg-gray-300 mb-10">
          Service Review
        </p>
      </div>
      <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
        {
          reviews.map(review => <ReviewCard
            key={review.review_id}
            serviceReview={review}
          ></ReviewCard>)
        }
      </div>
    </div>


  );
};

export default AllReviews;