import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import ReviewCard from './ReviewCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const reviews = useLoaderData();
    const myReviews = reviews.filter(r => r.email === user.email)

    return (
        <div>
            <div className='text-center mt-10'>
                <p className="inline-block px-5 py-2 text-sm font-semibold tracking-wider text-deep-purple-accent-400 uppercase rounded-full bg-gray-300 mb-10">
                    My Reviews
                </p>
            </div>
            {
                myReviews.length === 0 ?
                    <>
                        <h1 className='mb-96 mt-20 text-center text-3xl font-semibold'>No Reviews were added</h1>
                    </>
                    :
                    <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2 mb-80">
                        {
                            myReviews.map(review => <ReviewCard
                                key={review.review_id}
                                serviceReview={review}
                            ></ReviewCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default MyReviews;