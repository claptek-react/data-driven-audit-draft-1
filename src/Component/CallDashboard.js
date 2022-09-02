import React,{useEffect,useMemo,useState} from 'react'
import { Table } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { COLUMNS } from './column';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { fetchProcessData, fetchControlData, fetchRiskData, fetchTestData } from '../actions';
import MOCK_DATA from './MOCK_DATA.json'


const CallDashboard = () => {
    const myPrctState = useSelector((state)=> state.getProcessData);
    const dispatch = useDispatch()
    const [prop, setprop] = useState()


const getThePrctVal =  new Promise((resolve,reject)=>{
    if(myPrctState===undefined){
        resolve(myPrctState)
    }
})


useEffect(()=>{setprop(myPrctState.val)},[myPrctState])

    async function CombineDataTable(){
        await getThePrctVal;
    }
    
    CombineDataTable()


  return (
    <>
    <div style={{marginBottom:'2vh'}}>
    <DropdownButton
    title='Reports'
    onSelect={(event)=>{
    if(event==='Process'){
        dispatch(fetchProcessData())
    }else if(event==='Risk'){
        dispatch(fetchRiskData())
    }else if(event==='Control'){
        dispatch(fetchControlData())
    }else if(event==='Test'){
        dispatch(fetchTestData())
    } 
}}>
        <Dropdown.Item eventKey='Process'>Process</Dropdown.Item>
        <Dropdown.Item eventKey='Risk'>Risk</Dropdown.Item>
        <Dropdown.Item eventKey='Control'>Control</Dropdown.Item>
        <Dropdown.Item eventKey='Test'>Test</Dropdown.Item>
    </DropdownButton>
    </div>
    <Table column={COLUMNS} prctvaldata={MOCK_DATA}/>
    </>
  )
}

export default CallDashboard