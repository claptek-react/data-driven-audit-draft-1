import React, { useRef } from 'react'
import Head from './Head';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { sscDisInvis,dashboardTitle } from '../actions'

export const AuditReport = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const field1 = useRef();
  const field2 = useRef();
  const field3 = useRef();
  const field4 = useRef();

  const getFields = ()=>{
    const arDataObj = {      
      formName :'Audit Report',  
      arData : {
        para1 : field1.current.value,
        para2 : field2.current.value,
        para3 : field3.current.value,
        para4 : field4.current.value,
      }
    }

    navigate('/Component/Dashboard'); dispatch(dashboardTitle()); dispatch(sscDisInvis())

  }
  return (
    <>
    <Head Btn1='Save' Btn2='Submit' Btn3='Close'callGetField={getFields}/>
    <div style={{height:'50vh',width:'50vw',margin:'25px'}}>
    <form>
  <div className="form-group">
    <label htmlFor="FieldOne">Field One</label>
    <input type="text" className="form-control" id="FieldOne" aria-describedby="emailHelp" placeholder="FIeld One" ref={field1}/>
  </div>
  <div className="form-group">
    <label htmlFor="FieldTwo">Field Two</label>
    <input type="number" className="form-control" id="FieldTwo" placeholder="Field Two" ref={field2}/>
  </div>
  <div className="form-group">
    <label htmlFor="FieldThree">Field Three</label>
    <input type="password" className="form-control" id="FieldThree" placeholder="Field Three" ref={field3}/>
  </div>
  <div className="form-group">
    <label htmlFor="FieldFour">Field Four</label>
    <input type="email" className="form-control" id="FieldFour" placeholder="Field Four" ref={field4}/>
  </div>
</form>
    </div>
    </>
  )
}

