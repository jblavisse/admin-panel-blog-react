import React, {useEffect, useState} from 'react';
import axios from 'axios';


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
        <tr>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
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
                    </tr>
                </thead>
                <tbody>
                   {usersJSX}
                </tbody>
                </table>
        </div>
    )
}
