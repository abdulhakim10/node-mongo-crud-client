import React, { useState } from 'react';

const AddUsers = () => {
    const [user, setUser] = useState({});

    const handleSubmit = event => {
        event.preventDefault();
        console.log(user);

        fetch('http://localhost:5000/users', {

            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)

        })

            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    alert('User Successfully added');
                    event.target.reset();
                }
            })
            .catch(err => console.log(err))
    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
        // console.log(newUser);
    }
    return (
        <div>
            <h2>Add Users Please</h2>
            <form onSubmit={handleSubmit}>
                <input onBlur={handleInputBlur} type="text" name="name" id="" placeholder='Name' required />
                <br />
                <input onBlur={handleInputBlur} type="text" name="address" id="" placeholder='Address' required />
                <br />
                <input onBlur={handleInputBlur} type="text" name="email" id="" placeholder='Email' required />
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUsers;