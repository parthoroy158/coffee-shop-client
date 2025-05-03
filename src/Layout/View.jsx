import React from 'react';
import { useLoaderData } from 'react-router-dom';

const View = () => {
    const viewDetails = useLoaderData()
    return (
        <div className="hero  bg-base-200 py-5">
            <div className="hero-content w-full flex-col lg:flex-row justify-center">
                <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl w-full p-4 bg-base-100 rounded-lg shadow-lg">

                    {/* Image Section */}
                    <div className="flex justify-center">
                        <img
                            src={viewDetails.photo}
                            alt={viewDetails.name}
                            className="rounded-xl shadow-md md:max-h-80 object-cover w-full p-4"
                        />
                    </div>

                    {/* Text Content Section */}
                    <div className="space-y-4 max-w-md w-full">
                        <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
                        <p className="text-md text-gray-600"><strong>Quantity:</strong> {viewDetails.quantity}</p>
                        <p className="text-md text-gray-600"><strong>Category:</strong> {viewDetails.category}</p>
                        <p className="text-sm text-gray-700">{viewDetails.details}</p>

                        {/* Action Buttons */}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default View;