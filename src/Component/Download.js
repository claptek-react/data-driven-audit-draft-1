import React, { useEffect, useState } from 'react'
import {Dropdown,DropdownButton} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import moment from 'moment'
import axios from 'axios'
const Download = () => {
  const [prct,setprct] = useState()
  const myTitleState = useSelector((state)=>state.toggleTitle)

  useEffect(()=>{
    if(myTitleState==='Process Report'){setprct('Process')}
    else if(myTitleState==='Risk Report'){setprct('Risk')}
    else if(myTitleState==='Control Report'){setprct('Control')}
    else if(myTitleState==='Test Report'){setprct('Test')}
  },[])

  useEffect(()=>{
    if(myTitleState==='Process Report'){setprct('Process')}
    else if(myTitleState==='Risk Report'){setprct('Risk')}
    else if(myTitleState==='Control Report'){setprct('Control')}
    else if(myTitleState==='Test Report'){setprct('Test')}
  },[myTitleState])

  //THIS IS TO DOWNLOAD THE EXCEL REPORT OF PRCT--------------------------------------------------------------------
const downExcel =()=>{

  let dformat = moment(new Date()).format("DD/MM/YYYY");

  console.log('generateExcel started => ')
        axios({
  url: `http://localhost:8080/audit/${prct}DataForExcel`,
  method: 'GET',
  responseType: 'blob', // important
  // origins: `http://localhost:3000`
}).then(function(response){
  console.log('generateExcel in download => ' + JSON.stringify(response))
  axios({
    url: `http://127.0.0.1:8081/${prct}Data.xlsx`, //your url
    method: 'GET',
    responseType: 'blob', // important
}).then((response) => {
  console.log('generateExcel inside second response => ')
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${prct}Data${dformat}.xlsx`); //or any other extension
    document.body.appendChild(link);
    link.click();
});
})
}


  return (
    <div >
    <DropdownButton title='Download' onSelect={(event)=>{
      if(event===`.xlsx`){downExcel()}
    }}>
        <Dropdown.Item eventKey={'.xlsx'}>Excel</Dropdown.Item>
    </DropdownButton>
    </div>
  )
}

export default Download