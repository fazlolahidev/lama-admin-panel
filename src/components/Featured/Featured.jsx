import React from 'react'

//* Progrecc Bar *//
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

//* Style *// 
import './featured.scss'

//* Icons *// 
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';

const Featured = () => {
  return (
    <div className='featured' >
      <div className="top">
        <h3 className="title">Total Revenue</h3>
        <MoreVertOutlinedIcon fontSize='small' />
      </div>

      <div className="bottom">
        <div className="featuredChart" style={{ width: 200, height: 200 }}>
          <CircularProgressbar value={70} text={'70%'} strokeWidth={3} />
        </div>

        <p className='title' >Total sales made today</p>
        <p className='amount' >230$</p>
        <p className='desc'>Last payment is not valid for now</p>

        <div className="summry">
          <div className="summryItem">
            <p>Target</p>

            <div className="result positive">
              <ArrowDropUpOutlinedIcon />
              <span>12.5%</span>
            </div>
          </div>

          <div className="summryItem">
            <p>Last week</p>

            <div className="result positive">
              <ArrowDropUpOutlinedIcon />
              <span>12.5%</span>
            </div>
          </div>

          <div className="summryItem">
            <p>Last month</p>

            <div className="result positive">
              <ArrowDropUpOutlinedIcon />
              <span>12.5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured