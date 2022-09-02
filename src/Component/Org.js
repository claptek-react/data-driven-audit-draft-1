import React,{useRef} from 'react'
import Head from './Head'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { sscDisInvis,dashboardTitle } from '../actions'
import axios from 'axios'

const Org = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const field1 = useRef();
  const field2 = useRef();
  const field3 = useRef();
  const field4 = useRef();
  const field5 = useRef();
  const field6 = useRef();
  const field7 = useRef();
  const field8 = useRef();


  const getFields = ()=>{
    const orgDataObj = {     
      formName :'Org',
      orgData : {
        id : field1.current.value,
        orgName : field2.current.value,
        orgLevel : field3.current.value,
        orgTitle : field4.current.value,
        location : field5.current.value,
        startDate : field6.current.value,
        endDate : field7.current.value,
        parentOrg : field8.current.value,      
      },
    }
    axios.post('http://localhost:8080/audit/org',orgDataObj.orgData)
    .then((res)=>{console.log(res)})
    .catch((err)=>console.warn(err))
    navigate('/Component/Dashboard'); dispatch(dashboardTitle()); dispatch(sscDisInvis())
  }

  return (
    <>
    <Head Btn1='Save' Btn2='Submit' Btn3='Close' callGetField={getFields}/>
    <div style={{height:'50vh',width:'50vw',margin:'25px'}}>
    <form>
  <div className="form-group">
    <label htmlFor="OrganisationId">Organisation Id</label>
    <input type="text" className="form-control" id="OrganisationId"  placeholder="OrganisationId" ref={field1}/>
  </div>
  <div className="form-group">
    <label htmlFor="OrgName">Organisation Name</label>
    <input type="number" className="form-control" id="OrgName" placeholder="OrgName" ref={field2}/>
  </div>
  <div className="form-group">
    <label htmlFor="OrganisationLevel">Organisation Level</label>
    <input type="password" className="form-control" id="OrganisationLevel" placeholder="OrganisationLevel" ref={field3}/>
  </div>
  <div className="form-group">
    <label htmlFor="OrganisationTitle">Organisation Title</label>
    <input type="email" className="form-control" id="OrganisationTitle" placeholder="OrganisationTitle" ref={field4}/>
  </div>
  <div className="form-group">
    <label htmlFor="Location">Location</label>
    <input type="email" className="form-control" id="Location" placeholder="Location" ref={field5}/>
  </div>
  <div className="form-group">
    <label htmlFor="StartDate">Start Date</label>
    <input type="email" className="form-control" id="StartDate" placeholder="StartDate" ref={field6}/>
  </div>
  <div className="form-group">
    <label htmlFor="EndDate">End Date</label>
    <input type="email" className="form-control" id="EndDate" placeholder="EndDate" ref={field7}/>
  </div>
  <div className="form-group">
    <label htmlFor="ParentOrganisation">Parent Organisation</label>
    <input type="email" className="form-control" id="ParentOrganisation" placeholder="ParentOrganisation" ref={field8}/>
  </div>
 </form>
    </div>
    </>
   )
}

export default Org