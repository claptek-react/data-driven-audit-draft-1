import React,{useEffect,useState}from 'react'
import { Table } from './Table'
import Head from './Head'
import {useDispatch, useSelector} from 'react-redux';
import'./Dashboard.css'
import Loader from './Loader';
import ColumnFilter from './ColumnFilter';
import { NumberRangeColumnFilter } from './NumberRangeColumnFilter';
import { sscDisInvis } from '../actions';


const PrctRep = () => {
  const dispatch = useDispatch()
  var myPrctState = useSelector((state)=> state.getProcessData);
  var mycolState = useSelector((state)=>state.getColumnData)
  var myApiData = useSelector((state)=>state.getApiDataRed)
  const dashState = useSelector((state)=>state.getDashboardData)
  const [prop, setprop] = useState()
  const [col, setcol] = useState()

useEffect(()=>{},[])

let colArray;
useEffect(()=>{
  colArray = mycolState.val.map((res)=>{
    return {'Header' : res.fieldName,'accessor': res.accessor,'Filter' :   res.columnFilter !== 'date' ? ColumnFilter : NumberRangeColumnFilter, 'filter' : 'between'}
  })
},[myPrctState])

useEffect(()=>{
  setcol(colArray)
  setprop(myPrctState.val);
  // dashState.val=[]
  dispatch(sscDisInvis())
},[myPrctState])



  return (
    <>
    <Head Btn1='Save' Btn2='Submit' Btn3='Close'/>
    <div style={{height:'50vh',width:'50vw',marginLeft:'12px',marginTop:'-1vh'}}>
    <div style={{marginBottom:'2vh'}}>
    </div>{
    }
    <div>
    <div style={{marginBottom:'1vh'}}>
    </div>
    {mycolState.loading ?   <Loader/> : (myPrctState.loading ? <Loader/> : myApiData.loading ? <Loader/> : <Table column={col} prctvaldata={prop}/>)} 
    </div>
    </div>
    </>
  )
}

export default PrctRep