import React,{useEffect,useState} from 'react'
import axios from 'axios'
import PrctBar from './PrctBar'
import PrctCount from './PrctCount'
import PrctDonut from './PrctDonut'
import {Chart as ChartJS} from 'chart.js/auto'
import UserCount from './UserCount'
import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux'
import { fetchColumn, fetchFormInfoData, fetchPrctFieldData, fetchSection, getFormId } from '../actions'


const Dashboard = () => {
  const [proCount, setproCount] = useState([])
  const [risCount,setrisCount] = useState()
  const [conCount, setconCount] = useState()
  const [tesCount,settesCount] = useState()
  const [loading,setloading] = useState(false)
  const dispatch = useDispatch()
  const formInfoState = useSelector((state)=>state.getFormInfoData)
  const formSectionState = useSelector((state)=>state.getSectionData)


useEffect(()=>{
  const expensesListResp = async () => {
      await axios.get('http://localhost:8080/audit/Process').then((res)=>{setproCount(res.data)})
      await axios.get('http://localhost:8080/audit/Risk').then((res)=>{setrisCount(res.data); })
      await axios.get('http://localhost:8080/audit/Control').then((res)=>{setconCount(res.data); })
      await axios.get('http://localhost:8080/audit/Test').then((res)=>{settesCount(res.data); setloading(true);})
    }
  expensesListResp()
  dispatch(fetchFormInfoData())
  dispatch(fetchSection())
  dispatch(fetchPrctFieldData())
  // dispatch(fetchColumn())
},[])



  return (
    <>
        {/* <Head Btn1='Save' Btn2='Submit' Btn3='Close'/> */}
    { loading ? <div>
        <div className='prctCountDiv'>
          <h4>PRCT Count</h4>
          <PrctCount proCount={proCount} risCount={risCount} conCount={conCount} tesCount={tesCount}/>
        </div>
        <div className='userCountDiv'>
          <h4>User Count</h4>
          <UserCount/>
        </div>
        <div className='prctBarDiv'> 
        <h4>PRCT Bar Chart</h4>
        < PrctBar/>
        </div>
        <div className='prctDoghnutDiv'>
          <h4>PRCT Doghnut Chart</h4>
        <PrctDonut/>
        </div>
    </div> : <Loader/>}
    </>
  )
}

export default Dashboard