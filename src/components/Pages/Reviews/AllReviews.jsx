import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const AllReviews = () => {
  // const { service_id } = useContext(ServiceContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://photolab.vercel.app/reviews/`)
      // fetch(`https://photolab.vercel.app/reviews/`)
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(error => console.log(error))
  }, [])
  return (
    <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
      {
        reviews.map(review => <ReviewCard
          key={review.review_id}
          serviceReview={review}
        ></ReviewCard>)
      }
    </div>


  );
};

export default AllReviews;