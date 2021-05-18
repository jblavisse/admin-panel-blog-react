import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default function UserListPage() {
    const [users,setUsers] = useState([]);
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setUsers(res.data);
        })
    }, [])


    const usersJSX = users.map(user => {
        return (
        <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
            <td>
                <Link className="btn btn-primary" to={"/users/" + user.id}>Voir</Link>
            </td>
        </tr>
        )
    })


    return (
        <div>
            <h1>ICHI CH Est mes utilisateurs</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Email</th>
                        <th scope="col">Site web</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {usersJSX}
                </tbody>
                </table>
        </div>
    )
}
