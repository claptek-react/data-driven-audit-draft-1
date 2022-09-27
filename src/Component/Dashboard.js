import React,{useEffect,useState} from 'react'
import PrctBar from './PrctBar'
import PrctCount from './PrctCount'
import PrctDonut from './PrctDonut'
import {Chart as ChartJS} from 'chart.js/auto'
import UserCount from './UserCount'
import Loader from './Loader'
import {useSelector,} from 'react-redux'


const Dashboard = () => {
  const myProcessState = useSelector((state)=>state.getProcessDashData)
  const myRiskState = useSelector((state)=>state.getRiskDashData)
  const myControlState = useSelector((state)=>state.getControlDashData)
  const myTestState = useSelector((state)=>state.getTestDashData)
  const dashState = useSelector((state)=>state.getDashboardData)
  var myApiData = useSelector((state)=>state.getApiDataRed)


  return (
    <>
        {/* <Head Btn1='Save' Btn2='Submit' Btn3='Close'/> */}
    { myApiData.loading ? <Loader/> : myRiskState.loading ? <Loader/> : myControlState.loading ? <Loader/> : myTestState.loading ? <Loader/> : myProcessState.loading ? <Loader/> : dashState.loading ? <Loader/> : <div className='divCont'>
        <div className='prctCountDiv'>
          <h4>PRCT Count</h4>
          <PrctCount proCount={myProcessState.val} risCount={myRiskState.val} conCount={myControlState.val} tesCount={myTestState.val}/>
        </div>
        <div className='userCountDiv'>
          <h4>User Count</h4>
          <UserCount/>
        </div>
        <div className='prctBarDiv'> 
        <h4>PRCT Bar Chart</h4>
        < PrctBar proCount={myProcessState.val} risCount={myRiskState.val} conCount={myControlState.val} tesCount={myTestState.val} />
        </div>
        <div className='prctDoghnutDiv'>
          <h4 className='doghnutTitle'>PRCT Doghnut Chart</h4>
        <PrctDonut proCount={myProcessState.val} risCount={myRiskState.val} conCount={myControlState.val} tesCount={myTestState.val} />
        </div>
    </div>}
    </>
  )
}

export default Dashboard