import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();
    const [user, setUser] = useState(storedUser);

    const handleUpdateUser = event => {
        event.preventDefault();
        console.log(user);

        fetch(`http://localhost:5000/users/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('User Updated')
                console.log(data)
            }
        })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
        // console.log(newUser);
    }
    // console.log(storedUser)
    return (
        <div>
            <h1>Please Update: {storedUser.name}</h1>
            <form onSubmit={handleUpdateUser}>
                <input onChange={handleInputChange} type="text" defaultValue={storedUser.name} name="name" id="" placeholder='Name' required />
                <br />
                <input onChange={handleInputChange} type="text" defaultValue={storedUser.address} name="address" id="" placeholder='Address' required />
                <br />
                <input onChange={handleInputChange} type="text" defaultValue={storedUser.email} name="email" id="" placeholder='Email' required />
                <br />
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default Update;