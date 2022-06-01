import { useState, useEffect } from 'react';

const Card = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            if(!res.ok) {
                throw Error('Data could not be fetched');
            }
            return res.json();
            })
            .then(data => {
                setUsers(data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, []);

    return (
      <div className="card">
        {users.map((user) => (
          <div className="card-div" key={user.id}>
            <h2>Name: {user.name}</h2>
            <h3>Email: {user.email}</h3>
            <h3>City: {user.address.city}</h3>
            <h3>Phone: {user.phone}</h3>
            <h3>Website: {user.website}</h3>
          </div>
        ))}
      </div>
    );
}
 
export default Card;
