import React, { useEffect } from 'react';
import { useState } from 'react';
import "./tables.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios';



const Tables = () => {
    const http = ("http://localhost:1337")
    const [orders, setOrders] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);


    useEffect(() => {
        axios.get('http://localhost:1337/api/orders?populate=*')
            .then(res => {
                setOrders(res.data)
            })
            .catch(error => {
                console.error(error);
            });
    }, [])
    console.log(orders)
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <div className='Bottom'>
            <div className='title'>ORDER
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="tablecell">id</TableCell>
                            <TableCell className="tablecell">name</TableCell>
                            <TableCell className='tablevell'>img</TableCell>
                            <TableCell className="tablecell">customer</TableCell>
                            <TableCell className="tablecell">phone</TableCell>
                            <TableCell className="tablecell">description</TableCell>
                            <TableCell className="tablecell">size</TableCell>
                            <TableCell className="tablecell">price</TableCell>
                            <TableCell className="tablecell">quantity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>


                        {/* check if orders array exists and has elements */}
                        {orders.data && orders.data.length > 0 ? (
                            // map over the orders array
                            orders.data?.map((order) => (

                                <TableRow
                                    key={order.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>{order.id}</TableCell>
                                    <TableCell className="table">{order.attributes.name}</TableCell>
                                    <TableCell className='tablecell'><img src={http + order?.attributes?.img?.data[0]?.attributes?.url} /></TableCell>
                                    <TableCell className="tablecell">{order.attributes.customer}</TableCell>
                                    <TableCell className="tablecell">{"0" + order.attributes.phone}</TableCell>
                                    <TableCell className="tablecell">{order.attributes.desc}</TableCell>
                                    <TableCell className="tablecell">{order.attributes.size}</TableCell>
                                    <TableCell className="tablecell">{"$" + order.attributes.price}</TableCell>
                                    <TableCell className="tablecell">{order.attributes.quantity}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            // display a message if orders array is empty or undefined
                            <TableRow>
                                <TableCell colSpan={7}>No orders found </TableCell>
                            </TableRow>
                        )}
                    </TableBody>

                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={orders.data?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

        </div>
    )
}

export default Tables;
