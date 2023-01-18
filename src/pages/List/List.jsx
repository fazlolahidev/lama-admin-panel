import React from 'react'

//* Style *// 
import './list.scss'

//* Components *// 
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import DataTableList from '../../components/DataTableList/DataTableList'



const List = () => {
  return (
    <div className='list' >
      <Sidebar />

      <div className="listContainer">
        <Navbar />
        <DataTableList />
      </div>
    </div>
  )
}

export default List