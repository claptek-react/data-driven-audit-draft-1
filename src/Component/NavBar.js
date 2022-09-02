import React, {useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import './Navbar.css'
import { loggedOut,navDisable, processTitle, riskTitle, controlTitle, testTitle, orgTitle, userTitle, dashboardTitle, auditplanTitle, manageauditTitle, workpaperTitle, auditreportTitle,  sscDisInvis, sscDisVis, processRepTitle, riskRepTitle, testRepTitle,controlRepTitle, fetchPrctFieldData, fetchSection, fetchFormInfoData, getFormId, allTitles, fetchColumn, fetchFieldValue } from '../actions';
import { fetchProcessData, fetchControlData, fetchRiskData, fetchTestData } from '../actions';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export let navAuditType;
const NavBar = () => {
  const myState1 = useSelector((state)=>state.navVisibility)
  const myUserState = useSelector((state)=>state.setUserDetails)
  const formInfoState = useSelector((state)=>state.getFormInfoData)



  const dispatch=useDispatch()


  const navigate = useNavigate();

  const handleLogOut=()=>{
    dispatch(navDisable())&&
    dispatch(loggedOut())&&
    navigate('/')
  }
  const ppf = useRef();
  const cardDiv = useRef();
  const logOut =useRef();

  const ppfDisplay = ()=>{
    cardDiv.current.style.display='block'
  }

  const ppfDisplayInv = ()=>{
    cardDiv.current.style.display='none'
  }


  return (
    <>
    <div style={{display:myState1, position:'sticky',top:'0', zIndex:'999'}}>
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
     <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active" style={{marginRight:'1vw'}}>
      <DropdownButton
      title="Library"
      id="dropdown-menu-align-right"
      onSelect={(event)=>{
        dispatch(fetchSection(event))
        dispatch(fetchPrctFieldData(event))
        dispatch(fetchFieldValue())
        navigate('/Component/PrctForms')
        const currTitle = formInfoState.val.filter((fil)=>{return fil.formId===event}).map((res)=>{
          return res.formName
        })
        dispatch(allTitles(currTitle))
        dispatch(sscDisVis())
      }}>

       {
        formInfoState.val.filter((fil)=>{return fil.formInfo==='LIBRARY'}).map((res)=>{
          return <Dropdown.Item eventKey={res.formId}>{res.formName}</Dropdown.Item>
        })
       }
      </DropdownButton>
           </li>      
      <li className="nav-item" style={{marginRight:'1vw'}}>
      <DropdownButton
      title="Audit"
      id="dropdown-menu-align-right"
      onSelect={(event)=>{
        dispatch(fetchSection(event))
        dispatch(fetchPrctFieldData(event))
        navigate('/Component/PrctForms')
        const currTitle = formInfoState.val.filter((fil)=>{return fil.formId===event}).map((res)=>{
          return res.formName
        })
        dispatch(allTitles(currTitle))
        dispatch(sscDisVis())
      }}>
       {
        formInfoState.val.filter((fil)=>{return fil.formInfo==='AUDIT'}).map((res)=>{
          return <Dropdown.Item eventKey={res.formId}>{res.formName}</Dropdown.Item>
        })
       }
      </DropdownButton>
      </li>
      <li className="nav-item" style={{marginRight:'1vw'}}>
      <DropdownButton
      
      title="SetUp"
      id="dropdown-menu-align-right"
      onSelect={(event)=>{navAuditType = event;
        navigate(`/Component/${navAuditType}`)&&dispatch(sscDisVis());
        if(navAuditType==='Org'){
          dispatch(orgTitle())&&dispatch(sscDisVis())
        }else if(navAuditType==='User'){
          dispatch(userTitle())&&dispatch(sscDisVis())
        }}}>
              <Dropdown.Item eventKey="User">User</Dropdown.Item>
              <Dropdown.Item eventKey="Org">Org</Dropdown.Item>
      </DropdownButton>
      </li>
      <li className="nav-item" style={{marginRight:'1vw'}} onClick={()=>dispatch(dashboardTitle())&&dispatch(sscDisInvis())}>
        <button className='btn btn-primary' onClick={()=>{navigate('/Component/Dashboard');dispatch(dashboardTitle());dispatch(sscDisInvis())}}>Dashboard</button>
      </li>
      <li>
      <DropdownButton
    title='Reports'
    onSelect={(event)=>{
    if(event==='Process'){
        navigate('/Component/PrctRep');dispatch(fetchProcessData())
    }else if(event==='Risk'){
        navigate('/Component/PrctRep');dispatch(fetchRiskData())
    }else if(event==='Control'){
        navigate('/Component/PrctRep');dispatch(fetchControlData())
    }else if(event==='Test'){
        navigate('/Component/PrctRep');dispatch(fetchTestData())
    }
    const currTitle = formInfoState.val.filter((fil)=>{return fil.formName===event}).map((res)=>{
      return res.formName
    })

    const currReptId = formInfoState.val.filter((fil)=>{return fil.formName===event}).map((res)=>{return res.formId})
    dispatch(allTitles(currTitle))
    dispatch(sscDisInvis())
    dispatch(fetchColumn(currReptId))
}}>
      {
        formInfoState.val.filter((fil)=>{return fil.formInfo==='REPORT'}).map((res)=>{
          return <Dropdown.Item eventKey={res.formName}>{res.formName}</Dropdown.Item>
        })
       }
    </DropdownButton>
      </li>
      <li className="nav-item">

      </li>
      <li>
      <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Profile" id='ppf' ref={ppf} onMouseOver={ppfDisplay}/>
      </li>
    </ul>
  </div>
</nav>
      <div id='cardDiv' ref={cardDiv} onMouseOver={()=>ppfDisplay()} onMouseOut={()=>ppfDisplayInv()}>
        <p style={{marginLeft:'1vw', marginTop:'2vh'}}> <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_960_720.png" alt="" style={{height:'8vh', width:'4vw', borderRadius:'20px'}} /> <strong style={{fontWeight:'bolder', fontStyle:'italic', fontSize:'25px'}}>{myUserState}</strong></p>
        <p className='had' onClick={()=>{navigate('#')}}>Help</p>
        <p className='had' onClick={()=>{navigate('#')}}>About</p>
        <p className='had' onClick={()=>{navigate('#')}}>Details</p>
        <button className="btn btn-danger lobtn" onClick={handleLogOut} ref={logOut}>Log Out</button>
      </div>
    </div>
    </>
  )
}

export default NavBar