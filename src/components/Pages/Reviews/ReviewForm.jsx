import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/UserContext';

const ReviewForm = () => {
    const { user } = useContext(AuthContext);
    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName || 'user';
        const img = user?.photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dVUhZ65EmrXkzr-E52sNG5I11mUheSqdwRov7uwr_FttgEtrLuPs9X1LtGB-jN3n-uw&usqp=CAU';
        const email = user?.email || 'unregistered';
        const service_id = form.service_id.value;
        const review_id = form.review_id.value;
        const date = form.date.value;
        const rating = form.star.value;
        const text = form.message.value;

        const userReview = {
            service_id,
            review_id,
            customer: name,
            img,
            rating,
            email,
            text,
            date
        }
        // console.log(userReview)

        fetch('https://photolab.vercel.app/reviews/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review uploaded successfully')
                    form.reset();
                }
            })
            .catch(er => toast.error(er));

    }
    return (
        <div className="flex flex-col w-1/4 mx-auto max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-slate-400 mb-5">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                <div className="flex flex-col items-center py-6 space-y-3">
                    <span className="text-center">How was your experience?</span>
                    <div className="flex space-x-3">
                        <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500" data-darkreader-inline-fill="">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        </button>
                        <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500" data-darkreader-inline-fill="">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        </button>
                        <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500" data-darkreader-inline-fill="">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        </button>
                        <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500" data-darkreader-inline-fill="">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        </button>
                        <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-600" data-darkreader-inline-fill="">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <form onSubmit={handleReview} className="flex flex-col w-full">
                    <div class="mb-6">
                        <input type="text" name="service_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Service ID" required />
                    </div>
                    <div class="mb-6">
                        <input type="text" name="review_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Review ID" required />
                    </div>
                    <div class="mb-6">
                        <input type="text" name="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Days ago (Date-Single Number)" required />
                    </div>
                    <div class="mb-6">
                        <input type="text" name="star" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Star (1-5)" required />
                    </div>
                    <textarea name="message" rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-gray-700 bg-gray-50"></textarea>
                    <button type="submit" className="py-4 my-8 font-semibold rounded-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-200 text-white">Leave feedback</button>
                </form>
            </div>
            <div className="flex items-center justify-center">
                <Link rel="noopener noreferrer" to='/' className="text-sm font-semibold hover:text-white">Maybe later</Link>
            </div>
        </div>

    );
};

export default ReviewForm;