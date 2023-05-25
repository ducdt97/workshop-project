import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Button from '@mui/material/Button';
import axios from 'axios';
import "./datatable.scss"
import { Link } from 'react-router-dom';
import { Checkbox } from '@mui/material';
import Action from '../Action/Action';


const DataTable = () => {



    const http = ("http://localhost:1337")
    const [registers, setRegister] = useState([])
    const [selectedRows, setSelectedRows] = useState([]);

    const handleRowCheckboxChange = (event, registerId) => {
        if (event.target.checked) {
            setSelectedRows([...selectedRows, registerId]);
        } else {
            setSelectedRows(selectedRows.filter((id) => id !== registerId));
        }
    };
    useEffect(() => {
        axios.get('http://localhost:1337/api/dangkis?populate=*')
            .then(res => {
                setRegister(res.data)

            })
            .catch(error => {
                console.error(error);
            });
    }, [])


    return (
        <div className='Bottom'>
            <div className='title'>USER</div>
            <TableContainer component={Paper}>
                <div className='buttonadd'>
                    <Link to="/Add">
                        <Button variant="contained">
                            <ControlPointIcon />
                            ADD
                        </Button>
                    </Link>
                </div>
                <Table sx={{ minWidth: 700 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='tablevell'>
                                <Checkbox
                                    checked={selectedRows.length === registers.data?.length}
                                    indeterminate={selectedRows.length > 0 && selectedRows.length < registers.data?.length}
                                    onChange={(event) => {
                                        if (event.target.checked) {
                                            setSelectedRows(registers.data?.map((register) => register.id));
                                        } else {
                                            setSelectedRows([]);
                                        }
                                    }}
                                />
                            </TableCell>
                            <TableCell className="tablecell">id</TableCell>
                            <TableCell className="tablecell">avata</TableCell>
                            <TableCell className='tablevell'>name</TableCell>
                            <TableCell className="tablecell">email</TableCell>
                            <TableCell className="tablecell">password</TableCell>
                            <TableCell className="tablecell">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {registers.data && registers.data.length > 0 ? (
                            registers.data?.map((register) => (
                                <TableRow
                                    key={register.id}
                                    sx={{ '&:last-child td, &:last-child th': { bregister: 0 } }}
                                >
                                    <TableCell>
                                        <Checkbox
                                            checked={selectedRows.includes(register.id)}
                                            onChange={(event) => handleRowCheckboxChange(event, register.id)}
                                        />
                                    </TableCell>
                                    <TableCell>{register.id}</TableCell>
                                    <TableCell className="table">{register.attributes.name}</TableCell>
                                    <TableCell className='tablecell'>{register?.attributes?.Avatar?.data !== null ? (<img src={http + register?.attributes?.Avatar?.data[0]?.attributes?.url} />) : (<></>)} </TableCell>
                                    <TableCell className="tablecell">{register.attributes.email}</TableCell>
                                    <TableCell className="tablecell">{register.attributes.password}</TableCell>
                                    <TableCell className="tablecell" >
                                        <div className='action' >
                                            <Action />
                                        </div>
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
        </div>
    );
};
export default DataTable
