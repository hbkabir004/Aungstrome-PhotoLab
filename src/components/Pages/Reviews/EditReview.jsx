import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/UserContext';
import useTitle from '../../../Hooks/useTitle';

const EditReview = () => {
    const editedReview = useLoaderData();
    console.log(editedReview);
    const { review_id } = editedReview;
    const [review, setReview] = useState();
    const { user } = useContext(AuthContext);

    useTitle('PhotoLab | EditReview');
    const handleUpdate = (event, id) => {
        event.preventDefault();
        fetch(`https://photolab.vercel.app/reviews/${review_id}`, {
            method: 'PUT', // or 'PUT'
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Success:', data);
                if (data.modifiedCount > 0) {
                    toast.success('Review updated successfully');

                }
            })
    }

    const handleChange = event => {
        const form = event.target;
        const field = form.name;
        const value = form.value;
        const newReview = { ...user }
        newReview[field] = value;
        console.log(newReview);
        setReview(newReview);
    }
    return (
        <div className="flex flex-col w-1/4 mx-auto max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-slate-400 mb-5 my-20 mb-10">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                <div className="flex flex-col items-center py-6 space-y-3">
                    <span className="text-center">Edit your FeedBack</span>

                </div>
                <form onSubmit={handleUpdate} className="flex flex-col w-full">
                    <div class="mb-6">
                        <input onChange={handleChange} type="text" name="rating" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Star (1-5)" required />
                    </div>
                    <textarea onChange={handleChange} name="text" rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-gray-700 bg-gray-50"></textarea>
                    <button type="submit" className="py-4 my-8 font-semibold rounded-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-200 text-white">Edit feedback</button>
                </form>
            </div>
            <div className="flex items-center justify-center">
                <Link rel="noopener noreferrer" to='/allservices' className="text-sm font-semibold hover:text-white">Maybe later</Link>
            </div>
        </div>
    );
};

export default EditReview;