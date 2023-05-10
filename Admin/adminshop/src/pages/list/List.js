import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./List.scss"
import DataTable from '../../components/Datatable/DataTable'



const List = () => {
    return (
        <div className='list'>

            <Sidebar />
            <div className='listcontainer'>
                <Navbar className="navar" />
                <br />
                <DataTable />
            </div>
        </div>
    )
}

export default List
