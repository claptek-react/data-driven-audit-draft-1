import React, { useState } from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { Table } from './Table'
import ColumnFilter from './ColumnFilter';
import { NumberRangeColumnFilter } from './NumberRangeColumnFilter';
import Loader from './Loader'
import Head from './Head';
import { sscDisInvis } from '../actions';

const Task = () => {
    var myPrctState = useSelector((state)=> state.getProcessData);
    var mycolState = useSelector((state)=>state.getTaskColumnData);
    const myApiState = useSelector((state)=>state.getApiDataRed)
    const dispatch = useDispatch()

    const [prctvaldata, setprctvaldata] = useState()
    const [col, setcol] = useState()

    let colArray;
    useEffect(()=>{
        colArray = mycolState.val.map((res)=>{
          return {'Header' : res.fieldName,'accessor': res.accessor,'Filter' :   res.columnFilter !== 'date' ? ColumnFilter : NumberRangeColumnFilter, 'filter' : 'between'}
        })
        setcol(colArray)
        setprctvaldata(myPrctState.val);
      },[myPrctState])
        
      useEffect(()=>{dispatch(sscDisInvis())},[])
  return (
    <>
    <Head/>
    <div style={{height:'50vh',width:'50vw',marginLeft:'12px',marginTop:'5vh'}}>
        {
            mycolState.loading  ? <Loader/> : mycolState.loading ? <Loader/>: myApiState.loading ? <Loader/> :<Table column={col} prctvaldata={prctvaldata}/>
        }
    </div>
    </>
  )
}

export default Task