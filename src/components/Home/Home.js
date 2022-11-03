import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    // console.log(users)

    const handleDelete = user => {
        const agree = window.confirm(`Are you sure you want to delete ${user.name}`);
        if(agree){
            console.log('deleting user with id:',user._id);
        }
    }
    return (
        <div>
            <h1>Users: {users.length}</h1>
            <div>
                {
                    users.map(user => <p 
                        key={user._id}
                        >{user.name} <br /> {user.address} <br /> {user.email} <button onClick={() => handleDelete(user)}>x</button></p> )
                }
            </div>
        </div>
    );
};

export default Home;