
import React, { useEffect } from 'react';
import { useState } from 'react';
import "./product.scss";
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
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../../redux/Slicer';
import TablePagination from '@mui/material/TablePagination';
import { colors } from '@mui/material';

const Products = () => {
    const dispatch = useDispatch();
    const http = ("http://localhost:1337")
    const [products, setProduct] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'title',
            headerName: 'title',
            width: 150,
            editable: true,
        },
        {
            field: 'img',
            headerName: 'img',
            width: 150,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'description',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'price',
            headerName: 'price',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            sortable: false,
            renderCell: (params) => (
                <TableCell>
                    <Button
                        size="small"
                        color="secondary"
                        onClick={() => handleDelete(params.id)}
                    >
                        <DeleteIcon />
                    </Button>
                    <Button
                        size="small"
                        color="primary"
                    //   onClick={() => handleEdit(params.id)}
                    >
                        <EditIcon />
                    </Button>
                </TableCell>
            )
        },
    ];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        axios.get(http + "/api/products?populate=*")
            .then(res => {
                setProduct(res.data)
            })
            .catch(error => {
                console.error(error);
            });
    }, [])


    const handleDelete = (id) => {
        // ID của dữ liệu bạn muốn xóa
        console.log(id)
        axios.delete(`http://localhost:1337/api/products/${id}`)
            .then(response => {
                console.log('Dữ liệu đã được xóa thành công!');
                axios.get(http + "/api/products?populate=*")
                    .then(res => {
                        setProduct(res.data);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            })

            .catch(error => {
                console.error('Lỗi khi xóa dữ liệu:', error);
            });
    }
    const handleEdit = (product) => {
        dispatch(setSelectedProduct(product));

    };

    return (
        <div className='Bottom'>
            <div className='title'>PRODUCT
            </div>
            <TableContainer component={Paper}>
                <div className='buttonadd'>
                    <Link to="/AddProduct">
                        <Button variant="contained">
                            <ControlPointIcon />
                            ADD
                        </Button>
                    </Link>
                </div>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {/* <TableCell className="tablecell">id</TableCell>
                            <TableCell className="tablecell">title</TableCell>
                            <TableCell className='tablevell'>img</TableCell>
                            <TableCell className="tablecell">description</TableCell>
                            <TableCell className="tablecell">price</TableCell>
                            <TableCell className='tablecell'>action</TableCell> */}
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

                        {/* check if products array exists and has elements */}
                        {products.data && products.data.length > 0 ? (
                            // map over the products array
                            products.data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) => (

                                <TableRow
                                    key={product.id}
                                    sx={{ '&:last-child td, &:last-child th': { bproduct: 0 } }}
                                >
                                    <TableCell>{product.id}</TableCell>
                                    <TableCell className="table">{product.attributes.title}</TableCell>
                                    <TableCell className='tablecell'>{product?.attributes?.img?.data !== null ? (<img src={http + product?.attributes?.img?.data[0]?.attributes?.url} />) : (<></>)}</TableCell>
                                    <TableCell className="tablecell">{product.attributes.description}</TableCell>
                                    <TableCell className="tablecell">${product.attributes.price} </TableCell>
                                    <TableCell className="tablecell">
                                        <Stack direction="row" spacing={2}>
                                            < Button variant="contained" size="small" color="secondary" onClick={() => handleDelete(product.id)}>
                                                <DeleteIcon />
                                            </Button>
                                            <Link to={`/edit/${product.id}`} >
                                                <Button variant="contained" size="small" color="secondary" onClick={handleEdit(product)}>
                                                    <EditIcon />
                                                </Button>
                                            </Link>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            // display a message if products array is empty or undefined
                            <TableRow>
                                <TableCell colSpan={7}>No products found </TableCell>
                            </TableRow>
                        )}
                    </TableBody>

                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={products.data?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

        </div>
    )
}
export default Products
