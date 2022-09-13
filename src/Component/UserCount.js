import React, { useState,useEffect } from 'react'
import axios from 'axios'

const UserCount = () => {
 const[Org1, setOrg1] = useState()
 const[Org2, setOrg2] = useState()
 const[Org3, setOrg3] = useState()
 const[Org4, setOrg4] = useState()
 const[Org5, setOrg5] = useState()

  
  
  useEffect(()=>{
    const expensesListResp = async () => {
        const userCount = await axios.get('http://localhost:8080/audit/User')
        setOrg1(userCount.data.filter((res)=>res.organization ==="0rg 1"))
        setOrg2(userCount.data.filter((res)=>res.organization ==="0rg 2"))
        setOrg3(userCount.data.filter((res)=>res.organization ==="0rg 3"))
        setOrg4(userCount.data.filter((res)=>res.organization ==="0rg 4"))
        setOrg5(userCount.data.filter((res)=>res.organization ==="0rg 5"))

      }
    expensesListResp()
  },[])
  return (
    <>
    <div style={{borderBottom:'2px solid black'}} className='userDivCont'>
    <div>
      <p style={{fontSize:'5vw', marginLeft:'40px',marginTop:'5px'}}>{Org1&&Org1.length+Org2.length+Org3.length+Org4.length+Org5.length}</p>
      <p style={{color:'#399aca', fontSize:'5vw', marginTop:'-6vh',marginLeft:'1vw'}}><span>Total</span></p>
    </div>
    <div className='userConsolDiv'>
    {Org1 &&<h5><span style={{color:'#399aca',cursor:'pointer'}}>Org1</span> - {Org1.length}</h5>}
    {Org2 &&<h5><span style={{color:'#399aca',cursor:'pointer'}}>Org2</span> - {Org2.length}</h5>}
    {Org3 &&<h5><span style={{color:'#399aca',cursor:'pointer'}}>Org3</span> - {Org3.length}</h5>}
    {Org4 &&<h5><span style={{color:'#399aca',cursor:'pointer'}}>Org4</span> - {Org4.length}</h5>}
    {Org5 &&<h5><span style={{color:'#399aca',cursor:'pointer'}}>Org5</span> - {Org5.length}</h5>}
    </div>
    </div>
    </>
  )
}

export default UserCount