import React from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { processRepTitle,sscDisInvis,fetchProcessData,riskRepTitle,fetchRiskData,controlRepTitle,fetchControlData,testRepTitle,fetchTestData} from '../actions'

const PrctCount = ({proCount,risCount,conCount,tesCount}) => {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  return (
    <>
    <div style={{ borderBottom:'2px solid black'}} className='prctDivCont'>
    <div>
      <p style={{fontSize:'5vw', marginLeft:'40px',marginTop:'5px'}}>{proCount&& proCount.length+risCount.length+conCount.length+tesCount.length}</p>
      <p style={{color:'#399aca', fontSize:'5vw', marginTop:'-6vh',marginLeft:'1vw'}}><span>Total</span></p>
    </div>
    <div className='prctConsolDiv'>
    {proCount &&<h4 onClick={()=>{navigate('/Component/PrctRep');dispatch(processRepTitle())&&dispatch(sscDisInvis())&&dispatch(fetchProcessData())
}}><span style={{color:'#399aca',cursor:'pointer'}}>Process</span> - {proCount.length}</h4>}
    {risCount && <h4 onClick={()=>{navigate('/Component/PrctRep');dispatch(riskRepTitle())&&dispatch(sscDisInvis())&&dispatch(fetchRiskData())}}><span style={{color:'#399aca',cursor:'pointer'}}>Risk</span> - {risCount.length}</h4>}
    {conCount && <h4 onClick={()=>{navigate('/Component/PrctRep');dispatch(controlRepTitle())&&dispatch(sscDisInvis())&&dispatch(fetchControlData())}}><span style={{color:'#399aca',cursor:'pointer'}}>Control</span> - {conCount.length}</h4>}
    {tesCount&& <h4 onClick={()=>{navigate('/Component/PrctRep');dispatch(testRepTitle())&&dispatch(sscDisInvis())&&dispatch(fetchTestData())}}><span style={{color:'#399aca',cursor:'pointer'}}>Test</span> - {tesCount.length}</h4>}
    </div>
    </div>
    </>
  )
}

export default PrctCount