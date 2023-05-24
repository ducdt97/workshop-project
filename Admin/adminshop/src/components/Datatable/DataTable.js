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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios';
import "./datatable.scss"
import { Link } from 'react-router-dom';
import { Checkbox } from '@mui/material';
import { setSelectedRegister } from '../../redux/Slicer';
import { useDispatch } from 'react-redux';

// import Action from '../Action/Action';


const DataTable = () => {
    const dispatch = useDispatch();
    const http = ("http://localhost:1337")
    const [registers, setRegister] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name',
            headerName: 'name',
            width: 150,
            editable: true,

        },
        {
            field: 'avatar',
            headerName: 'Avatar',
            width: 150,
            height: 200,
        },
        {
            field: 'email',
            headerName: 'email',
            type: 'number',
            width: 310,
            editable: true,
        },
        {
            field: 'password',
            headerName: 'password',
            type: 'number',
            width: 200,
            editable: true,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            sortable: false,
        },


    ];
    const [selectedRows, setSelectedRows] = useState([]);

    const handleRowCheckboxChange = (event, registerId) => {
        if (event.target.checked) {
            setSelectedRows([...selectedRows, registerId]);
        } else {
            setSelectedRows(selectedRows.filter((id) => id !== registerId));
        }
    };
    useEffect(() => {
        axios.get('http://localhost:1337/api/admins?populate=*')
            .then(res => {
                // const register = res.data.data
                // const newRegisters = register.map((item) => ({
                //     id: item.id,
                //     name: item.attributes.name,
                //     Avatar: item.attributes.Avatar.data[0]?.attributes?.url,
                //     email: item.attributes.email,
                //     password: item.attributes.password
                // }));
                setRegister(res.data)
                // setRegister(newRegisters)
            })
            .catch(error => {
                console.error(error);
            });

    }, [])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleEdit = (register) => {
        dispatch(setSelectedRegister(register));

    };
    const handleDelete = (id) => {
        // ID của dữ liệu bạn muốn xóa
        console.log(id)
        axios.delete(`http://localhost:1337/api/admins/${id}`)
            .then(response => {
                console.log('Dữ liệu đã được xóa thành công!');
                axios.get(http + "/api/admins?populate=*")
                    .then(res => {
                        setRegister(res.data);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            })

            .catch(error => {
                console.error('Lỗi khi xóa dữ liệu:', error);
            });
    }
    return (
        <div className='Bottom'>
            <div className='title'>USER</div>
            <TableContainer component={Paper}>
                <div className='buttonadd'>
                    <Link to="/AddUser">
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
                            {columns.map((column) => (
                                <TableCell
                                    key={column.field}
                                    style={{ top: 57, minWidth: column.minWidth }}
                                >
                                    {column.headerName}
                                </TableCell>
                            ))}
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
                                    <TableCell className='tablecell'>{register?.attributes?.Avatar?.data[0].attributes ? (<img src={http + register?.attributes?.Avatar?.data[0]?.attributes?.url} />) : (<></>)} </TableCell>
                                    <TableCell className="tablecell">{register.attributes.email}</TableCell>
                                    <TableCell className="tablecell">{register.attributes.password}</TableCell>
                                    <TableCell className="tablecell">
                                        <TableCell className="tablecell">
                                            <Stack direction="row" spacing={2}>
                                                < Button variant="contained" size="small" color="secondary" onClick={() => handleDelete(register.id)}>
                                                    <DeleteIcon />
                                                </Button>
                                                <Link to={`/edituser/${register.id}`} >
                                                    <Button variant="contained" size="small" color="secondary" onClick={handleEdit(register)} >
                                                        <EditIcon />
                                                    </Button>
                                                </Link>
                                            </Stack>
                                        </TableCell>
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
            <TablePagination
                rowsPerPageOptions={[5, 25, 100]}
                component="div"
                count={registers.data?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
};
export default DataTable
