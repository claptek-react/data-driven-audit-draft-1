import axios from 'axios';
import React,{useRef} from 'react'
import Head from './Head'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { sscDisInvis,dashboardTitle } from '../actions'

const User = () => {
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
  const field9 = useRef();
  const field10 = useRef();
  const field11 = useRef();
  const field12 = useRef();
  const field13=useRef();

  const getFields = ()=>{
    const uDataObj = {      
      formName :'User',
      uData :{
        firstName : field1.current.value,
        middleName : field2.current.value,
        lastName : field3.current.value,
        userName : field4.current.value,
        fullName : field5.current.value,
        emailAddress : field6.current.value,
        phoneNumber : field7.current.value,
        location : field8.current.value,      
        id : field9.current.value,
        startDate : field10.current.value,
        endDate : field11.current.value,      
        organization: field12.current.value,
        role: field13.current.value,
      }
    }
    axios.post('http://localhost:8080/audit/user',uDataObj.uData)
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
    <label htmlFor="FirstName">First Name</label>
    <input type="text" className="form-control" id="FirstName"  placeholder="FirstName" ref={field1}/>
  </div>
  <div className="form-group">
    <label htmlFor="MidleName">Middle Name</label>
    <input type="password" className="form-control" id="MiddleName" placeholder="MiddleName" ref={field2}/>
  </div>
  <div className="form-group">
    <label htmlFor="Lat Name">Last Name</label>
    <input type="number" className="form-control" id="Last Name" placeholder="LastName" ref={field3}/>
  </div>
 
  <div className="form-group">
    <label htmlFor="UserName">User Name</label>
    <input type="email" className="form-control" id="UserName" placeholder="UserName" ref={field4}/>
  </div>
  <div className="form-group">
    <label htmlFor="FullName">Full Name</label>
    <input type="email" className="form-control" id="FullName" placeholder="FullName" ref={field5}/>
  </div>
  <div className="form-group">
    <label htmlFor="EmailAddress">Eamil Address</label>
    <input type="email" className="form-control" id="EmailAddress" placeholder="EmailAddress" ref={field6}/>
  </div>
  <div className="form-group">
    <label htmlFor="PhoneNumber">Phone Number</label>
    <input type="email" className="form-control" id="PhoneNumber" placeholder="PhoneNumber" ref={field7}/>
  </div>
  <div className="form-group">
    <label htmlFor="Location">Location</label>
    <input type="email" className="form-control" id="Location" placeholder="Location" ref={field8}/>
  </div>
  <div className="form-group">
    <label htmlFor="UserId">User Id</label>
    <input type="email" className="form-control" id="UserId" placeholder="UserId" ref={field9}/>
  </div>
  <div className="form-group">
    <label htmlFor="StartDate">Start Date</label>
    <input type="email" className="form-control" id="StartDate" placeholder="StartDate" ref={field10}/>
  </div>
  <div className="form-group">
    <label htmlFor="EndDate">End Date</label>
    <input type="email" className="form-control" id="EndDate" placeholder="EndDate" ref={field11}/>
  </div>
  <div className="form-group">
    <label htmlFor="Organisation">Organisation</label>
    <input type="email" className="form-control" id="Organisation" placeholder="Organisation" ref={field12}/>
  </div>
  <div className="form-group">
    <label htmlFor="Role">Role</label>
    <input type="email" className="form-control" id="Role" placeholder="Role" ref={field13}/>
  </div>
</form>
    </div>
    </>
  )
}

export default User