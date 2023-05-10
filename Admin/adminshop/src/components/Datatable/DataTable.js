import React, { useEffect, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import "./datatable.scss"

const DataTable = () => {

    const [registers, setRegister] = useState([])

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
    console.log(registers)

    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tablecell">id</TableCell>
                        {/* <TableCell className="tablecell">avata</TableCell> */}
                        <TableCell className='tablevell'>name</TableCell>
                        <TableCell className="tablecell">email</TableCell>
                        <TableCell className="tablecell">password</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {/* {registers.data.map((register) => (
                        <TableRow
                            key={register.data.id}
                            sx={{ '&:last-child td, &:last-child th': { bregister: 0 } }}
                        >
                            <TableCell >
                                {register.id}
                            </TableCell>
                            <TableCell className="table">
                                {register.data.attributes.ProdctName}
                            </TableCell>
                            <TableCell className="tablecell">{register.data.attributes.Nameclient}</TableCell>
                            <TableCell className="tablecell">{register.data.attributes.date}</TableCell>
                            <TableCell className="tablecell">{register.data.attributes.price}</TableCell>
                            <TableCell className="tablecell">{register.data.attributes.method}</TableCell>
                            <TableCell className="tablecell">{register.data.attributes.status}</TableCell>
                            <TableCell className='tablecell'>
                                <div className="delete" >delete</div>
                                <div className="edit" >edit</div>
                            </TableCell>
                        </TableRow>
                    ))} */}
                    {/* check if registers array exists and has elements */}
                    {registers.data && registers.data.length > 0 ? (
                        // map over the registers array
                        registers.data?.map((register) => (

                            <TableRow
                                key={register.id}
                                sx={{ '&:last-child td, &:last-child th': { bregister: 0 } }}
                            >
                                <TableCell>{register.id}</TableCell>
                                <TableCell className="table">{register.attributes.name}</TableCell>
                                {/* <TableCell className='tablecell'><img src={http + register?.attributes?.Img?.data[0]?.attributes?.url} /></TableCell> */}
                                <TableCell className="tablecell">{register.attributes.email}</TableCell>
                                <TableCell className="tablecell">{register.attributes.password}</TableCell>
                                <TableCell className="tablecell">
                                    <div className="delete">delete</div>
                                    <div className="edit">edit</div>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        // display a message if registers array is empty or undefined
                        <TableRow>
                            <TableCell colSpan={7}>No registers found </TableCell>
                        </TableRow>
                    )}
                </TableBody>

            </Table>
        </TableContainer>
    )
}

export default DataTable
