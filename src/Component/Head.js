import React from 'react'
import {useSelector } from 'react-redux'
import './Head.css'

const Head = ({Btn1,Btn2,Btn3,callGetField}) => {
    const myState1 = useSelector((state)=>state.navVisibility)
    const titleState = useSelector((state)=>state.toggleTitle)
    const sscState = useSelector((state)=>state.changeSscDisplay)

  return (
    <>
    <div style={{display:myState1, position:'sticky',top:'9vh',zIndex:'999', background:'white',paddingTop:'2vh',borderBottom:'1px solid black'}}>
        <h4 style={{marginLeft:'12px', display:'inline-block', width:'75vw'}}>{titleState}</h4>
        <div style={{display:sscState}}>
        <button className='btn btn-primary ssc ssc1'>{Btn1}</button>
        <button className='btn btn-primary ssc ssc2'  onClick={callGetField}>{Btn2}</button>
        <button className='btn btn-primary ssc ssc3' onClick={()=>alert(`form ${Btn3}ed`)}>{Btn3}</button>
        </div>
        <div style={{height:'5vh'}}></div>
    </div>
    </>
  )
}

export default Head