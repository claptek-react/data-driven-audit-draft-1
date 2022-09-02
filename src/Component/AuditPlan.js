import React, { useRef } from 'react'
import Head from './Head'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { sscDisInvis,dashboardTitle } from '../actions'
import Loader from './Loader'

const AuditPlan = () => {
const myFieldState = useSelector((state)=>state.getPrctFieldData)
const navigate = useNavigate();
const dispatch = useDispatch();
const field1  = useRef();
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
const field13 = useRef();
const field14 = useRef();
const field15 = useRef();
const field16 = useRef();
const field17 = useRef();
const field18 = useRef();
const field19 = useRef();
const field20 = useRef();
const field21 = useRef();
const field22 = useRef();
const field23 = useRef();
const field24 = useRef();
const field25 = useRef();
const field26 = useRef();
const field27 = useRef();
const field28 = useRef();
const field29 = useRef();
const field30 = useRef();
const field31 = useRef();
const field32 = useRef();
const field33 = useRef();
const field34 = useRef();
const field35 = useRef();
const field36 = useRef();
const field37 = useRef();
const field38 = useRef();
const field39 = useRef();
const field40 = useRef();
const field41 = useRef();
const field42 = useRef();
const field43 = useRef();
const field44 = useRef();
const field45 = useRef();
const field46 = useRef();
const field47 = useRef();
const field48 = useRef();
const field49 = useRef();
const field50 = useRef();
const field51 = useRef();
const field52 = useRef();
const field53 = useRef();
const field54 = useRef();
const field55 = useRef();
const field56 = useRef();
const field57 = useRef();
const field58 = useRef();
const field59 = useRef();
const field60 = useRef();
const field61 = useRef();
const field62 = useRef();
const field63 = useRef();
const field64 = useRef();
const field65 = useRef();
const field66 = useRef();
const field67 = useRef();
const field68 = useRef();
const field69 = useRef();
const field70 = useRef();
const pFields = useRef([])

  const getFields = ()=>{
    const apDataObj = {
      formName :'Audit Plan',
      apData : {
        auditType : field1.current.value,
        objType : field2.current.value,
        processInstanceId : field3.current.value,
        instanceId : field4.current.value,
        createdOn : field5.current.value,
        createdBy : field6.current.value,
        modifiedOn : field7.current.value,
        modifiedBy : field8.current.value,
        processCode : field9.current.value,
        editFlag : field10.current.value,
        statusFlag : field11.current.value,
        formPid :field12.current.value,
        newVersion : field13.current.value,
        totalBudgetEfforts : field14.current.value,
        overview : field15.current.value,
        advisorJsonData : field16.current.value,
        enterpriceId : field17.current.value,
        advisorRunFlag : field18.current.value,
        assignedBy : field19.current.value,
        endDate : field20.current.value,
        approvedBy : field21.current.value,
        planTitle : field22.current.value,
        status : field23.current.value,
        reviewer : field24.current.value,
        accomplishments : field25.current.value,
        budgetedEffortLabel4 : field26.current.value,
        budgetedEffortField2 : field27.current.value,
        assignedOn : field28.current.value,
        initiatorAction : field29.current.value,
        budgetedEffortField4 : field30.current.value,
        riskAdvisorJsonData : field31.current.value,
        budgetedEffortLabel3 : field32.current.value,
        budgetedEffortField3 : field33.current.value,
        planAction : field34.current.value,
        versionNo : field35.current.value,
        budgetedEffortLabel2 : field36.current.value,
        significantChallenges : field37.current.value,
        uploadFlag : field38.current.value,
        attachments : field39.current.value,
        canId : field40.current.value,
        approach : field41.current.value,
        budgetedEffortFromAc : field42.current.value,
        orgJsonData : field43.current.value,
        startDate : field44.current.value,
        reviewerFLag : field45.current.value,
        useAssesmentForm : field46.current.value,
        planStage : field47.current.value,
        planComments : field48.current.value,
        approvedOn : field49.current.value,
        restrictAccessTo : field50.current.value,
        tmpPlanId : field51.current.value,
      }
    }
    navigate('/Component/Dashboard'); dispatch(dashboardTitle()); dispatch(sscDisInvis())
  }

  return (
    <>
    <Head Btn1='Save' Btn2='Submit' Btn3='Close' callGetField={getFields}/>
    {myFieldState.loading ? <Loader/> : <div style={{height:'50vh',width:'50vw',margin:'25px'}}>
      {
        myFieldState.val.filter((res)=>{return res.formName==='AuditPlan Form'}).map((res)=>{
          return <div className='form-group'>
            <label htmlFor={res.fieldId}>{res.fieldLableValue}</label>
            <input id={res.fieldId} type={res.fieldType} placeholder={res.fieldLableValue} ref={(element)=>pFields.current.push(element)} className="form-control"></input>
          </div>
        })
      }
    </div>
    }
    </>
  )
}

export default AuditPlan