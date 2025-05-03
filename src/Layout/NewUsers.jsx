import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const NewUsers = () => {
    const users = useLoaderData();
    const [newUsers, setNewUsers] = useState(users);



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
                fetch(`http://localhost:5000/newusers/${_id}`, {
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
                            const roaming = newUsers.filter(user => user._id !== _id)
                            setNewUsers(roaming)
                        }
                    })
            }
        });
    }
    return (
        <div>
            <h2>Total Users: {newUsers.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>Created At</th>
                                <th>Last Sign In Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Map through all users */}
                            {newUsers.map((user, index) => (
                                <tr key={user.id || index}>
                                    <th>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{user.createTime}</td>
                                    <td>{user.lastSignInTime}</td>
                                    <td><button className='btn hover:bg-red-500' onClick={() => handleDelete(user._id)}>Delete</button></td> {/* You might want to make this dynamic */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default NewUsers;