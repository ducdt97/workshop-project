
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
import { Link } from 'react-router-dom';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Button from '@mui/material/Button';
import axios from 'axios';
import Action from '../Action/Action';

const Products = () => {

    const http = ("http://localhost:1337")
    const [products, setProduct] = useState([])


    useEffect(() => {
        axios.get(http + "/api/products?populate=*")
            .then(res => {
                setProduct(res.data)
            })
            .catch(error => {
                console.error(error);
            });
    }, [])
    console.log(products)
    return (
        <div className='Bottom'>
            <div className='title'>PRODUCT
            </div>
            <TableContainer component={Paper}>
                <div className='buttonadd'>
                    <Link to="/Add">
                        <Button variant="contained">
                            <ControlPointIcon />
                            ADD
                        </Button>
                    </Link>
                </div>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="tablecell">id</TableCell>
                            <TableCell className="tablecell">title</TableCell>
                            <TableCell className='tablevell'>img</TableCell>
                            <TableCell className="tablecell">description</TableCell>
                            <TableCell className="tablecell">price</TableCell>
                            <TableCell className='tablecell'>action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {/* check if products array exists and has elements */}
                        {products.data && products.data.length > 0 ? (
                            // map over the products array
                            products.data?.map((product) => (

                                <TableRow
                                    key={product.id}
                                    sx={{ '&:last-child td, &:last-child th': { bproduct: 0 } }}
                                >
                                    <TableCell>{product.id}</TableCell>
                                    <TableCell className="table">{product.attributes.title}</TableCell>
                                    <TableCell className='tablecell'><img src={http + product.attributes?.img?.data[0]?.attributes?.url} /></TableCell>
                                    <TableCell className="tablecell">{product.attributes.description}</TableCell>
                                    <TableCell className="tablecell">${product.attributes.price} </TableCell>
                                    <TableCell className="tablecell">
                                        <Action />
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
        </div>
    )
}
export default Products
