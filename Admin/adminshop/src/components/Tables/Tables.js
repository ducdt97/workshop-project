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
import axios from 'axios';


const List = () => {
    const http = ("http://localhost:1337")
    const [orders, setOrders] = useState([])


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

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tablecell">id</TableCell>
                        <TableCell className="tablecell">name</TableCell>
                        <TableCell className='tablevell'>img</TableCell>
                        <TableCell className="tablecell">customer</TableCell>
                        <TableCell className="tablecell">date</TableCell>
                        <TableCell className="tablecell">amount</TableCell>
                        <TableCell className="tablecell">method</TableCell>
                        <TableCell className="tablecell">status</TableCell>
                        <TableCell className='tablecell'>action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {/* {orders.data.map((order) => (
                        <TableRow
                            key={order.data.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell >
                                {order.id}
                            </TableCell>
                            <TableCell className="table">
                                {order.data.attributes.ProdctName}
                            </TableCell>
                            <TableCell className="tablecell">{order.data.attributes.Nameclient}</TableCell>
                            <TableCell className="tablecell">{order.data.attributes.date}</TableCell>
                            <TableCell className="tablecell">{order.data.attributes.price}</TableCell>
                            <TableCell className="tablecell">{order.data.attributes.method}</TableCell>
                            <TableCell className="tablecell">{order.data.attributes.status}</TableCell>
                            <TableCell className='tablecell'>
                                <div className="delete" >delete</div>
                                <div className="edit" >edit</div>
                            </TableCell>
                        </TableRow>
                    ))} */}
                    {/* check if orders array exists and has elements */}
                    {orders.data && orders.data.length > 0 ? (
                        // map over the orders array
                        orders.data?.map((order) => (

                            <TableRow
                                key={order.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{order.id}</TableCell>
                                <TableCell className="table">{order.attributes.ProductName}</TableCell>
                                <TableCell className='tablecell'><img src={http + order?.attributes?.Img?.data[0]?.attributes?.url} /></TableCell>
                                <TableCell className="tablecell">{order.attributes.Nameclient}</TableCell>
                                <TableCell className="tablecell">{order.attributes.Date}</TableCell>
                                <TableCell className="tablecell">{order.attributes.price}</TableCell>
                                <TableCell className="tablecell">{order.attributes.method}</TableCell>
                                <TableCell className="tablecell">{order.attributes.status}</TableCell>
                                <TableCell className="tablecell">
                                    <div className="delete">delete</div>
                                    <div className="edit">edit</div>
                                </TableCell>
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
    )
}

export default List;
