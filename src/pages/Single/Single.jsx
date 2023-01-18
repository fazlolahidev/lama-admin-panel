import React from 'react'

//* Style *// 
import './single.scss'

//* Components *// 
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Chart from '../../components/Chart/Chart'
import TableTransactions from '../../components/Table/Table'


//* Image *// 
import avatar from '../../images/avatar.jfif'

const Single = () => {
  return (
    <div className='single' >
      <Sidebar />

      <div className="singleContainer">
        <Navbar />
        
        <div className="top">
          <div className="left">
            <span className="editeBtn">Edite</span>
            <h2 className="information">Information</h2>
            <div className="item">
              <img src={avatar} alt="avatar" className="itemImage" />

              <div className="itemDetails">
                <h3 className="itemTitle">Jane Doe</h3>

                <div className='detailsContainer' >
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">janedoe@gmail.com </span>
                </div>

                <div className='detailsContainer' >
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">+989051144800</span>
                </div>

                <div className='detailsContainer' >
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">Tehran, Azadi street </span>
                </div>

                <div className='detailsContainer' >
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">Iran</span>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <Chart user />
          </div>
        </div>

        <div className="bottom">
          <h3 className="title">Last Transactions</h3>
          <TableTransactions />
        </div>
      </div>
    </div>
  )
}

export default Single