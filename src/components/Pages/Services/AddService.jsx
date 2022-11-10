import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/UserContext';

const AddService = () => {
    const { user } = useContext(AuthContext);
    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName || 'user';
        const email = user?.email || 'unregistered';
        const img = form.img.value;
        const id = form.id.value;
        const title = form.title.value;
        const price = form.price.value;
        const text = form.message.value;

        const newService = {
            service_id: id,
            img,
            title,
            description: text,
            price
        }
        // console.log(userReview)

        fetch('https://photolab.vercel.app/allservices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('New Service uploaded successfully')
                    form.reset();
                }
            })
            .catch(er => toast.error(er));

    }
    return (
        <div className="flex flex-col w-1/4 mx-auto max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-slate-400 my-10">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl font-semibold text-center mb-5">Your opinion matters!</h2>
                <p className="text-xl font-semibold text-center mb-5">Add Your desire Services</p>

                <form onSubmit={handleReview} className="flex flex-col w-full">
                    <div class="mb-6">
                        <input type="text" name="id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Service ID" required />
                    </div>
                    <div class="mb-6">
                        <input type="text" name="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="$Price" required />
                    </div>
                    <div class="mb-6">
                        <input type="text" name="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title" required />
                    </div>
                    <div class="mb-6">
                        <input type="text" name="img" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Photo URL" required />
                    </div>
                    <textarea name="message" rows="3" placeholder="Description..." className="p-4 rounded-md resize-none text-gray-700 bg-gray-50"></textarea>
                    <button type="submit" className="py-4 my-8 font-semibold rounded-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-200 text-white">Add Service</button>
                </form>
            </div>
            <div className="flex items-center justify-center">
                <Link rel="noopener noreferrer" to='/' className="text-sm font-semibold hover:text-white">Maybe later</Link>
            </div>
        </div>
    );
};

export default AddService;
