
/*export const usersColums = [
    { field: "id", headersName: "ID", width: 100 },
    {
        field: "UsersName", headersName: "UserName", width: 250,
    },
    { field: "email", headersName: "Email", width: 280 },
    { field: "password", headersName: "password", width: 280 },

]*/


import React, { useState, useEffect } from 'react'
import axios from 'axios'

const datatableapi = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [register, setRegister] = useState([])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios.get('http://localhost:1337/api/dangkis')
            .then(res => {
                setRegister(res.data)
            })
            .catch(error => {
                console.error(error);
            });
    }, [])
    console.log(register)
    return (
        <div>

        </div>
    )
}

export default datatableapi



/*export const Users = [
    {
        id: 1,
        UsersName: "huyquang",
        email: "askdk@gmail.com",
        password: "klshdhhdsdhk"
    }
]*/