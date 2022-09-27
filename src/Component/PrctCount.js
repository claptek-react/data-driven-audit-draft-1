import React from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
const PrctCount = ({proCount,risCount,conCount,tesCount}) => {
  return (
    <>
    <div style={{ borderBottom:'2px solid black'}} className='prctDivCont'>
    <div>
      <p style={{fontSize:'5vw', marginLeft:'40px',marginTop:'5px'}}>{proCount&& proCount.length+risCount.length+conCount.length+tesCount.length}</p>
      <p style={{color:'#399aca', fontSize:'5vw', marginTop:'-6vh',marginLeft:'1vw'}}><span>Total</span></p>
    </div>
    <div className='prctConsolDiv'>
    {proCount &&<h4><span style={{color:'#399aca',cursor:'pointer'}}>Process</span> - {proCount.length}</h4>}
    {risCount && <h4><span style={{color:'#399aca',cursor:'pointer'}}>Risk</span> - {risCount.length}</h4>}
    {conCount && <h4 ><span style={{color:'#399aca',cursor:'pointer'}}>Control</span> - {conCount.length}</h4>}
    {tesCount&& <h4><span style={{color:'#399aca',cursor:'pointer'}}>Test</span> - {tesCount.length}</h4>}
    </div>
    </div>
    </>
  )
}

export default PrctCount