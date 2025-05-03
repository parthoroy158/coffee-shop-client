import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleSubmit = e => {


        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        console.log(name, quantity, category, details);
        const newAdd = { name, quantity, category, details, photo };
        console.log(newAdd);

        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAdd)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Successfully Added",
                        icon: "success",
                        draggable: true
                    });
                }
            })

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='flex justify-between gap-5 mt-5'>
                    <div className='w-full'>
                        <p>Name</p>
                        <input type="text" placeholder="Type here" name='name' className="input input-bordered w-full" />
                    </div>
                    <div className='w-full'>
                        <p>Quantity</p>
                        <input type="text" placeholder="Type here" name='quantity' className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='flex justify-between gap-5 mt-5'>
                    <div className='w-full'>
                        <p>Category</p>
                        <input type="text" placeholder="Type here" name='category' className="input input-bordered w-full" />
                    </div>
                    <div className='w-full'>
                        <p>Details</p>
                        <input type="text" placeholder="Type here" name='details' className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='flex justify-between gap-5 mt-5'>
                    <div className='w-full'>
                        <p>Photo</p>
                        <input type="text" placeholder="Type here" name='photo' className="input input-bordered w-full" />
                    </div>
                </div>
                <input type="submit" value='Add Coffee' className="btn bg-blue-400 hover:bg-blue-300 w-full mt-5" />
            </form>
        </div>
    );
};

export default AddCoffee;