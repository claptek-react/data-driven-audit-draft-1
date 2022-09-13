import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { multiRowCarrier } from '../actions'

const MultiRow = () => {

    const dispatch = useDispatch()
    const [inputFields, setinputFields] = useState([{field:'',fieldValue:''}])
    const myMultiState = useSelector((state)=>state.getMultiRowData)


 const handleChangeInput=(index,event)=>{
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setinputFields(values)
 }
 
 const handleAdd = ()=>{
    setinputFields([...inputFields,{field:'',fieldValue:''}])
 }

 const handleRemove = (index) =>{
    const values = [...inputFields];
    values.splice(index,1);
    setinputFields(values)
 }

 useEffect(()=>{dispatch(multiRowCarrier(inputFields))},[inputFields])

     
  return (
    <>
    <Container className='accCont'>

    {
        inputFields.map((inputField,index)=>{
            return(
                <div key={index}>
                    <input type="text" style={{marginRight:'1vw'}} name='field' value={inputField.field} placeholder={`Field`} onChange={event => handleChangeInput(index,event)}/>

                    <input type="text" name='fieldValue' value={inputField.fieldValue} placeholder={`Field Value`} onChange={event => handleChangeInput(index,event)}  style={{width:`30vw`}} />
                    <button className='btn btn-primary' onClick={()=>{handleAdd()}} style={{margin:'10px'}}>+</button>
                    <button className='btn btn-danger' onClick={()=>{handleRemove()}}>-</button>
                </div>
            )
        })
    }
    {/* <button className='btn btn-success'>Send</button> */}
    
    </Container>
    </>
  )
}

export default MultiRow