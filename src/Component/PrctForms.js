import React from 'react'
import { Accordion,Container } from 'react-bootstrap'
import {useDispatch, useSelector } from 'react-redux'
import Loader from './Loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Process.css'
import { useRef } from 'react';
import {useNavigate} from 'react-router-dom'
import Head from './Head';
import { postFields } from '../actions';
import { useEffect } from 'react';

const PrctForms = () => {
    const SectionState = useSelector((state)=>state.getSectionData);
    const fieldState = useSelector((state)=>state.getPrctFieldData);
    const formNameState = useSelector((state)=>state.toggleTitle);
    const myFieldValueState = useSelector((State)=>State.getFieldValueData)

    const fieldArray = useRef([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    useEffect(()=>{
      console.log(myFieldValueState.val)
    },[myFieldValueState])
    
    
    const getFields = ()=>{
      let obj = {}
      fieldState.val.map((fil,i)=>{
        return obj[fieldArray.current[i].id]=fieldArray.current[i].value
      })
      const fName = (formNameState[0].substring(0,formNameState[0].indexOf(' '))).toLowerCase();

      dispatch(postFields(fName,obj))
      console.log(obj)
      navigate('/Component/Dashboard')

    }

  return (
    <>
    <Head Btn1='Save' Btn2='Submit' Btn3='Close' callGetField={getFields}/>
    {
      SectionState.loading ? <Loader/> : <Container className='accCont'>
        <Accordion defaultActiveKey={SectionState.val[0].sectionId}>
          {
            SectionState.val.map((res)=>{
              return <Accordion.Item eventKey={res.sectionId} className='accItem'>
                <Accordion.Header><span className='accHeadTxt'>{res.sectionName}</span> </Accordion.Header>
                <Accordion.Body>
                  {
                    fieldState.loading ? <Loader/> : fieldState.val.filter((fil)=>
                    {return fil.fieldCategory===res.sectionName}).map((res)=>{
                      return <div>
                        {
                          res.fieldType!== 'select' ?
                          <div className='form-group'>
                            <label htmlFor={res.fieldStoreValue}>{res.fieldLableValue}</label>
                            <input type={res.fieldType} className="form-control" id={res.fieldStoreValue} ref={(ele)=>fieldArray.current.push(ele)} placeholder={res.fieldLabelValue}></input>
                            </div>
                            :
                        <div className='form-group'>
                            <label htmlFor={res.fieldStoreValue}>{res.fieldLableValue}</label><br></br>
                            <select id={res.fieldStoreValue} ref={(ele)=>fieldArray.current.push(ele)}>
                            {
                              myFieldValueState.loading ? <Loader/> : myFieldValueState.val.filter((fil)=>{return fil.fieldStoredValue===res.fieldStoreValue}).map((res)=>{
                                return <option value={res.fieldOptions}>{res.fieldOptions}</option>
                              })
                            }
                            </select>
                        </div> 
                        }
                      </div>
                    })
                  }
                </Accordion.Body>
              </Accordion.Item>
            })
          }
        </Accordion>
      </Container>
    }
    </>
  )
}

export default PrctForms