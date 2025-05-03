import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const updateData = useLoaderData()
    const { name, quantity, category, details, photo, _id } = updateData;


    const handleUpdate = e => {

        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        console.log(name, quantity, category, details);
        // const newUpdate = { name, quantity, category, details, photo };
        // console.log(newUpdate);
        const newUpdateData = { name, quantity, category, details, photo };
        console.log(newUpdateData)

        fetch(`http://localhost:5000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUpdateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Updated successfully')
                }
            })

    }
    return (
        <div>
            <form onSubmit={handleUpdate}>
                <p className='text-center mt-5 font-bold'>Please Update the Information</p>
                <div className='flex justify-between gap-5 mt-5'>
                    <div className='w-full'>
                        <p>Name</p>
                        <input type="text" placeholder="Type here" name='name' defaultValue={name} className="input input-bordered w-full" />
                    </div>
                    <div className='w-full'>
                        <p>Quantity</p>
                        <input type="text" placeholder="Type here" name='quantity' defaultValue={quantity} className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='flex justify-between gap-5 mt-5'>
                    <div className='w-full'>
                        <p>Category</p>
                        <input type="text" placeholder="Type here" name='category' defaultValue={category} className="input input-bordered w-full" />
                    </div>
                    <div className='w-full'>
                        <p>Details</p>
                        <input type="text" placeholder="Type here" name='details' defaultValue={details} className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='flex justify-between gap-5 mt-5'>
                    <div className='w-full'>
                        <p>Photo</p>
                        <input type="text" placeholder="Type here" name='photo' defaultValue={photo} className="input input-bordered w-full" />
                    </div>
                </div>
                <input type="submit" value='Update Coffee' className="btn bg-blue-400 hover:bg-blue-300 w-full mt-5" />
            </form>
        </div>
    );
};

export default Update;