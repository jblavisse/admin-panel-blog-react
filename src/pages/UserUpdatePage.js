import React, { useEffect } from 'react'

export default function UserUpdatePage(props) {

    const id = props.match.params.bachi;


    return (
        <div>
            <h1>Page de modification d'un utilisateur: {id} </h1>
        </div>
    )
}
