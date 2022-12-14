import React from 'react'
import { Accordion,Container } from 'react-bootstrap'
import {useDispatch, useSelector } from 'react-redux'
import Loader from './Loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Process.css'
import { useRef } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import Head from './Head';
import { postFields, postMultiFields } from '../actions';
import MultiRow from './MultiRow';
import './Process.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchApiId } from '../actions/ApiRepo/GetApiId';

const PrctForms = () => {
  // const location = useLocation()
    const SectionState = useSelector((state)=>state.getSectionData);
    const fieldState = useSelector((state)=>state.getPrctFieldData);
    const formNameState = useSelector((state)=>state.toggleTitle);
    const myFieldValueState = useSelector((State)=>State.getFieldValueData)
    var myApiData = useSelector((state)=>state.getApiDataRed)
    const myMultiState = useSelector((state)=>state.getMultiRowData)
    const formIdState = useSelector((state)=>state.setFormId)
    const [val,setval] = useState()

    useEffect(()=>{console.log(formIdState)},[formIdState])
    // useEffect(()=>{console.log(location.state.data)},[])

    const fieldArray = useRef([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
        
    let obj = {}
    let objIdVal;
    const getFields = ()=>{
      fieldState.val.map((fil,i)=>{
        return (
          obj[fieldArray.current[i].id]=fieldArray.current[i].value
          )
      })

      objIdVal=obj.objId;

      myMultiState.forEach((item,index)=>{myMultiState[index].objId=objIdVal})
      // myMultiState.forEach((item,index)=>{myMultiState[index].muABCKey=objIdVal})


      console.log('obj'+JSON.stringify( obj))
      console.log('myMultiState'+JSON.stringify(myMultiState))

      
      const fName = (formNameState[0].substring(0,formNameState[0].indexOf(' '))).toLowerCase();

      dispatch(fetchApiId(formIdState,'SubmitNonMultirow',obj,myMultiState))
      for (let i = 0; i <= myMultiState.length; i++) {
        dispatch(fetchApiId(formIdState,'SubmitMultirow',obj,myMultiState[i]))
      }

      navigate('/Component/Dashboard')
    }



  return (
    <>
    <Head Btn1='Save' Btn2='Submit' Btn3='Close' callGetField={getFields}/>
    {
      SectionState.loading ? <Loader/> : myApiData.loading ? <Loader/> : <Container className='accCont'>
        <Accordion defaultActiveKey={SectionState.val[0].sectionId}>
          {
            SectionState.val.map((res)=>{
              return <Accordion.Item eventKey={res.sectionId} className='accItem'>
                <Accordion.Header><span className='accHeadTxt'>{res.sectionName}</span> </Accordion.Header>
                <Accordion.Body>
                  {
                    fieldState.loading ? <Loader/> : fieldState.val.filter((fil)=>
                    {return fil.fieldCategory===res.sectionName}).map((res)=>{
                      return <>
                        {
                          res.fieldType!== 'select' ?
                          <div className='form-group' style={{display:res.displayField,width:res.widthOfField}}>
                            <label htmlFor={res.fieldStoreValue}>{res.fieldLableValue}</label>
                            <input type={res.fieldType} className="form-control" id={res.fieldStoreValue} ref={(ele)=>fieldArray.current.push(ele)}  readOnly={res.readOnlyField} style={{height:res.heightOfField,width:res.widthOfField}} value={val} onChange={()=>{setval(val)}}></input>
                            </div>
                            :
                        <div style={{display:res.displayField,width:res.widthOfField}} >
                            <label htmlFor={res.fieldStoreValue}>{res.fieldLableValue}</label><br></br>
                            <select id={res.fieldStoreValue} ref={(ele)=>fieldArray.current.push(ele)} readOnly={res.readOnlyField}  class="form-select" aria-label="Default select example" style={{display:res.displayField,width:res.widthOfField,height:res.heightOfField}}>
                            {
                              myFieldValueState.loading ? <Loader/> : myFieldValueState.val.filter((fil)=>{return fil.fieldStoredValue===res.fieldStoreValue}).map((res)=>{
                                return <option value={res.fieldOptions}>{res.fieldOptions}</option>
                              })
                            }
                            </select>
                        </div> 
                        }
                      </>
                    })
                  }
                </Accordion.Body>
              </Accordion.Item>
            })
          }
              <MultiRow/>
        </Accordion>
      </Container>
    }
    
    </>
  )
}

export default PrctForms