import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCardTwo = ({ coffee, useCoffees, setUseCoffees }) => {

    const { name, quantity, category, details, photo, _id } = coffee;


    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const roaming = useCoffees.filter(cof => cof._id !== _id)
                            setUseCoffees(roaming);
                        }
                    })
            }
        });


    }


    return (
        <div className="hero  bg-base-200 py-5">
            <div className="hero-content w-full flex-col lg:flex-row justify-center">
                <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl w-full p-4 bg-base-100 rounded-lg shadow-lg">

                    {/* Image Section */}
                    <div className="flex justify-center">
                        <img
                            src={photo}
                            alt={name}
                            className="rounded-xl shadow-md md:max-h-80 object-cover w-full p-4"
                        />
                    </div>

                    {/* Text Content Section */}
                    <div className="space-y-4 max-w-md w-full">
                        <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
                        <p className="text-md text-gray-600"><strong>Quantity:</strong> {quantity}</p>
                        <p className="text-md text-gray-600"><strong>Category:</strong> {category}</p>
                        <p className="text-sm text-gray-700">{details}</p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3 pt-4">
                            <Link to={`/view/${_id}`}>
                                <button className="btn btn-primary hover:bg-green-400">View</button>
                            </Link>
                            <Link to={`/update/${_id}`}>
                                <button className="btn btn-secondary hover:bg-blue-500">Edit</button>
                            </Link>
                            <button
                                className="btn btn-error hover:bg-red-700"
                                onClick={() => handleDelete(_id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default CoffeeCardTwo;