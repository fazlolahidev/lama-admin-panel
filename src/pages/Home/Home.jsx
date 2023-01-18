import React from 'react'

//* Components *// 
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Widget from '../../components/Widget/Widget'
import Chart from '../../components/Chart/Chart'
import Featured from '../../components/Featured/Featured'
import TableTransactions from '../../components/Table/Table'

//* Style *// 
import './home.scss'

const Home = () => {
  return (
    <div className='home' >
      <Sidebar />

      <div className="homeContainer">
        <Navbar />

        <div className="widgets">
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earning' />
          <Widget type='balance' />
        </div>

        <div className="charts">
          <Featured />
          <Chart />
        </div>

        <div className="listContainer">
          <p className='listTitle' >Last Transactions</p>

          <TableTransactions />
        </div>
      </div>
    </div>
  )
}

export default Home